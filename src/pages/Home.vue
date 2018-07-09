<template>
  <div class="um-demo-page">
    <div class="um-demo-hd">
      <h1 class="um-demo-title">UI Nuclear Mobile</h1>
      <h2 class="um-demo-subtitle">智慧中台移动端组件库</h2>
    </div>
    <div class="um-demo-bd">
      <List v-for="(cat, index) in category" :key="index" :class="cat.opened ? 'category-open' : 'category-closed'" @click.native="category[index].opened = !category[index].opened" >
        <template slot="renderHeader">
          <div class="um-demo-category">
            <div class="um-demo-category-name">{{cat.name}}</div>
            <div class="um-demo-category-arrow">
              <span>
                <Icon type="down"></Icon>
              </span>
            </div>
          </div>
        </template>
        <ListItem v-for="item in cat.item" :key="item.name" arrow="horizontal" multipleLine @click.native="routeTo(item.path)">{{item.name}}</ListItem>
      </List>
    </div>
  </div>
</template>
<script>
import Button from '@/components/button'
import WhiteSpace from '@/components/white-space'
import WingBlank from '@/components/wing-blank'
import { List, ListItem } from '@/components/List'
import Icon from '@/components/icon'
export default {
  components: {
    Button,
    List,
    ListItem,
    WhiteSpace,
    WingBlank,
    Icon
  },
  data () {
    return {
      category:
      [
        {
          name: '布局 Layout',
          opened: false,
          item: [
            {
              name: 'Flex Flex布局',
              path: 'flex'
            },
            {
              name: 'WhiteSpace 上下留白',
              path: 'white-space'
            },
            {
              name: 'WingBlank 两翼留白',
              path: 'wing-blank'
            }
          ]
        },
        {
          name: '导航 Navigation',
          opened: false,
          item: [
            {
              name: 'Drawer 抽屉-基本',
              path: 'drawer'
            },
            {
              name: 'Drawer 抽屉-嵌入文档模式',
              path: 'drawer-inline'
            },
            {
              name: 'Menu 菜单',
              path: 'menu'
            },
            {
              name: 'NavBar 导航栏',
              path: 'nav-bar'
            },
            {
              name: 'Pagination 分页器',
              path: 'pagination'
            },
            {
              name: 'Popover 气泡',
              path: 'popover'
            },
            {
              name: 'SegmentedControl 分段器',
              path: 'segmented-control'
            },
            {
              name: 'TabBar 标签栏',
              path: 'tab-bar'
            },
            {
              name: 'Tabs 标签页',
              path: 'tabs'
            }
          ]
        },
        {
          name: '数据录入 Data Entry',
          opened: false,
          item: [
            {
              name: 'Button 按钮',
              path: 'button'
            },
            {
              name: 'Calendar 日历',
              path: 'calendar'
            },
            {
              name: 'Checkbox 复选框',
              path: 'checkbox'
            },
            {
              name: 'DatePicker 日期选择',
              path: 'date-picker'
            },
            {
              name: 'DatePickerView 选择器',
              path: 'date-picker-view'
            },
            {
              name: 'ImagePicker 图片选择器',
              path: 'image-picker'
            },
            {
              name: 'InputItem 文本输入',
              path: 'input-item'
            },
            {
              name: 'Picker 选择器',
              path: 'picker'
            },
            {
              name: 'PickerView 选择器',
              path: 'picker-view'
            },
            {
              name: 'Radio 单选框',
              path: 'radio'
            },
            {
              name: 'Range 区域选择',
              path: 'range'
            },
            {
              name: 'SearchBar 搜索栏',
              path: 'search-bar'
            },
            {
              name: 'Slider 滑动输入条',
              path: 'slider'
            },
            {
              name: 'Stepper 步进器',
              path: 'stepper'
            },
            {
              name: 'Switch 滑动开关',
              path: 'switch'
            },
            {
              name: 'TextareaItem 多行输入',
              path: 'textarea-item'
            }
          ]
        },
        {
          name: '数据展示 Data Display',
          opened: false,
          item: [
            {
              name: 'Accordion 手风琴',
              path: 'accordion'
            },
            {
              name: 'Badge 徽标数',
              path: 'badge'
            },
            {
              name: 'Card 卡片',
              path: 'card'
            },
            {
              name: 'Carousel 走马灯',
              path: 'carousel'
            },
            {
              name: 'Grid 宫格',
              path: 'grid'
            },
            {
              name: 'Icon 图标',
              path: 'icon'
            },
            {
              name: 'List 列表',
              path: 'list'
            },
            {
              name: 'NoticeBar 通告栏',
              path: 'notice-bar'
            },
            {
              name: 'Steps 步骤条',
              path: 'steps'
            },
            {
              name: 'Tag 标签',
              path: 'tag'
            }
          ]
        },
        {
          name: '操作反馈 Feedback',
          opened: false,
          item: [
            {
              name: 'ActionSheet 动作面板',
              path: 'action-sheet'
            },
            {
              name: 'ActivityIndicator 活动指示器',
              path: 'activity-indicator'
            },
            {
              name: 'Modal 对话框',
              path: 'modal'
            },
            {
              name: 'Progress 进度条',
              path: 'progress'
            },
            {
              name: 'Toast 轻提示',
              path: 'toast'
            }
          ]
        },
        {
          name: '手势 Gesture',
          opened: false,
          item: [
            {
              name: 'PullToRefresh 拉动刷新',
              path: 'pull-to-refresh'
            },
            {
              name: 'SwipeAction 滑动操作',
              path: 'swipe-action'
            }
          ]
        },
        {
          name: '组合组件 Combination',
          opened: false,
          item: [
            {
              name: 'ListView 长列表',
              path: 'list-view-nav'
            },
            {
              name: 'Result 结果页',
              path: 'result'
            }
          ]
        },
        {
          name: '其他 Other',
          opened: false,
          item: [
            {
              name: 'LocaleProvider 国际化',
              path: 'locale-provider'
            }
          ]
        }
      ]
    }
  },
  methods: {
    routeTo (e) {
      // e = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      console.log(e)
      this.$router.push({ name: e })
    }
  }
}
</script>
<style>
.um-demo-page .um-demo-hd {
  position: relative;
  overflow: hidden;
}

