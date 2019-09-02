<template>
  <div style="bottom: 0px; position: fixed;width: 100%;">
    <transition name="um-fade">
      <div :class="`${prefixCls}-mask`" v-if='visible'></div>
    </transition>
    <transition name="um-slide-up" >
      <div v-if="visible" :class="`${prefixCls}-wrap`" @click="maskClick">
        <div :class="`${prefixCls}`" v-if="!isShare">
          <h3 :class="`${prefixCls}-title`" v-if="title !== undefined">{{ title }}</h3>
          <div :class="`${prefixCls}-message`" v-if="message !== undefined">{{ message }}</div>
          <div :class="`${prefixCls}-button-list`">
            <div :class="wrapCls(index)"
              class="um-active"
              :key=index
              v-for="(item, index) in btnGroup"
              @click="btnClick(item)">
              <Feedback :activeClassName="`${prefixCls}-button-list-active`">
                <span v-if="cancelButtonIndex === index"
                    :class="`${prefixCls}-button-list-item-cancel-button-mask`">
                </span>
                  {{ btnGroup[index].text }}
              </Feedback>
            </div>

          </div>
        </div>

        <div :class="`${prefixCls} ${prefixClsShare}`"  v-if="isShare">
          <div :class="`${prefixCls}-body`">
            <div>
              <div :class="`${prefixCls}-message`">{{message}}</div>
              <div :class="`${prefixClsShare}-list`" :key=rowIndex v-if="multipleLine" v-for="(row, rowIndex) in iconGroup">
                <div :class="`${prefixClsShare}-list-item`" :key=colIndex v-for="(col, colIndex) in row"
                    @click="iconClick(rowIndex, colIndex)">
                  <div :class="`${prefixClsShare}-list-item-icon`">
                    <img :src="col.icon" style="width: 36px; height: 36px"/>
                  </div>
                  <div :class="`${prefixClsShare}-list-item-title`">{{ col.title }}</div>
                </div>
              </div>

              <div :class="`${prefixClsShare}-list`" v-if="!multipleLine">
                <div :class="`${prefixClsShare}-list-item`" :key=index v-for="(item, index) in iconGroup">
                  <div :class="`${prefixClsShare}-list-item-icon`" @click="iconClick(item)">
                    <img :src="item.icon" style="width: 36px; height: 36px"/>
                  </div>
                  <div :class="`${prefixClsShare}-list-item-title`">{{ item.title }}</div>
                </div>
              </div>
              <Feedback :onMouseUp="cancelClick" :activeClassName="`${prefixClsShare}-cancel-button-active`">
                <div :class="`${prefixClsShare}-cancel-button`">{{ cancelButtonText }}</div>
              </Feedback>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Feedback from '../feedback/feedback.vue'

  const prefixCls = 'um-action-sheet'
  const prefixClsShare = 'um-action-sheet-share'
  export default {
    name: 'ActionSheetVue',
    //    mixins: [Feedback],
    components: {
      Feedback
    },
    data () {
      return {
        // activeClassName: 'um-action-sheet-button-list-active',
        visible: '',
        title: '',
        message: '',
        callback: '',
        prefixCls: prefixCls,
        prefixClsShare: prefixClsShare,
        isShare: false,
        btnGroup: '',
        iconGroup: '',
        multipleLine: '',
        maskClosable: true,
        cancelButtonText: '取消',
        cancelButtonIndex: '',
        destructiveButtonIndex: ''
      }
    },
    methods: {
      cancelClick () {
        this.visible = false
      },
      maskClick (ev) {
        if (this.maskClosable && ev.target.className === 'um-action-sheet-wrap') {
          this.visible = false
        }
      },
      iconClick (rowIndex, colIndex) {
        if (this.callback && typeof this.callback === 'function') {
          const promise = this.callback(rowIndex, colIndex)
          promise.then(() => {
            this.visible = false
          })
        } else {
          this.visible = false
        }
      },
      btnClick (item) {
        if (this.callback && typeof this.callback === 'function') {
          const promise = this.callback(item)
          promise.then(() => {
            this.visible = false
          })
        } else {
          this.visible = false
        }
      },
      wrapCls (index) {
        return [
          'um-action-sheet-button-list-item',
          {
            [`um-action-sheet-button-list-item-destructive-button`]: this.destructiveButtonIndex === index,
            [`um-action-sheet-button-list-item-cancel-button`]: this.cancelButtonIndex === index
          }
        ]
      }
    }
  }
</script>
