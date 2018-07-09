<template>
  <div class="um-image-picker-list">
    <Flex align="start" v-for="(rowitem, rowindex) in flexEl" :key="rowindex" style="margin-bottom: 8px">
      <FlexItem v-for="(colitem, colindex) in rowitem" :key="colindex">
        <div class="um-image-picker-item" v-if="colitem.url">
          <div class="um-image-picker-item-content" :style="`background-image:url(${colitem.url})`">
          </div>
          <Feedback :onMouseUp="() => {removeImg(rowindex, colindex)}">
            <Icon class="um-image-picker-item-remove" type="cross"></Icon>
          </Feedback>
        </div>
        <template v-else-if="colitem.picker">
          <Feedback :onMouseUp="() => {AddImgClick()}">
            <div class="um-image-picker-upload-btn" v-if="selectable">
              <input
                type="file"
                accept="accept"
                multiple="multiple"
                @change="onFileChange()"
                ref="fileSelectorInput"/>
            </div>
          </Feedback>
        </template>
        <div v-else class="um-image-picker-blank"></div>
      </FlexItem>
    </Flex>
  </div>
</template>

<script>
  import { Flex, FlexItem } from '../Flex'
  import Icon from '../Icon'
  import Feedback from '../feedback/feedback.vue'

  export default {
    components: {
      Flex,
      FlexItem,
      Icon,
      Feedback
    },
    name: 'ImagePicker',
    props: {
      selectable: {
        type: Boolean,
        default: true
      },
      multiple: {
        type: Boolean,
        default: true
      },
      accept: {
        type: String,
        default: 'image/*'
      },
      files: {
        type: Array
      },
      onFail: {
      },
      onChange: {
      },
      onImgClick: {
      },
      onAddImageClick: {
      }
    },
    data () {
      return {
        wrapUrlIndex: '',
        index: '',
        addImgEl: [],
        flexEl: [],                           // 分行分割后的多维数组
        picker: [                            // 图片选择器
          {
            picker: '0'
          }
        ],
        allImgEl: [],
        blankEl: []
      }
    },
    methods: {
      AddImgClick () {
        if (this.onAddImageClick) {
          this.onAddImageClick()
        }
      },
      onFileChange () {
        const fileSelectorEl = this.$refs.fileSelectorInput
        if (fileSelectorEl && fileSelectorEl.length) {
          const files = fileSelectorEl[0].files
          for (let i = 0; i < files.length; i++) {
            this.parseFile(files[i], i)
          }
        }
        fileSelectorEl.value = ''
      },
      getOrientation (file, mount) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file.slice(0, 64 * 1024))
        reader.onload = (event) => {
          const view = new DataView(event.target.result)
          if (view.getUint16(0, false) !== 0xFFD8) {
            return mount(-2)
          }
          let length = view.byteLength
          let offset = 2
          while (offset < length) {
            const marker = view.getUint16(offset, false)
            offset += 2
            if (marker === 0xFFE1) {
              let tmp = view.getUint32(offset += 2, false)
              if (tmp !== 0x45786966) {
                return mount(-1)
              }
              let little = view.getUint16(offset += 6, false) === 0x4949
              offset += view.getUint32(offset + 4, little)
              let tags = view.getUint16(offset, little)
              offset += 2
              for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                  return mount(view.getUint16(offset + (i * 12) + 8, little))
                }
              }
            } else if ((marker & 0xFF00) !== 0xFF00) {
              break
            } else {
              offset += view.getUint16(offset, false)
            }
          }
          return mount(-1)
        }
      },
      getRotation (orientation) {
        let imgRotation = 0
        switch (orientation) {
          case 3:
            imgRotation = 180
            break
          case 6:
            imgRotation = 90
            break
          case 8:
            imgRotation = 270
            break
          default:
        }
        return imgRotation
      },
      parseFile (file, index) {
        let vm = this
        const reader = new FileReader()
        reader.readAsDataURL(file)                // filelist文件，里面有两个图片。 index为0
        reader.onloadend = function (event) {
          const dataURL = event.target.result
          if (!dataURL) {
            if (this.onFail) {
              this.onFail(`Fail to get the ${index} image`)
            }
          }
          let orientation = 1
          vm.getOrientation(file, (res) => {
            // -2: not jpeg , -1: not defined
            if (res > 0) {
              orientation = res                    // 1
            }
            vm.addImage({
              url: dataURL,
              orientation,
              file
            })
          })
        }
      },
      addImage (newImgItem) {
        this.addImgEl.push(newImgItem)
        if (this.addImgEl.length > 1) {
          this.allImgEl = this.allImgEl.concat(newImgItem)
        } else {
          this.allImgEl = this.files.concat(newImgItem)
        }
        if (this.onChange) {
          this.onChange(newImgItem, 'add')
        }
      },
      removeImg (rowindex, colindex) {
        if (rowindex === 0) {
          this.index = colindex
        } else if (rowindex !== 0) {
          this.index = rowindex * 4 + colindex
        }
        for (let i = 0; i < this.allImgEl.length; i++) {
          if (i === this.index) {
            this.allImgEl.splice(i, 1)
          }
        }
        if (this.onChange) {
          this.onChange(this.allImgEl, this.index, 'remove')
        }
      },
