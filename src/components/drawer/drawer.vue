<script>
import VmcDrawer from "../vmc-drawer"
export default {
  props: {
    prefixCls: {
      type: String,
      default: "um-drawer"
    },
    sidebarStyle: {
      type: Object,
      default: () => {}
    },
    contentStyle: {
      type: Object,
      default: () => {}
    },
    overlayStyle: {
      type: Object,
      default: () => {}
    },
    dragHandleStyle: {
      type: Object,
      default: () => {}
    },
    // boolean if sidebar should be docked
    docked: {
      type: Boolean,
      default: false
    },

    // boolean if sidebar should slide open
    open: {
      type: Boolean,
      default: false
    },

    // boolean if transitions should be disabled
    transitions: {
      type: Boolean,
      default: true
    },

    // boolean if touch gestures are enabled
    touch: {
      type: Boolean,
      default: true
    },
    enableDragHandle: {
      type: Boolean,
      default: false
    },

    // where to place the sidebar, contains left, right, top, bottom
    position: {
      type: String,
      default: "left"
    },

    // distance we have to drag the sidebar to toggle open state
    dragToggleDistance: {
      type: Number,
      default: 30
    }
  },
  render() {
    const drawerProps = {
      props: this.$props,
      scopedSlots: {
        sidebar: () => this.$slots.sidebar
      }
    }
    return <VmcDrawer {...drawerProps} />
  }
}
</script>
