# TabBar 标签栏

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。
###  规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## TabBar


#### Code Example
```vue
<script>
import { TabBar, TabBarItem } from '@/components/TabBar'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
      hidden: false,
      fullScreen: false
    }
  },
  render (h) {
    return (
      <div style={ this.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: 'white' } : { height: 400 + 'px', backgroundColor: 'white' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.hidden}
        >
          <TabBarItem
            title="Life"
            key="Life"
            icon="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg"
            selectedIcon="https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg"
            badge={1}
            >
            {this.renderContent('Life')}
          </TabBarItem>
          <TabBarItem
            title="Koubei"
            key="Koubei"
            icon="https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg"
            selectedIcon="https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg"
            badge="new"
            >
            {this.renderContent('Koubei')}
          </TabBarItem>
          <TabBarItem
            title="Friend"
            key="Friend"
            icon="https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg"
            selectedIcon="https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"
            dot
            >
            {this.renderContent('Friend')}
          </TabBarItem>
          <TabBarItem
            title="My"
            key="My"
            icon="https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            selectedIcon="https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            >
            {this.renderContent('My')}
          </TabBarItem>
      </TabBar>
    </div>
    )
  },
  methods: {
    renderContent (pageText) {
      return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          <div style={{ paddingTop: 60 + 'px' }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
          <a style={{ display: 'block', marginTop: 40 + 'px', marginBottom: 20 + 'px', color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.hidden = !this.hidden
          }}
          >
            Click to show/hide tab-bar
          </a>
          <a style={{ display: 'block', marginBottom: 600 + 'px', color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.fullScreen = !this.fullScreen
          }}
          >
            Click to switch fullscreen
          </a>
        </div>
      )
    }
  }
}
</script>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| barTintColor | tabbar 背景色 | String | `'white'` |
| tintColor | 选中的字体颜色	 | String | `'#108ee9'` |
| unselectedTintColor | 未选中的字体颜色 | String | `'#888'` |
| hidden ( `web only` )| 是否隐藏 | Boolean | `false` |
| prefixCls ( `不支持` )| 样式前缀	| String | `'um-tab-bar'` |
| noRenderContent ( `未实现` )| 不渲染内容部分 | Boolean | `false` |

## TabBarItem

### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| badge | 徽标数 | String \/ Number | - |
| dot( `Web Only` ) | 是否在右上角显示小红点（在设置badge的情况下失效） | Boolean | false |
| dot( `Web Only` ) | 是否在右上角显示小红点（在设置badge的情况下失效） | Boolean | false |
| selected | 是否选中 | Boolean | Boolean |
| icon | 默认展示图片 | String | - |
| selectedIcon | 选中后的展示图片 | String | - |
| title | 标题文字 | String | - |
| key	| 唯一标识 | String | - |
| iconStyle ( `不支持` )	| icon 样式 | String | - |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onPress | bar 点击触发 | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/tab-bar" />