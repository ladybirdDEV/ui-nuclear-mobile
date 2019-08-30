<template>
  <div :class="`${prefixCls}`" @click="onClick">
    <div :class="`${prefixCls}-icon`" :style="{color: selected ? tintColor : unselectedTintColor}">
      <template v-if="selected">
        <Badge v-if="badge" :text="badge" :class="`${prefixCls}-badge tab-badge`">
          <slot name="selectedIcon">
            <img :class="`${prefixCls}-image`" :src="selectedIcon" :alt="title" />
          </slot>
        </Badge>
        <Badge v-else-if="dot" :class="`${prefixCls}-badge tab-dot`">
          <slot name="selectedIcon">
            <img :class="`${prefixCls}-image`" :src="selectedIcon" :alt="title" />
          </slot>
        </Badge>
        <template v-else>
          <slot name="selectedIcon">
            <img :class="`${prefixCls}-image`" :src="selectedIcon" :alt="title" />
          </slot>
        </template>
      </template>
      <template v-if="!selected">
        <Badge v-if="badge" :text="badge" :class="`${prefixCls}-badge tab-badge`">
          <slot name="icon">
            <img :class="`${prefixCls}-image`" :src="icon" :alt="title" />
          </slot>
        </Badge>
        <Badge v-else-if="dot" :class="`${prefixCls}-badge tab-dot`">
          <slot name="icon">
            <img :class="`${prefixCls}-image`" :src="icon" :alt="title" />
          </slot>
        </Badge>
        <template v-else>
          <slot name="icon">
            <img :class="`${prefixCls}-image`" :src="icon" :alt="title" />
          </slot>
        </template>
      </template>
    </div>
    <p :class="`${prefixCls}-title`" :style="{color: selected ? tintColor : unselectedTintColor}">
      {{ title }}
    </p>
  </div>
</template>

<script>
import Badge from '../badge'
export default {
  components: {
    Badge
  },
  props: {
    dot: {
      type: Boolean
    },
    badge: {
      type: [String, Number]
    },
    selected: {
      type: Boolean
    },
    selectedIcon: {
      type: String
    },
    icon: {
      type: String
    },
    title: {
      type: String
    },
    prefixCls: {
      type: String
    },
    unselectedTintColor: {
      type: String
    },
    tintColor: {
      type: String
    }
  },
  mounted () {
    console.log(this.$slots)
  },
  methods: {
    onClick () {
      this.$emit('press')
    }
  }
}
</script>
