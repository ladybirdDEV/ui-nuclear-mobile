<template>
  <div>
    <List>
      <Picker
        v-model="value"
        title="Areas"
        :data="district"
        :onOk="onOk"
        :onDismiss="onDismiss"
        :mask="false"
        :onChange="onChange">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra" :onClick="props.onClick">Multiple & cascade</ListItem>
        </template>
      </Picker>

      <Picker
        title="选择季节"
        v-model="sValue"
        :data="seasons"
        :onOk="(value) => {sValue = value}"
        :cascade="false"
        :onChange="onChange">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra" :onClick="props.onClick">Multiple</ListItem>
        </template>
      </Picker>

      <Picker
        title="选择地区"
        :data="provinces"
        v-model="province"
        :cascade="false"
        :onChange="onChange">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra" :onClick="props.onClick">Single</ListItem>
        </template>
      </Picker>

      <Picker
        title="选择地区"
        :data="data"
        :cols="col"
        v-model="asyncValue"
        :onPickerChange="onPickerChange"
        :onOk="onOk">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :extra="props.extra" :onClick="props.onClick">Multiple & async</ListItem>
        </template>
      </Picker>
    </List>
    <Picker
      title="选择地区"
      :data="district"
      v-model="pickerValue"
      :onChange="onChange">
      <template slot-scope="props" slot="list-item">
        <div style="background-color: #fff; padding-left: 15px;" @click="props.onClick">
          <div class="test">
            <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Customized children</div>
            <div style="text-align: right; color: #888; margin-right: 15px;">{{props.extra}}</div>
          </div>
        </div>
      </template>
    </Picker>
  </div>
</template>

<script>
  import Picker from '@/components/picker'
  import List from '@/components/list'
  import ListItem from '@/components/list-item'
  import cityData from '@/components/picker/city-data.js'
  const provinces = cityData.map((item) => {
    return {
      value: item.value,
      label: item.label
    }
  })

  export default {
    components: {
      Picker,
      List,
      ListItem
    },
    data () {
      return {
        value: ['05', '05-1', '05-1-3'],
        province: ['00'],
        district: cityData,
        provinces: [{value: '00', label: '请选择'}, ...provinces],
        extra: '请选择',
        sValue: ['2013', '夏'],
        col: 1,
        asyncValue: [],
        pickerValue: [],
        seasons: [
          [
            {
              label: '2013',
              value: '2013'
            },
            {
              label: '2014',
              value: '2014'
            }
          ],
          [
            {
              label: '春',
              value: '春'
            },
            {
              label: '夏',
              value: '夏'
            }
          ]
        ],
        data: [
          {
            value: 'bj',
            label: '北京市'
          },
          {
            value: 'zj',
            label: '浙江省'
          },
          {
            value: 'gd',
            label: '广东省'
          },
          {
            value: 'hn',
            label: '海南省'
          },
          {
            value: 'cq',
            label: '重庆市'
          },
          {
            value: 'sc',
            label: '四川省'
          }
        ]
      }
    },
    methods: {
      onOk (value) {
        console.log('ok', value)
      },
      onDismiss () {
        console.log('dismiss')
      },
      getSel (value) {
        this.extra = value
      },
      onChange (value) {
        this.value = value
        console.log(value)
      },
      onPickerChange (val) {
        console.log(val)
        let colNum = 1
        const d = this.data
        const asyncValue = val
        if (val[0] === 'zj') {
          d.forEach((i) => {
            if (i.value === 'zj') {
              colNum = 2
              if (!i.children) {
                i.children = [{
                  value: 'zj-nb',
                  label: '宁波'
                }, {
                  value: 'zj-hz',
                  label: '杭州'
                }]
                asyncValue.push('zj-nb')
              } else if (val[1] === 'zj-hz') {
                i.children.forEach((j) => {
                  if (j.value === 'zj-hz') {
                    j.children = [{
                      value: 'zj-hz-xh',
                      label: '西湖区'
                    }]
                    asyncValue.push('zj-hz-xh')
                  }
                })
                colNum = 3
              }
            }
          })
          // 数组没有响应式的改变
          this.data = []
          setTimeout(() => {
            this.data = d
          }, 0)
        } else {
          colNum = 1
        }
        this.col = colNum
        this.asyncValue = asyncValue
      },
      change () {
        console.log('change事件', this.value)
      },
      visibleChange (val1, val2) {
        console.log(val2)
      }
    },
    mounted () {
    }
  }
</script>

<style>
.test {
  position: relative;
  border-bottom: 0;
  display: flex;
  height: 45px;
  line-height: 45px;
}
.test:after {
  content: '';
  position: absolute;
  background-color: #ddd;
  display: block;
  z-index: 1;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  transform-origin: 50% 100%;
  transform: scaleY(0.5);
}
</style>
