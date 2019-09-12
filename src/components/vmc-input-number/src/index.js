import classNames from 'classnames'
import InputHandler from './InputHandler'

function noop() {
}

function preventDefault(e) {
  e.preventDefault();
}

function defaultParser(input) {
  return input.replace(/[^\w\.-]+/g, '')
}


/**
 * When click and hold on a button - the speed of auto changin the value.
 */
const SPEED = 200

/**
 * When click and hold on a button - the delay before auto changin the value.
 */
const DELAY = 600

/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1

export default {
  name: 'VMCInputNumber',
  props: {
    prefixCls: {
      type: String,
      default: 'vmc-input-number'
    },
    focusOnUpDown: {
      type: Boolean,
      default: false
    },
    tabIndex: {
      type: Number
    },
    formatter: {
      type: Function
    },
    readOnly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    max: {
      type: Number,
      default: MAX_SAFE_INTEGER
    },
    min: {
      type: Number,
      default: -MAX_SAFE_INTEGER
    },
    step: {
      type: [String, Number],
      default: 1
    },
    parser: {
      type: Function,
      default: defaultParser
    },
    precision: {
      type: Number
    },
    value: {
      type: Number
    },
    autoFocus: {
      type: Boolean
    },
    useTouch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.$props.value,
      focused: false,
      autoStepTimer: '',
      inputValue: this.$props.value
    }
  },
  watch: {
    value(v) {
      if (v !== undefined) {
        const value = this.$data.focused ? v : this.getValidValue(v)
        this.$data.currentValue = value
        this.$data.inputValue = value
      }
    }
  },
  methods: {
    onChange(e) {
      const { parser } = this.$props
      const input = parser && parser(this.getValueFromEvent(e).trim())
      this.$emit('change', this.getCurrentValidValue(input))
    },
    onInput(e) {
      this.$emit('change', this.getCurrentValidValue(e.target.value))
    },
    onFocus(e) {
      this.$data.focused = true
    },
    onBlur(e) {
      this.$data.focused = false
    },
    getCurrentValidValue(value) {
      let val = value
      if (val === '') {
        val = ''
      } else if (!this.isNotCompleteNumber(val)) {
        val = this.getValidValue(val)
      } else {
        val = this.$data.currentValue
      }
      return this.toNumber(val)
    },

    getValidValue(value) {
      let val = parseFloat(value)
      // https://github.com/ant-design/ant-design/issues/7358
      if (isNaN(val)) {
        return value
      }
      if (val < this.$props.min) {
        val = this.$props.min
      }
      if (val > this.$props.max) {
        val = this.$props.max
      }
      return val
    },

    setValue(v, callback) {
      // trigger onChange
      const newValue = this.isNotCompleteNumber(parseFloat(v)) ? undefined : parseFloat(v)
      const changed = newValue !== this.$data.currentValue || `${newValue}` !== `${this.$data.inputValue}`
      if (this.$props.value === undefined) {
        this.currentValue = newValue
        this.$data.inputValue = this.toPrecisionAsStep(v)
        if (callback) {
          callback()
        }
      } else {
        // always set input value same as value
        this.$data.inputValue = this.toPrecisionAsStep(this.$data.currentValue)
        if (callback) {
          callback()
        }
      }
      if (changed) {
        this.$emit('change', newValue)
      }
    },
    getPrecision(value) {
      if (this.$props.precision !== undefined) {
        return this.$props.precision
      }
      const valueString = value.toString()
      if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10)
      }
      let precision = 0
      if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1
      }
      return precision
    },

    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision(currentValue, ratio = 1) {
      if (this.$props.precision !== undefined) {
        return this.$props.precision
      }
      const { step } = this.$props
      const ratioPrecision = this.getPrecision(ratio)
      const stepPrecision = this.getPrecision(step)
      const currentValuePrecision = this.getPrecision(currentValue)
      if (!currentValue) {
        return ratioPrecision + stepPrecision
      }
      return Math.max(currentValuePrecision, ratioPrecision + stepPrecision)
    },

    getPrecisionFactor(currentValue, ratio = 1) {
      const precision = this.getMaxPrecision(currentValue, ratio)
      return Math.pow(10, precision)
    },

    toPrecisionAsStep(num) {
      if (this.isNotCompleteNumber(num) || num === '') {
        return num
      }
      const precision = Math.abs(this.getMaxPrecision(num))
      if (!isNaN(precision)) {
        return Number(num).toFixed(precision)
      }
      return num.toString()
    },

    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber(num) {
      return (
        isNaN(num) ||
        num === '' ||
        num === null ||
        (num && num.toString().indexOf('.') === num.toString().length - 1)
      )
    },

    toNumber(num) {
      if (this.isNotCompleteNumber(num)) {
        return num
      }
      if (this.$props.precision !== undefined) {
        return Number(Number(num).toFixed(this.$props.precision))
      }
      return Number(num)
    },

    stepCompute(type, val, rat) {
      const { step, min } = this.$props
      const precisionFactor = this.getPrecisionFactor(val, rat)
      const precision = Math.abs(this.getMaxPrecision(val, rat))
      let result
      const direct = type === 'up' ? 1 : -1
      if (typeof val === 'number') {
        result = ((precisionFactor * val + direct * precisionFactor * +step * rat) / precisionFactor).toFixed(precision)
      } else {
        result = min === -Infinity ? direct * +step : min
      }
      return this.toNumber(result)
    },

    canStep(type, e, ratio = 1) {
      if (e) {
        e.preventDefault()
      }
      const props = this.$props
      if (props.disabled) {
        return false
      }
      const value = this.getCurrentValidValue(this.$data.inputValue) || 0
      if (this.isNotCompleteNumber(value)) {
        return false
      }
      let val = this.stepCompute(type, value, ratio)
      const outOfRange = val > props.max || val < props.min
      if (val > props.max) {
        val = props.max
      }
      this.setValue(val)
      this.$data.focused = true
      return !outOfRange
    },
    stop() {
      if (this.$data.autoStepTimer) {
        clearTimeout(this.$data.autoStepTimer)
      }
    },
    action(type, e, ratio, recursive) {
      this.stop()
      if (this.canStep(type, e, ratio)) {
        this.$data.autoStepTimer = setTimeout(() => {
          this.action(type, e, ratio, true)
        }, recursive ? SPEED : DELAY)
      }
    },
    down(e, ratio, recursive) {
      this.action('down', e, ratio, recursive)
    },
    up(e, ratio, recursive) {
      this.action('up', e, ratio, recursive)
    },
    getValueFromEvent(e) {
      return e.target.value
    },
    formatWrapper(num) {
      if (this.$props.formatter) {
        return this.$props.formatter(num)
      }
      return num
    }
  },
  render() {
    const { prefixCls, disabled, readOnly, max, min } = this.$props
    const classes = classNames({
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-focused`]: this.$data.focused
    })
    let upDisabledClass = ''
    let downDisabledClass = ''

    const { currentValue } = this.$data

    if (currentValue || currentValue === 0) {
      if (!isNaN(currentValue)) {
        const val = Number(currentValue)
        if (val >= max) {
          upDisabledClass = `${prefixCls}-handler-up-disabled`
        }
        if (val <= min) {
          downDisabledClass = `${prefixCls}-handler-down-disabled`
        }
      } else {
        upDisabledClass = `${prefixCls}-handler-up-disabled`
        downDisabledClass = `${prefixCls}-handler-down-disabled`
      }
    }
    const editable = !this.$props.readOnly && !this.$props.disabled
    const isUpDisabled = !!upDisabledClass || disabled || readOnly
    const isDownDisabled = !!downDisabledClass || disabled || readOnly
    // focus state, show input value
    // unfocus state, show valid value

    let inputDisplayValue

    if (this.$data.focused) {
      inputDisplayValue = this.$data.inputValue
    } else {
      inputDisplayValue = this.toPrecisionAsStep(this.$data.currentValue)
    }

    if (inputDisplayValue === undefined || inputDisplayValue === null) {
      inputDisplayValue = ''
    }

    let upEvents
    let downEvents
    upEvents = {
      touchstart: (editable && !upDisabledClass) ? this.up : noop,
      touchend: this.stop
    }
    downEvents = {
      touchstart: (editable && !downDisabledClass) ? this.down : noop,
      touchend: this.stop
    }
    const inputDisplayValueFormat = this.formatWrapper(inputDisplayValue)

    return (
      <div class={classes}>
        <div class={`${prefixCls}-handler-wrap`}>
          <InputHandler
            disabled={isUpDisabled}
            prefixCls={prefixCls}
            unselectable="unselectable"
            {...{ on: upEvents }}
            role="button"
            aria-label="Increase Value"
            aria-disabled={!!isUpDisabled}
            class={`${prefixCls}-handler ${prefixCls}-handler-up ${upDisabledClass}`}
          >
            {this.$slots.upHandler || (<span unselectable="unselectable" class={`${prefixCls}-handler-up-inner`} />)}
          </InputHandler>
          <InputHandler
            disabled={isDownDisabled}
            prefixCls={prefixCls}
            unselectable="unselectable"
            {...{ on: downEvents }}
            role="button"
            aria-label="Decrease Value"
            aria-disabled={!!isDownDisabled}
            class={`${prefixCls}-handler ${prefixCls}-handler-down ${downDisabledClass}`}
          >
            {this.$slots.downHandler || (<span unselectable="unselectable" class={`${prefixCls}-handler-down-inner`} />)}
          </InputHandler>
        </div>
        <div
          class={`${prefixCls}-input-wrap`}
          role="spinbutton"
          aria-valuemin={this.$props.min}
          aria-valuemin={this.$props.max}
          aria-valuenow={this.$data.currentValue}
        >
          <input
            class={`${prefixCls}-input`}
            tabIndex={this.$props.tabIndex}
            autoComplete="off"
            on-input={this.onInput}
            on-focus={this.onFocus}
            on-blur={this.onBlur}
            autoFocus={this.$props.autoFocus}
            readOnly={this.$props.readOnly}
            disabled={this.$props.disabled}
            max={this.$props.max}
            min={this.$props.min}
            step={this.$props.step}
            on-change={this.onChange}
            ref="setInput"
            value={inputDisplayValueFormat}
          />
        </div>
      </div>
    )
  }
}