.um-demo-page .um-demo-hd .um-demo-title,
.um-demo-page .um-demo-hd .um-demo-subtitle {
  text-align: left;
  padding-left: 16px;
}

.um-demo-page .um-demo-hd .um-demo-title {
  color: rgba(0, 0, 0, 0.75);
  font-size: 21px;
  font-weight: normal;
  margin: 27px 0 15px;
}

.um-demo-page .um-demo-hd .um-demo-subtitle {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.75);
  font-weight: normal;
  margin: 0 0 27px;
}

.um-demo-page .um-demo-bd .um-list {
  margin: 0 16px 12px;
  background-color: white;
  border-radius: 2px;
}

.um-demo-page .um-demo-bd .um-list .um-list-header {
  padding: 0;
  padding-left: 24px;
  height: 70px;
  line-height: 70px;
  color: #404040;
  font-size: 16px;
}

.um-demo-page .um-demo-bd .um-list .um-list-body {
  border-top: none;
}

.um-demo-page .um-demo-bd .um-list .um-list-body::before {
  display: none;
}

.um-demo-page .um-demo-bd .um-list .um-list-item {
  padding-left: 24px;
}

.um-demo-page .um-demo-bd .um-list .um-list-item .um-list-content {
  color: #666;
  font-size: 14px;
}

.um-demo-page .um-demo-bd .um-list.category-closed .um-list-header {
  position: relative;
}

.um-demo-page .um-demo-bd .um-list.category-closed .um-list-body {
  display: none;
}

.um-demo-page .um-demo-category {
  display: flex;
}

.um-demo-page .um-demo-category-name {
  flex: 1;
}

.um-demo-page .um-demo-category-arrow {
  width: 50px;
  text-align: center;
  transform: rotate(0deg);
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.um-demo-page .um-demo-category-arrow span {
  margin-top: 5px;
  display: inline-block;
  color: #c7c7cc;
}

.category-open .um-demo-category .um-demo-category-arrow {
  transform: rotate(-180deg);
}

</style>
