import '../assets/index.less'
import InputNumber from '../src/'
export default {
  data() {
    return {
      disabled: false,
      readOnly: false,
      value: 5
    }
  },
  methods: {
    onChange(value) {
      console.log('onChange', value)
      this.$data.value = value
    },
    toggleDisabled() {
      this.$data.disabled = !this.$data.disabled
    },
    toggleReadOnly() {
      this.$data.readOnly = !this.$data.readOnly
    }
  },
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <InputNumber min={-8} max={10} value={this.$data.value} style={{width: '100px'}}  readOnly={this.$data.readOnly}  on-change={this.onChange} disabled={this.$data.disabled} />
        <p>
          <button on-click={this.toggleDisabled}>toggle Disabled</button>
          <button on-click={this.toggleReadOnly}>toggle readOnly</button>
        </p>
      </div>
    )
  }
}
