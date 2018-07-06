<template>
  <div :class="`${prefixCls}-tab`" @click="onClick">
    <div :class="`${prefixCls}-tab-icon`">
      <Badge v-if="badge" :class="`${prefixCls}-tab-badge tab-badge`" :text="badge">
        <div :style="`width: 22px; height: 22px;background:url(${iconRes}) center center /  21px 21px no-repeat;`">
        </div>
      </Badge>
      <Badge v-else-if="dot" :class="`${prefixCls}-tab-badge tab-badge`" dot>
        <div :style="`width: 22px; height: 22px;background:url(${iconRes}) center center /  21px 21px no-repeat;`">
        </div>
      </Badge>
      <img v-else :class="`${prefixCls}-tab-image`" :src="iconRes" alt="title" />
    </div>
    <p :class="`${prefixCls}-tab-title`" :style="{ color: isSelected ? isTintColor : isUnselectedTintColor }">{{ title }}</p>
  </div>
</template>
<script>
import Badge from '../badge'
const prefixCls = 'um-tab-bar'
export default {
  name: 'TabBarItem',
  components: {
    Badge
  },
  computed: {
    iconRes () {
      return this.isSelected ? this.selectedIcon : this.icon
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      isSelected: '',
      isTintColor: this.tintColor,
      isUnselectedTintColor: this.unselectedTintColor
    }
  },
  methods: {
    onClick () {
      this.$emit('onPress')
    }
  },
  props: {
    selected: {
      type: Boolean
    },
    badge: {
      type: [Number, String]
    },
    dot: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    selectedIcon: {
      type: String
    },
    title: {
      type: String
    },
    tintColor: {
      type: String
    },
    unselectedTintColor: {
      type: String
    }
  }
}
</script>

