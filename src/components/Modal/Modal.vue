<template>
  <div>
    <template v-if="!popup">
      <transition name="um-zoom">
        <div class="um-modal-wrapper" v-if='visible'>
          <div class="um-modal">
            <div class="um-modal-header" v-if="title !== ''">
              <div class="um-modal-title">{{ title }}</div>
            </div>

            <div class="um-modal-content" v-if="message !== ''">
              <div class="um-modal-message" v-html="message"></div>
              <div class="um-modal-input" v-if="showInput">
                <input v-model="inputValue" :type="type" :placeholder="inputPlaceholder[0]" ref="input">
                <div class="um-modal-errormsg" v-show="showError">{{ editorErrorMessage }}</div>
              </div>
            </div>

            <div :class="wrapBtnCls">
              <button
                :class="wrapClass"
                @click="handleAction(item)"
                :key="index"
                v-for="(item, index) in btnGroup">
                <Feedback activeClassName="um-modal-active">
                  <div class="um-modal-button-mask">
                    {{ btnGroup[index].text }}
                  </div>
                </Feedback>
              </button>
            </div>
          </div>
        </div>
      </transition>
      <transition name="um-fade">
        <div class="um-modal-mask" v-if='visible'></div>
      </transition>
    </template>
    <div v-else :class="popupClass">
      <List renderHeader="委托买入">
        <ListItem v-for="(item, index) in popItem" :key="index">
          {{ popItem[index].text }}
        </ListItem>
        <ListItem>
          <Button type="primary">买入</Button>
        </ListItem>
      </List>
    </div>
  </div>
</template>

<script>
  import { List, ListItem, ListItemBrief } from '../List'
  import Button from '../button'
  import Feedback from '../feedback/feedback.vue'

  export default {
    components: {
      List,
      ListItem,
      ListItemBrief,
      Button,
      Feedback
    },
    name: 'modalvue',
    data () {
      return {
        visible: '',
        title: '',
        message: '',
        type: '',
        popItem: '',
        showError: false,
        btnGroup: '',
        popup: false,
        popupClass: '',
        showInput: false,
        inputValue: '',
        defaultValue: '',
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        confirmButtonDisabled: false,
        editorErrorMessage: null,
        isoperation: false
      }
    },
    created () {
      this.inputValue = this.defaultValue
    },
    watch: {
      defaultValue: function (v) {
        this.inputValue = v
      },
      visible (val) {
        if (val) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style = ''
        }
      }
    },
    methods: {
      handleAction (btn) {
        if (btn.onPress && typeof btn.onPress === 'function') {
          const promise = btn.onPress(this.inputValue)
          if (promise) {
            promise.then(() => {
              this.visible = false
              this.showInput = false
            })
          } else {
            this.visible = false
            this.showInput = false
          }
        } else {
          this.visible = false
          this.showInput = false
        }
      }
    },
    computed: {
      wrapBtnCls () {
        return {
          'um-modal-btns': this.btnGroup.length === 2 && this.isoperation === false,
          'um-modal-morebtn': this.btnGroup.length !== 2 || this.isoperation === true
        }
      },
      wrapClass () {
        return {
          'um-modal-btncommon': this.btnGroup.length !== 2,
          'um-modal-operation': this.isoperation === true,
          'um-modal-btnnormal': this.btnGroup.length === 2 && this.isoperation === false
        }
      }
    }
  }
</script>

<style>
  .um-modal-active {
    background-color: #ddd;
  }
  .um-modal-wrapper {
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .um-modal-slide-up {
    z-index: 2;
    position: fixed;
    bottom: 0%;
    left: 50%;
    right: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 100%;
    font-size: 16px;
    -webkit-user-select: none;
    /*overflow: hidden;*/
    /*backface-visibility: hidden;*/
    /*transition: .2s*/
  }
  .um-modal {
    background-color: #fff;
    width: 75%;
    border-radius: 6px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: .2s
  }
  .um-modal-header {
    padding: 15px 0 0;
  }
  .um-modal-content {
    padding: 10px 20px 15px;
    border-bottom: 1px solid #ddd;
    min-height: 36px;
    position: relative;
  }
  .um-modal-button-mask {
    height: 48px;
    padding-top: 4px;
  }
  .um-modal-input {
    padding-top: 4px;
  }
  .um-modal-input input {
    height: 28px;
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 4px 5px;
    width: 100%;
    outline: none;
  }
  .um-modal-input input::placeholder {
    font-size: 14px;
    color: #ccc;
    padding-left: 8px;
  }
  .um-modal-input input.invalid {
    border-color: #108ee9;
  }
  .um-modal-input input:focus {
     border-color: #108ee9;
   }
  .um-modal-errormsg {
    color: red;
    font-size: 12px;
    min-height: 18px;
    margin-top: 2px;
  }
  .um-modal-title {
    text-align: center;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .um-modal-message {
    color: #999;
    margin: 0;
    text-align: center;
    line-height: 36px;
  }
  .um-modal-operation {
    border: 0px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    line-height: 40px;
    height: 48px;
    display: flex;
    padding-left: 24px;
    background-color: #fff;
    margin: 0;
    color: #000;
    width: 100%;
  }
  .um-modal-operation:last-child {
    border: 0px;
  }
  .um-modal-btncommon {
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #ddd;
    line-height: 40px;
    height: 48px;
    display: block;
    background-color: #fff;
    flex: 1;
    margin: 0;
    color: #108ee9;
    width: 100%;
    padding: 0px;
  }
  .um-modal-btncommon:last-child {
    border: 0;
    padding: 0px;
  }
  .um-modal-btns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    line-height: 40px;
  }
  .um-modal-morebtn {
    height: 100%;
    line-height: 40px;
  }
  .um-modal-btnnormal:first-child {
    font-size: 18px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-right: 1px solid #ddd;
    line-height: 40px;
    display: block;
    flex: 1;
    margin: 0;
    color: #000;
    padding: 0px;
  }
  .um-modal-btnnormal:last-child {
    font-size: 18px;
    position: relative;
    width: 50%;
    line-height: 40px;
    display: block;
    background-color: #fff;
    flex: 1;
    margin: 0;
    border: 0;
    color: #108ee9;
    padding: 0px;
  }
  .um-modal-btnnormal:last-child:active {
     color: #108ee9;
     padding: 0px;
   }
  .um-modal-btnnormal:last-child:focus {
    outline: none;
    padding: 0px;
  }
  .um-modal-footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    line-height: 40px;
  }
  .um-modal-mask {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
  }
</style>

