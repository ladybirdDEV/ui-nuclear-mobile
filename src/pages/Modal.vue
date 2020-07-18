<template>
  <div>
    <WingBlank>
      <h3>Baisc</h3>
      <Button @click.native="basicModal">Baisc</Button>
      <!-- <WhiteSpace></WhiteSpace>
      <Button @click.native="popupModal">popupModal</Button>-->
      <h3>Alert</h3>
      <Button @click.native="confirmModal">confirm</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="buttonsModal">more than two buttons</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="promiseModal">promise</Button>
      <h3>Prompt</h3>
      <Button @click.native="promptModal">promise</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="defaultModal">defaultValue</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="secureModal">secure-text</Button>
      <h3>Operation</h3>
      <Button @click.native="operationModal">operation</Button>
    </WingBlank>
  </div>
</template>

<script>
import Modal from "@/components/modal"
import WingBlank from "@/components/wing-blank"
import Button from "@/components/button"
import WhiteSpace from "@/components/white-space"
import Toast from "@/components/toast"

export default {
  components: {
    WingBlank,
    Button,
    WhiteSpace
  },
  data() {
    return {}
  },
  methods: {
    basicModal() {
      Modal({
        title: "提示",
        message: "确定执行此操作?",
        btnGroup: [
          { text: "Cancel", onPress: () => console.log("cancel") },
          { text: "OK", onPress: () => console.log("Ok") }
        ]
      })
    },
    // popupModal () {
    //   Modal({
    //     title: '提示',
    //     message: '确定执行此操作?',
    //     popup: true,
    //     animationType: 'slide-up',
    //     popItem: [
    //      {text: '股票名称'},
    //      {text: '股票代码'},
    //      {text: '买入价格'}
    //     ]
    //   })
    // },
    confirmModal() {
      Modal.alert("Delete", "Are you sure", [
        { text: "Cancel", onPress: () => console.log("cancel") },
        { text: "OK", onPress: () => console.log("OK") }
      ])
    },
    buttonsModal() {
      Modal.alert("Much Buttons", "More than two buttons", [
        { text: "Button1", onPress: () => console.log("第1个按钮被点击了") },
        { text: "Button2", onPress: () => console.log("第2个按钮被点击了") },
        { text: "Button3", onPress: () => console.log("第3个按钮被点击了") }
      ])
    },
    promiseModal() {
      Modal.alert("Delete", "Are you sure", [
        { text: "Cancel" },
        {
          text: "Ok",
          onPress: () =>
            new Promise(resolve => {
              Toast({
                message: "操作成功",
                duration: 1000
              })
              setTimeout(() => {
                resolve()
              }, 1000)
            })
        }
      ])
    },
    promptModal() {
      Modal.prompt(
        "input name",
        "please input your name",
        [
          { text: "Cancel" },
          {
            text: "Submit",
            onPress: inputValue =>
              new Promise(resolve => {
                Toast({
                  message: "操作成功",
                  duration: 800
                })
                setTimeout(() => {
                  console.log(inputValue)
                  resolve()
                }, 1000)
              })
          }
        ],
        "",
        "",
        ["input your name"]
      )
    },
    defaultModal() {
      Modal.prompt(
        "input name",
        "please input your name",
        [
          { text: "Cancel" },
          { text: "Submit", onPress: inputValue => console.log(inputValue) }
        ],
        "",
        "skottie",
        [""]
      )
    },
    secureModal() {
      Modal.prompt(
        "PassWord",
        "password message",
        [{ text: "Cancel" }, { text: "Submit" }],
        "secure-text",
        "",
        ["input your password"]
      )
    },
    operationModal() {
      Modal.operation([
        { text: "标为未读", onPress: () => console.log("标为未读") },
        { text: "置顶聊天", onPress: () => console.log("置顶聊天") }
      ])
    }
  }
}
</script>


