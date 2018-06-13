# PullToRefresh 拉动刷新

通过触发，立刻重新加载内容。

### 规则
 * 可以和 ListView 结合使用，也可以单独使用。
 * 可考虑定期自动刷新, e.g. 登录 APP 后，自动刷新首页 List。



#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>拉动刷新</h3>
    </WingBlank>
    <Button :style="{ marginBottom: '15px' }"
            :onClick="btnClick">
      direction: {{down ? 'down' : 'up'}}
    </Button>
   <PullToRefresh :onRefresh='onRefresh'
                  :direction="down ? 'down' : 'up'"
                  :indicator="indicator"
                  :refreshing="refreshing">
     <Icon slot="loadingIcon" type="loading" :style="{ marginRight: '8px', marginTop: '3px' }"></Icon>

     <div :style="{ textAlign: 'center', padding: '10px' }"
          v-for="(value, index) in items"
          :key=index
          slot="scrollContent">
          pull up
          {{ index }}
     </div>
   </PullToRefresh>
  </div>
</template>

<script>
  import PullToRefresh from '@/components/PullToRefresh'
  import Icon from '@/components/Icon'
  import WhiteSpace from '@/components/WhiteSpace'
  import Button from '@/components/Button'
  import WingBlank from '@/components/WingBlank'

  export default {
    components: {
      PullToRefresh,
      WhiteSpace,
      WingBlank,
      Icon,
      Button
    },
    data () {
      return {
        items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        down: true,
        refreshing: false
      }
    },
    methods: {
      btnClick () {
        this.down = !this.down
      },
      onRefresh () {
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 0)
      }
    },
    computed: {
      indicator () {
        if (this.down) {
          return {
            activate: '松开立即刷新',
            deactivate: '下拉可以刷新',
            release: 'loading',
            finish: '完成刷新'
          }
        } else {
          return {
            activate: '松开立即刷新',
            deactivate: '上拉可以刷新',
            release: 'loading',
            finish: '完成刷新'
          }
        }
      }
    }
  }
</script>
```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  distanceToRefresh  | 刷新距离 | number | 25 |
|  direction  | 拉动方向，可以是 `up` 或 `down` | String | `down` |
|  indicator  | 指示器配置 | Object `{ activate: '', deactivate: '', release: '', finish: '' }` | - |
|  refreshing  | 是否显示刷新状态	 | bool | false |
|  onRefresh  | 必选, 刷新回调函数 | function | - |
<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/pull-to-refresh" />