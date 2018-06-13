# Steps 步骤条

显示一个任务的进度；或者引导用户完成某个复杂任务。

### 规则
- 应用在离散和时间较长的进度显示，eg：转账进度；如果任务是连续和短暂的，应该使用 Progress 来显示，eg：打开页面。
- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务，eg：用户注册新账号。


```html
<Steps>
  <Step title="第一步" />
  <Step title="第二步" />
  <Step title="第三步" />
</Steps>
```
## Steps

#### Code Example
```vue
<template>
  <WingBlank size="lg">
    <div class="sub-title">Small size</div>
    <WhiteSpace />
    <Steps :current="1" size="small">
      <Step title="Finished" description="This is description"></Step>
      <Step title="In Progress" description="This is description"></Step>
      <Step title="Waiting" description="This is description"></Step>
    </Steps>
    <div class="sub-title">Small size, single line text</div>
    <WhiteSpace />
    <Steps size="small" :current="1">
      <Step title="Finished"></Step>
      <Step title="In Progress"></Step>
      <Step title="Waiting"></Step>
    </Steps>
    <div class="sub-title">Default size</div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="process" title="Finished" description="This is description" />
      <Step status="error" title="Error" description="This is description" />
      <Step title="Waiting" description="This is description" />
    </Steps>
    <div class="sub-title">Customized status </div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="finish" title="Step 1" icon="check" />
      <Step status="process" title="Step 2" icon="check" />
      <Step status="error" title="Step 3" icon="check" />
    </Steps>
    <div class="sub-title">Customized icon </div>
    <WhiteSpace size="lg" />
    <Steps :current="1">
      <Step title="Step 1" icon="check" description="This is description" />
      <Step title="Step 2" icon="check" description="This is description" />
      <Step title="Step 3" icon="check" description="This is description" />
    </Steps>
    <div class="sub-title">Multiple steps </div>
    <WhiteSpace size="lg" />
    <Steps :current="1">
      <Step title="Step 1" icon="check" />
      <Step title="Step 2" icon="check" />
      <Step title="Step 3" status="error" icon="check" />
      <Step title="Step 4" icon="check" />
    </Steps>
    <div class="sub-title">Horizontal small size</div>
    <WhiteSpace />
    <Steps :current="1" direction="horizontal" size="small">
      <Step title="Finished" description="This is description"></Step>
      <Step title="In Progress" description="This is description"></Step>
      <Step title="Waiting" description="This is description"></Step>
    </Steps>
    <div class="sub-title">Horizontal default size</div>
    <WhiteSpace />
    <Steps :current="1" direction="horizontal">
      <Step title="Finished" description="This is description"></Step>
      <Step title="In Progress" description="This is description"></Step>
      <Step title="Waiting" description="This is description"></Step>
    </Steps>
    <div class="sub-title">Horizontal customized icon</div>
    <WhiteSpace />
    <Steps :current="1" direction="horizontal">
      <Step title="Step 1" icon="check" />
      <Step status="error" title="Step 2" icon="check" />
      <Step title="Step 3" icon="check" />
    </Steps>
  </WingBlank>
</template>
<script>
import WingBlank from '@/components/WingBlank'
import WhiteSpace from '@/components/WhiteSpace'
import {Steps, Step} from '@/components/Steps'
export default {
  components: {
    WingBlank,
    WhiteSpace,
    Steps,
    Step
  }
}
</script>
<style>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}
</style>


```
### props

整体步骤条。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | Number | 0 |
| size | 尺寸，支持设置小尺寸`small` | String | - |
| status | 指定当前步骤的状态，可选 `wait`, `process`, `finish`, `error` | String | `process` |
| direction ( `Web only` ) | step 样式,可选 `vertical` `horizontal` | String | `vertical` |

## Steps.Step

步骤条内的每一个步骤。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选 `wait`, `process`, `finish`, `error` | String | 0 |
| title | 标题 | String | - |
| description | 步骤的详情描述，可选 | String | - |
| icon | 步骤图标，可选 | String | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/steps" />