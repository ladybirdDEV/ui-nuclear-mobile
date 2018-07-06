<template>
  <div>
    <WingBlank><div class="sub-title">Normal</div></WingBlank>
    <SearchBar
      placeholder="Search"
      :maxLength="8">
    </SearchBar>
    <WingBlank />

    <WingBlank><div class="sub-title">AutoFocus when enter page</div></WingBlank>
    <SearchBar placeholder="自动获取光标" autofocus/>
    <WhiteSpace />

    <WingBlank><div class="sub-title">Focus by operation</div></WingBlank>
    <SearchBar placeholder="手动获取获取光标" ref="manualFocus"/>
    <WhiteSpace />
    <WingBlank>
      <div @click="handleClick">
        <Button>click to focus</Button>
      </div>
    </WingBlank>
    <WhiteSpace />
    <WingBlank><div class="sub-title">Show cancel button</div></WingBlank>
    <SearchBar
      placeholder="Search"
      :value="value"
      showCancelButton
      :onChange="onChange"
      :onSubmit="onSubmit"
      :onFocus="onFocus"
      :onClear="onClear"
      :onCancel="onCancel"
      :onBlur="onBlur"/>
  </div>
</template>

<script>
  import SearchBar from '@/components/search-bar'
  import WingBlank from '@/components/wing-blank'
  import WhiteSpace from '@/components/WhiteSpace'
  import Button from '@/components/Button'

  export default {
    components: {
      SearchBar,
      WingBlank,
      WhiteSpace,
      Button
    },
    data () {
      return {
        value: '美食'
      }
    },
    methods: {
      handleClick () {
        this.$refs.manualFocus.getFocus(event)
      },
      onChange () {
        console.log('onChange')
      },
      onSubmit (value) {
        console.log(value)
      },
      onFocus () {
        console.log('onFocus')
      },
      onBlur () {
        console.log('onBlur')
      },
      onClear (value) {
        console.log('onClear', value)
      },
      onCancel (value) {
        value = ''
        console.log('onCancel')
      }
    }
  }
</script>

<style>
  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 20px 0 18px 0;
  }

</style>
