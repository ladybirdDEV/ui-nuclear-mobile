<template>
  <div style="bottom: 0px; position: fixed;width: 100%;">
    <transition name="fade" >
      <div v-if="visible" style="z-index: 100;position: relative;">
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

        <div :class="`${prefixClsShare}`"  v-if="isShare">
          <div :class="`${prefixClsShare}-message`">{{message}}</div>
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
    </transition>
    <div :class="`${prefixCls}-mask`" v-if='visible' @click="maskClick"></div>
  </div>
</template>

<script>
  import Feedback from '@/components/Feedback/Feedback.vue'

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
//        activeClassName: 'um-action-sheet-button-list-active',
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
      maskClick () {
        if (this.maskClosable) {
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

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: transform 0.6s;
  }
  .fade-enter, .fade-leave-to {
    transform: translateY(100%);
  }
</style>

<style>
  .um-action-sheet-button-list-active .um-active {
    background-color: #ddd;

  }
  .um-action-sheet-share-list {
    display: flex;
    margin-top: 21px;
    margin-bottom: 21px;
    justify-content: flex-start
  }
  .um-action-sheet-share {
    background-color: #f2f2f2;
    z-index: 3;
    padding: 21px 0 0px 0px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .um-action-sheet-share-list-item {
    flex: none;
    margin: 0 0 0 12px;
  }
  .um-action-sheet-share-list-item-icon {
    margin-bottom: 9px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .um-action-sheet-share-list-item-title {
    color: #888;
    font-size: 10px;
    text-align: center;
  }
  .um-action-sheet-share-message {
    padding: 0px 15px 15px 15px;
    text-align: center;
    font-size: 14px;
    color: #888;
    border-bottom: 1px solid #ddd;
  }
  .um-action-sheet {
    z-index: 20;
    padding-top: 2px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
  }
  .um-action-sheet-button-list {
    text-align: center;
    color: #000;
  }
  .um-action-sheet-title {
    text-align: center;
    font-size: 17px;
  }
  .um-action-sheet-message {
    margin: 15px auto;
    padding: 0 15px;
    text-align: center;
    font-size: 14px;
    color: #888;
  }
  .um-action-sheet-share-cancel-button {
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 100%;
    background-color: #fff;
    color: #000;
    font-size: 18px;
    position: relative;
    box-sizing: border-box;
  }
  .um-action-sheet-share-cancel-button-active .um-action-sheet-share-cancel-button {
    background-color: #ddd;
  }
  .um-action-sheet-button-list-active {
    background-color: #ddd;
  }
  .um-action-sheet-button-list-item {
    font-size: 18px;
    padding: 0;
    margin: 0;
    position: relative;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
  }
  .um-action-sheet-button-list-item::before {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 1PX;
  }
  .um-action-sheet-button-list-item-cancel-button {
    margin-top: 6px;
    position: relative;
  }
  .um-action-sheet-button-list-item-destructive-button {
    color:  #f4333c;
  }
  .um-action-sheet-button-list-item-cancel-button-mask {
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: #e7e7ed;
  }
  .um-action-sheet-mask {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000000;
    opacity: 0.4;
  }
</style>
