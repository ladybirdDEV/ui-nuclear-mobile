<script>
import Tabs from '../tabs'
import Tab from './tab'
export default {
  name: 'TabBar',
  components: {
    Tabs,
    Tab
  },
  props: {
    prefixCls: {
      type: String,
      default: 'um-tab-bar'
    },
    barTintColor: {
      type: String,
      default: 'white'
    },
    tintColor: {
      type: String,
      default: '#108ee9'
    },
    hidden: {
      type: Boolean,
      default: false
    },
    unselectedTintColor: {
      type: String,
      default: '#888'
    },
    placeholder: {
      type: String,
      default: '正在加载'
    },
    animated: {
      type: Boolean,
      default: false
    },
    swipeable: {
      type: Boolean,
      default: false
    },
    prerenderingSiblingsNumber: {
      type: Number,
      default: 1
    },
    tabBarPosition: {
      type: String,
      default: 'bottom'
    }
  },
  methods: {
    getTabs () {
      const tabs = []
      this.$slots.default.forEach(child => {
        const cProps = child.componentOptions.propsData
        const slotIcon =
          child.componentOptions.children.filter(obj => {
            return obj.data.slot === 'icon'
          }).length > 0
            ? child.componentOptions.children.filter(obj => {
              return obj.data.slot === 'icon'
            })
            : undefined
        const slotSelectedIcon =
          child.componentOptions.children.filter(obj => {
            return obj.data.slot === 'selectedIcon'
          }).length > 0
            ? child.componentOptions.children.filter(obj => {
              return obj.data.slot === 'selectedIcon'
            })
            : undefined
        tabs.push({
          ...cProps,
          ...{ slotIcon: slotIcon },
          ...{ slotSelectedIcon: slotSelectedIcon }
        })
      })
      return tabs
    }
  },
  render (h) {
    const { prefixCls, animated, tabBarPosition, swipeable } = this.$props
    const tabs = this.getTabs()
    let activeIndex = 0
    if (Array.isArray(tabs)) {
      tabs.forEach((tab, index) => {
        if (tab.selected) {
          activeIndex = index
        }
      })
    }
    const children = this.$slots.default
    const renderTabBar = () => {
      const {
        barTintColor,
        prefixCls,
        tintColor,
        unselectedTintColor,
        hidden,
        tabBarPosition
      } = this.$props

      const tabsData = this.getTabs()
      const content = Array.isArray(tabsData)
        ? tabsData.map((tab, index) => {
          const tabProps = {
            props: {
              prefixCls: `${prefixCls}-tab`,
              badge: tab.badge,
              dot: tab.dot,
              selected: tab.selected,
              icon: tab.icon,
              selectedIcon: tab.selectedIcon,
              title: tab.title,
              tintColor: tintColor,
              unselectedTintColor: unselectedTintColor
            },
            on: {
              press: () => {
                tab.press && tab.press()
              }
            },
            scopedSlots: {
              icon: () => tab.slotIcon,
              selectedIcon: () => tab.slotSelectedIcon
            }
          }
          return <Tab {...tabProps} />
        })
        : null
      let cls = `${prefixCls}-bar`
      if (hidden) {
        cls += ` ${prefixCls}-bar-hidden-${tabBarPosition}`
      }
      return (
        <div class={cls} style={{ backgroundColor: barTintColor }}>
          {content}
        </div>
      )
    }
    return (
      <div class={prefixCls}>
        <Tabs
          tabs={tabs}
          renderTabBar={renderTabBar}
          tabBarPosition={tabBarPosition}
          page={activeIndex < 0 ? undefined : activeIndex}
          animated={animated}
          swipeable={swipeable}
        >
          {children}
        </Tabs>
      </div>
    )
  }
}
</script>

