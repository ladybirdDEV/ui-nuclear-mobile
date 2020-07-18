import TouchFeedback from '../src/index'
import './simple.less'

export default {
  render() {
    return (
      <div style={{ marginBottom: '12px' }}>
        <TouchFeedback activeClassName="active" activeStyle={{ color: 'red' }}>
          <div class="normal" style={{ backgroundColor: 'yellow' }} on-click={() => { console.log('click div') }}>click to active</div>
        </TouchFeedback>
      </div>
    )
  }
}
