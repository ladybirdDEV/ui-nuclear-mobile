import Checkbox from '../src/index'
import '../assets/index.less'
function onChange(checked) {
  console.log('Checkbox checked:',checked)
}
export default {
  data () {
    return {
      disabled: false
    }
  },
  render () {
    return (
      <div style={{margin: '20px'}}>
        <div>
          <p>
            <label>
              <Checkbox checked on-change={onChange} disabled={this.disabled}/>
              &nbsp; controlled checked vc-checkbox
            </label>
            &nbsp;&nbsp;
          </p>
        </div>
      </div>
    )
  }
}
