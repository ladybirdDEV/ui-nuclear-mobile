import '../assets/index.less'
import Dialog from '../src/DialogWrap'

export default {
  data() {
    return {
      visible: false,
      visible2: false,
      center: false
    }
  },
  methods: {
    onClick() {
      this.visible = true
    },
    showDialog2() {
      this.visible2 = true
    },
    onClose() {
      this.visible = false
    },
    centered (e) {
      this.center = e.target.checked
    }
  },
  render() {
    let dialog
    let wrapClassName = ''
    if (this.center) {
      wrapClassName = 'center'
    }
    dialog = (
      <Dialog
        visible={this.visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        on-close={this.onClose}
      >
        <input ref="modalInput" />
        <p on-click={this.showDialog2}>click to show dialog2</p>
        <div style={{ height: '200px' }}></div>
      </Dialog>
    )
    const dialog2 = (
      <Dialog
        visible={this.visible2}
        animation="zoom"
        maskAnimation="fade"
        on-close={() => { this.visible2 = false }}
      >
        <input ref="modalInput" />
        <p>basic modal</p>
        <div style={{ height: '200px' }}></div>
      </Dialog>
    )
    return (
      <div style={{ width: '98%', margin: '0 auto' }}>
        <style>
          {
            `
            .center {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            `
          }
        </style>
        <p>
          <button on-click={this.onClick}>show dialog</button>
          &nbsp;
          <label>center
            <input type="checkbox" checked={this.center} on-change={this.centered} />
          </label>
        </p>
        {dialog}
        {dialog2}
      </div>
    )
  }
}
