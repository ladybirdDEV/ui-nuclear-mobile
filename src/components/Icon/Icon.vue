<script>
import { oneOf } from '../../utils'
import loadSprite from './loadSprite'
export default {
  name: 'Icon',
  render (h) {
    const cls = `um-icon um-icon-${this.type} um-icon-${this.size}`
    return (
      <svg class={cls} color={this.color}>
        <use xlinkHref={`#${this.type}`} />
      </svg>
    )
  },
  mounted () {
    loadSprite()
  },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['check', 'check-circle', 'check-circle-o', 'cross', 'cross-circle', 'cross-circle-o', 'left', 'right', 'down', 'up', 'loading', 'search', 'ellipsis', 'ellipsis-circle', 'exclamation-circle', 'info-circle', 'question-circle', 'voice', 'plus', 'minus', 'dislike', 'fail', 'success'])
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['xxs', 'xs', 'sm', 'md', 'lg'])
      },
      default: 'md'
    },
    color: {
      type: String
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>
