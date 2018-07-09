<script>
import Tabs from '../tabs'
const prefixCls = 'um-tab-bar'
export default {
  name: 'TabBar',
  components: {
    Tabs
  },
  render (h) {
    return (
      <div class={prefixCls}>
        <Tabs tabBarPosition="bottom" animated={false} renderTabBar={this.renderTabBar} swipeable={false}>
          {this.contents}
        </Tabs>
      </div>
    )
  },
  data () {
    return {
      prefixCls: prefixCls,
      contents: {}
    }
  },
  mounted () {
    this.$nextTick(() => { this.contents = this.getContents() })
    this.updateDescendant()
  },
  methods: {
    updateDescendant () {
      const child = this.$children[0]
      const grandSons = this.$children[0].$children
      grandSons.forEach((item, index) => {
        item.isTintColor = this.tintColor
        item.isUnselectedTintColor = this.unselectedTintColor
        item.$on('onPress', () => {
          child.page = index
          grandSons.forEach((item, index) => {
            item.isSelected = false
          })
          grandSons[index].isSelected = true
        })
        if (index === child.page) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
    },
    renderTabBar () {
      let barCls = this.hidden ? `${prefixCls}-bar ${prefixCls}-bar-hidden` : `${prefixCls}-bar`
      return (
        <div class={barCls} style={`background-color:${this.barTintColor}`}>
          {this.$slots.default}
        </div>
      )
    },
    getContents () {
      const children = this.$children[0].$children
      const child = children.map((node, index) => {
        return <div class={`${prefixCls}-item`}>{node.$slots.default}</div>
      })
      return child
    }
  },
  props: {
    barTintColor: {
      type: String,
      default: 'white'
    },
    tintColor: {
      type: String,
      default: '#108ee9'
    },
    unselectedTintColor: {
      type: String,
      default: '#888'
    },
    hidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>
