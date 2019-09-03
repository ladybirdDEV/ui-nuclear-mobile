<script>
import classnames from "classnames"
import { cloneElement } from "../_util/vnode.js"
import Icon from "../icon"
import TouchFeedback from "../vmc-feedback"
export default {
  props: {
    prefixCls: {
      type: String,
      default: "um-button"
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: "large"
    },
    inline: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    activeStyle: {
      type: Object,
      default: () => {}
    },
    activeClassName: {
      type: String
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  },
  render() {
    const {
      prefixCls,
      type,
      size,
      inline,
      disabled,
      loading,
      activeStyle,
      activeClassName
    } = this.$props
    const icon = this.$slots.icon || this.icon
    const iconType = loading ? "loading" : icon
    const wrapCls = classnames(prefixCls, {
      [`${prefixCls}-primary`]: type === "primary",
      [`${prefixCls}-ghost`]: type === "ghost",
      [`${prefixCls}-warning`]: type === "warning",
      [`${prefixCls}-small`]: size === "small",
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType
    })

    const kids = <span>{this.$slots.default}</span>
    let iconEl
    if (typeof iconType === "string") {
      iconEl = (
        <Icon
          aria-hidden="true"
          type={iconType}
          size={size === "small" ? "xxs" : "md"}
          class={`${prefixCls}-icon`}
        />
      )
    } else if (iconType) {
      const cls = classnames(
        "um-icon",
        `${prefixCls}-icon`,
        size === "small" ? "um-icon-xxs" : "um-icon-md"
      )
      iconEl = cloneElement(iconType, {
        class: cls
      })
    }
    const buttonProps = {
      class: wrapCls,
      attrs: {
        role: "button",
        "aria-disabled": disabled
      },
      on: {
        click: this.onClick
      }
    }
    return (
      <TouchFeedback activeClassName={`${prefixCls}-active`} disabled={disabled}>
        <a {...buttonProps}>
          {iconEl}
          {kids}
        </a>
      </TouchFeedback>
    )
  }
}
</script>
