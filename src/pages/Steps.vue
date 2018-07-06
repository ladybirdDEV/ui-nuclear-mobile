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
import WingBlank from '@/components/wing-blank'
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

