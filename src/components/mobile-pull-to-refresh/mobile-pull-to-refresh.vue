<template>
  <div :class="containerCls">
    <div :class="`${prefixCls}-content-wrapper`">
      <div :class="wrapCls" ref="containerRef">
        <div v-if="direction === 'up'">
          <slot name="scrollContent"></slot>
        </div>

        <div :class="`${prefixCls}-indicator`">
          <slot name="loadingIcon" v-if="currSt === 'release'"></slot>
          <span>{{ indicator ? indicator[currSt] : INDICATOR[currSt] }}</span>
        </div>

        <div v-if="direction === 'down'">
          <slot name="scrollContent"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = "mobile-pull-to-refresh";
export default {
  name: "MobilePullToRefresh",
  props: {
    distanceToRefresh: {
      type: Number,
      default: 25
    },
    direction: {
      type: String
    },
    prefixCls: {
      type: String,
      default: "vmc-pull-to-refresh"
    },
    indicator: {
      type: Object
    },
    refreshing: {
      type: Boolean,
      default: false
    },
    onRefresh: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      dragOnEdge: false,
      currSt: "",
      currentScreenY: "",
      currentLastScreenY: "",
      currentStartScreenY: "",
      currentTimer: "",
      INDICATOR: {
        activate: "松开立即刷新",
        deactivate: "下拉可以刷新",
        release: "loading",
        finish: "完成刷新"
      }
    };
  },
  methods: {
    init(ele) {
      if (!ele) {
        return;
      }
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {
        // empty
      }
      const willPreventDefault = supportsPassive ? { passive: false } : false;
      // .bind方法将onTouchMove等方法中的this指向绑定的参数
      this._to = {
        touchstart: this.onTouchStart.bind(this, ele),
        touchmove: this.onTouchMove.bind(this, ele),
        touchend: this.onTouchEnd.bind(this, ele),
        touchcancel: this.onTouchEnd.bind(this, ele)
      };
      Object.keys(this._to).forEach(key => {
        ele.addEventListener(key, this._to[key], willPreventDefault);
      });
      // ele.addEventListener('touchstart', this.onTouchStart.bind(this, ele))
      // ele.addEventListener('touchmove', this.onTouchMove.bind(this, ele))
      // ele.addEventListener('touchend', this.onTouchEnd.bind(this, ele))
      // ele.addEventListener('touchcancel', this.onTouchEnd.bind(this, ele))
    },
    onTouchStart(_ele, e) {
      this.currentScreenY = this.currentStartScreenY = e.touches[0].screenY;
      // 一开始 refreshing 为 true 时 this.currentLastScreenY 有值
      this.currentLastScreenY = this.currentLastScreenY || 0;
    },
    onTouchMove(ele, e) {
      // 使用 pageY 对比有问题
      const currentscreenY = e.touches[0].screenY;
      // 拖动方向不符合的不处理
      if (this.direction === "up" && this.currentStartScreenY < currentscreenY) {
        return;
      }
      if (this.direction === "down" && this.currentStartScreenY > currentscreenY) {
        return;
      }
      if (this.isEdge(ele, this.direction)) {
        if (!this.dragOnEdge) {
          this.dragOnEdge = true;
        }
        e.preventDefault();
        // 计算拖动时，触摸目标在屏幕中的Y坐标
        const _diff = Math.round(currentscreenY - this.currentScreenY);
        this.currentScreenY = currentscreenY;
        this.currentLastScreenY += _diff;

        this.setContentStyle(this.currentLastScreenY);

        if (Math.abs(this.currentLastScreenY) < this.distanceToRefresh) {
          if (this.currSt !== "deactivate") {
            this.currSt = "deactivate";
          }
        } else {
          if (this.currSt === "deactivate") {
            this.currSt = "activate";
          }
        }
        // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
        // iOS UIWebView issue, It seems no problem in WKWebView
        const isWebView =
          typeof navigator !== "undefined" &&
          /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            navigator.userAgent
          );
        if (isWebView && e.changedTouches[0].clientY < 0) {
          this.onTouchEnd();
        }
      }
    },
    onTouchEnd() {
      if (this.dragOnEdge) {
        this.dragOnEdge = false;
      }
      if (this.currSt === "activate") {
        this.currSt = "release";
        this.currentTimer = setTimeout(() => {
          if (!this.refreshing) {
            this.currSt = "finish";
            this.reset();
          }
          this.currentTimer = undefined;
        }, 1000);
        this.onRefresh();
      } else {
        this.reset();
      }
    },
    isEdge(ele, direction) {
      if (direction === "up") {
        return ele.scrollHeight - ele.scrollTop === ele.clientHeight;
      }
      if (direction === "down") {
        return ele.scrollTop <= 0;
      }
    },
    triggerPullToRefresh() {
      // 在初始化时、用代码 自动 触发 pullToRefresh
      // 注意：当 direction 为 up 时，当 visible length < content length 时、则看不到效果
      if (!this.dragOnEdge) {
        if (this.refreshing) {
          if (this.direction === "up") {
            this.currentLastScreenY = -this.distanceToRefresh - 1;
          }
          if (this.direction === "down") {
            this.currentLastScreenY = this.distanceToRefresh + 1;
          }
          // change dom need after setState
          this.currSt = "release";
          this.setContentStyle(this.currentLastScreenY);
        } else {
          this.currSt = "finish";
          this.reset();
        }
      }
    },
    destroy(ele) {
      if (!this._to || !ele) {
        return;
      }
      Object.keys(this._to).forEach(key => {
        ele.removeEventListener(key, this._to[key]);
      });
    },
    reset() {
      this.currentLastScreenY = 0;
      this.setContentStyle(0);
    },
    setContentStyle(currentLastScreenY) {
      // todos: Why sometimes do not have `this.contentRef` ?
      if (this.$refs.containerRef) {
        this.setTransform(
          this.$refs.containerRef.style,
          `translate3d(0px,${currentLastScreenY}px,0)`
        );
      }
    },
    setTransform(nodeStyle, value) {
      nodeStyle.transform = value;
      nodeStyle.webkitTransform = value;
      nodeStyle.MozTransform = value;
    }
  },
  beforeDestroy() {
    this.destroy(this.containerRef);
  },
  mounted() {
    this.$nextTick(function() {
      this.init(this.$refs.containerRef);
      this.triggerPullToRefresh();
    });
  },
  computed: {
    wrapCls() {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-transition`]: !this.dragOnEdge
        }
      ];
    },
    containerCls() {
      return [`${prefixCls}`, `${prefixCls}-${this.direction}`];
    }
  }
};
</script>