//      wrapUrl (rowindex, colindex) {
//        return {
//          backgroundImage: `url(${this.allImgEl[this.wrapUrlIndex].url})`,
//          transform: `rotate(${this.getRotation(this.addImgEl.orientation)}deg)`
//        }
//      },
      ImgClick (rowindex, colindex) {
        if (this.onImgClick) {
          this.onImgClick(this.allImgEl, rowindex, colindex)
        }
      },
      wrapFlexEl () {
        let allEl = this.selectable ? this.allImgEl.concat(this.picker) : this.allImgEl
        const length = allEl.length
        if (length !== 0 && length % 4 !== 0) {
          const blankCount = 4 - length % 4
          const blankItem = []
          for (let i = 0; i < blankCount; i++) {
            blankItem.push(i)
          }
          allEl = allEl.concat(blankItem)
        }
        const flexEl = []
        for (let i = 0; i < allEl.length / 4; i++) {
          const rowEl = allEl.slice(i * 4, i * 4 + 4)
          flexEl.push(rowEl)
        }
        this.flexEl = flexEl
      }
    },
    watch: {
      allImgEl: function () {
        this.wrapFlexEl()
      }
    },
    created () {
      this.allImgEl = this.files
    }
  }
</script>

<style>
  .um-image-picker-item-content {
    position: absolute;
    height: 100%;
    width: 100%;
    vertical-align: middle;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-size: cover;
  }
  .um-image-picker-item-remove {
    opacity: 0.5;
    position: absolute;
    right: 6px;
    top: 6px;
    text-align: right;
    vertical-align: top;
    z-index: 2;
  }
  .um-image-picker-blank {
    opacity: 0;
    padding-bottom: 100%;
  }
  .um-image-picker-item {
    display: inline-block;
    width: 100%;
    padding-bottom: 100%;
    position: relative;
  }
  .um-image-picker-list {
    padding: 9px 8px 0;
    margin-bottom: 15px;
  }
  .um-image-picker {
    position: relative;
    margin-right: 5px;
    margin-left: 0;
    min-width: 10px;
    min-height: 10px;
  }
  .um-image-picker-upload-btn {
    position: relative;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    padding-bottom: 100%;
  }
  .um-image-picker-upload-btn:before {
    position: absolute;
    width: 1px;
    height: 25px;
    content: " ";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ccc;
  }
  .um-image-picker-upload-btn:after {
    position: absolute;
    width: 25px;
    height: 1px;
    content: " ";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ccc;
  }

  .um-image-picker-upload-btn-active {
    background-color: #ddd;
  }
  .um-image-picker-upload-btn input {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
  }
</style>
