import Checkbox from '../src/index'
import '../assets/index.less'
export default {
  render () {
    return (
      <div style={{margin: '20px'}}>
        <div>
          <p>
            <label>
              <Checkbox checked />
            </label>
          </p>
        </div>
      </div>
    )
  }
}
