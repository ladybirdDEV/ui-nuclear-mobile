<template>
  <div class="um-checkbox">
    <input  type="checkbox" 
            id="awesome"
            :name="name"
            class="um-checkbox-input"
            :disabled="disabled"
            :checked="isChecked"
            :onChange="change(value)"/>
      <Icon v-if="isChecked" class="um-checkbox-checked" type="check-circle" :color="color"></Icon>
      <label for="awesome" v-else></label>
  </div>
</template>

<script>
  import Icon from '../Icon'

  export default {
    components: {
      Icon
    },
    name: 'Checkbox',
    props: {
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      checked: {
        type: Boolean,
        default: undefined
      },
      defaultChecked: {
        type: Boolean
      }
    },
    data () {
      return {
        isChecked: this.checked !== undefined ? this.checked : this.defaultChecked
      }
    },
    methods: {
      change (value) {
        this.$emit('onChange', value)
      }
    },
    computed: {
      color () {
        if (this.disabled) {
          return '#ccc'
        } else return '#108ee9'
      }
    }
  }
</script>

<style>
  .um-checkbox-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 0 none;
    appearance: none;
  }
  .um-checkbox-input + label::before {
    content: '\a0'; /* non-break space */
    display: inline-block;
    vertical-align: .2em;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #fff;
    text-indent: .15em;
    line-height: .65;
    border: 1px solid #ccc;
  }
  .um-checkbox-input[disabled] + label::before {
    box-shadow: none;
    color: #fff;
  }
  /*.um-checkbox-input[disabled] + .um-checkbox-checked ::before {*/
    /*color: #ccc;*/
  /*}*/
  .um-checkbox{
    font-size: 15px;
  }
</style>
