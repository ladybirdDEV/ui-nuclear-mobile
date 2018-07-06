<template>
  <div>
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <CardHeader title="This is title" thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png">
          <span slot="extra">this is extra</span>
        </CardHeader>
        <CardBody>
          <div>This is content of `Card`</div>
        </CardBody>
        <CardFooter content="footer content">
          <div slot="extra">extra footer content</div>
        </CardFooter>
      </Card>
    </WingBlank>
    <WhiteSpace size="lg" />
    <Card full>
      <CardHeader title="This is title" thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png">
        <span slot="extra">this is extra</span>
      </CardHeader>
        <CardBody>
          <div>This is content of `Card`</div>
        </CardBody>
      <CardFooter content="footer content">
        <div slot="extra">extra footer content</div>
      </CardFooter>
    </Card>
  </div>
</template>
<script>
import { Card, CardHeader, CardBody, CardFooter } from '@/components/Card'
import WingBlank from '@/components/wing-blank'
import WhiteSpace from '@/components/WhiteSpace'
export default {
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    WingBlank,
    WhiteSpace
  }
}
</script>
