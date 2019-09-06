import '../assets/index.less'
import './simple.less'
import Drawer from '../src/index'
export default {
  data() {
    return {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      enableDragHandle: true,
      position: 'left',
      dragToggleDistance: 30
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
    onOpenChange(open) {
      this.open = open
    },
    onDock() {
      const docked = !this.docked
      this.docked = docked
      if (!docked) {
        this.onOpenChange(false)
      }
    }
  },
  render() {
    const drawerProps = {
      props: {
        docked: this.docked,
        open: this.open,
        touch: this.touch,
        enableDragHandle: this.enableDragHandle,
        position: this.position,
        dragToggleDistance: this.dragToggleDistance,
        transitions: this.transitions
      },
      on: {
        'open-change': this.onOpenChange
      }
    }
    return (
      <div class="drawer-container">
        <Drawer {...drawerProps}>
          <div slot="sidebar">
            <h3>
              sidebar
              <button on-click={this.onDock}>{this.docked ? 'unpin' : 'pin'}</button>
              <p>this is content</p>
            </h3>
          </div>
          <div class="main">
            <p>Vue Component</p>
            <button on-click={this.toggleOpen}>switch-open</button>
            <p>
              {['left', 'right', 'top', 'bottom'].map((i, index) => (<span key={index} style={{ marginRight: '10px' }}>
                <input type="radio" value={i} id={`pos-${index}`} checked={this.position === i} on-change={(e) => { this.position = e.target.value }} />
                <label for={`pos-${index}`}>{i}</label>
              </span>))}
            </p>
            <p style={{ float: 'right' }}>right content</p>
            <p style={{ position: 'absolute', bottom: '10px' }}>bottom content</p>
          </div>
        </Drawer>
      </div>
    )
  }
}
