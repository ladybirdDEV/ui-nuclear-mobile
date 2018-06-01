<template>
  <div class="um-flexbox" :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'um-flexbox'
export default {
  name: 'Flex',
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}-dir-row`]: this.direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: this.direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: this.direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: this.direction === 'column-reverse',
        [`${prefixCls}-nowrap`]: this.wrap === 'nowrap',
        [`${prefixCls}-wrap`]: this.wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: this.wrap === 'wrap-reverse',
        [`${prefixCls}-justify-start`]: this.justify === 'start',
        [`${prefixCls}-justify-end`]: this.justify === 'end',
        [`${prefixCls}-justify-center`]: this.justify === 'center',
        [`${prefixCls}-justify-between`]: this.justify === 'between',
        [`${prefixCls}-justify-around`]: this.justify === 'around',
        [`${prefixCls}-align-start`]: this.align === 'start',
        [`${prefixCls}-align-center`]: this.align === 'center',
        [`${prefixCls}-align-end`]: this.align === 'end',
        [`${prefixCls}-align-baseline`]: this.align === 'baseline',
        [`${prefixCls}-align-stretch`]: this.align === 'stretch',
        [`${prefixCls}-align-content-start`]: this.alignContent === 'start',
        [`${prefixCls}-align-content-end`]: this.alignContent === 'end',
        [`${prefixCls}-align-content-center`]: this.alignContent === 'center',
        [`${prefixCls}-align-content-between`]: this.alignContent === 'between',
        [`${prefixCls}-align-content-around`]: this.alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: this.alignContent === 'stretch'
      }
    }
  },
  props: {
    direction: {
      type: String
    },
    wrap: {
      type: String
    },
    justify: {
      type: String
    },
    align: {
      type: String,
      default: 'center'
    },
    alignContent: {
      type: String
    }
  }
}
</script>
<style>
.um-flexbox {
  text-align: left;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.um-flexbox.um-flexbox-dir-row {
  flex-direction: row;
}

.um-flexbox.um-flexbox-dir-row-reverse {
  flex-direction: row-reverse;
}

.um-flexbox.um-flexbox-dir-column {
  flex-direction: column;
}

.um-flexbox.um-flexbox-dir-column-reverse {
  flex-direction: column-reverse;
}

.um-flexbox.um-flexbox-nowrap {
  flex-wrap: nowrap;
}

.um-flexbox.um-flexbox-wrap {
  flex-wrap: wrap;
}

.um-flexbox.um-flexbox-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.um-flexbox.um-flexbox-justify-start {
  justify-content: flex-start;
}

.um-flexbox.um-flexbox-justify-end {
  justify-content: flex-end;
}

.um-flexbox.um-flexbox-justify-center {
  justify-content: center;
}

.um-flexbox.um-flexbox-justify-between {
  justify-content: space-between;
}

.um-flexbox.um-flexbox-justify-around {
  justify-content: space-around;
}

.um-flexbox.um-flexbox-align-start {
  align-items: flex-start;
}

.um-flexbox.um-flexbox-align-end {
  align-items: flex-end;
}

.um-flexbox.um-flexbox-align-center {
  align-items: center;
}

.um-flexbox.um-flexbox-align-stretch {
  align-items: stretch;
}

.um-flexbox.um-flexbox-align-baseline {
  align-items: baseline;
}

.um-flexbox.um-flexbox-align-content-start {
  align-content: flex-start;
}

.um-flexbox.um-flexbox-align-content-end {
  align-items: flex-end;
}

.um-flexbox.um-flexbox-align-content-center {
  align-items: center;
}

.um-flexbox.um-flexbox-align-content-between {
  align-items: stretch;
}

.um-flexbox.um-flexbox-align-content-around {
  align-items: baseline;
}

.um-flexbox.um-flexbox-align-content-stretch {
  align-items: baseline;
}
</style>
