<template>
  <div>
    <WingBlank>
      <div class="sub-title">Basic</div>
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <div class="sub-title">Wrap</div>
      <Flex wrap="wrap">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace size="lg" />
      <div class="sub-title">Align</div>
      <Flex justify="center">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
    </WingBlank>
  </div>
</template>
<script>
import { Flex, FlexItem } from '@/components/Flex'
import PlaceHolder from '@/components/PlaceHolder'
import WhiteSpace from '@/components/white-space'
import WingBlank from '@/components/wing-blank'
export default {
  components: {
    Flex,
    FlexItem,
    PlaceHolder,
    WhiteSpace,
    WingBlank
  }
}
</script>
<style scoped>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}

.inline {
  width: 80px!important;
  margin: 9px 9px 9px 0;
}

.small {
  height: 20px!important;
  line-height: 20px!important;
}

</style>
