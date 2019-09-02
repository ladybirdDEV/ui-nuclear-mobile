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
  import List from '../list'
  import ListItem from '../list-item'
  import ListItemBrief from '../list-item-brief'
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

