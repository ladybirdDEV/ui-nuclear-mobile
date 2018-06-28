import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Button from '@/pages/Button'
import Navbar from '@/pages/NavBar'
import Modal from '@/pages/Modal'
import Progress from '@/pages/Progress'
import Badge from '@/pages/Badge'
import List from '@/pages/List'
import Icon from '@/pages/Icon'
import Toast from '@/pages/Toast'
import WingBlank from '@/pages/WingBlank'
import Flex from '@/pages/Flex'
import Grid from '@/pages/Grid'
import Checkbox from '@/pages/Checkbox'
import WhiteSpace from '@/pages/WhiteSpace'
import Card from '@/pages/Card'
import SegmentedControl from '@/pages/SegmentedControl'
import Carousel from '@/pages/Carousel'
import Range from '@/pages/Range'
import Radio from '@/pages/Radio'
import Tag from '@/pages/Tag'
import Slider from '@/pages/Slider'
import Popover from '@/pages/Popover'
import NoticeBar from '@/pages/NoticeBar'
import Pagination from '@/pages/Pagination'
import Result from '@/pages/Result'
import Switch from '@/pages/Switch'
import ActionSheet from '@/pages/ActionSheet'
import Steps from '@/pages/Steps'
import ActivityIndicator from '@/pages/ActivityIndicator'
import ImagePicker from '@/pages/ImagePicker'
import InputItem from '@/pages/InputItem'
import SearchBar from '@/pages/SearchBar'
import Menu from '@/pages/Menu'
import Picker from '@/pages/Picker'
import Tabs from '@/pages/Tabs'
import TabBar from '@/pages/TabBar'
import Accordion from '@/pages/Accordion'
import TextareaItem from '@/pages/TextareaItem'
import Stepper from '@/pages/Stepper'
import Drawer from '@/pages/Drawer'
import DrawerInline from '@/pages/DrawerInline'
import MPicker from '@/pages/M-Picker/Picker'
import MultiPicker from '@/pages/M-Picker/MultiPicker'
import Popup from '@/pages/M-Picker/Popup'
import SwipeAction from '@/pages/SwipeAction'
import PullToRefresh from '@/pages/PullToRefresh'
import Calendar from '@/pages/Calendar'
import Dialog from '@/pages/Dialog'
import ListView from '@/pages/ListView'
import MCascader from '@/pages/M-Cascader/MCascader'
import PopupCascader from '@/pages/M-Cascader/PopupCascader'
import PickerView from '@/pages/PickerView'
import DateTime from '@/pages/M-DatePicker/Time'
import MobileDatePicker from '@/pages/M-DatePicker/DatePicker'
import DatePickerView from '@/pages/DatePickerView'
import MCalendar from '@/pages/MCalendar'
import DatePicker from '@/pages/DatePicker'
import IndexList from '@/pages/IndexList'
import LocaleProvider from '@/pages/LocaleProvider'
import ListViewNav from '@/pages/ListViewNav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav-bar',
      name: 'nav-bar',
      component: Navbar
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/badge',
      name: 'badge',
      component: Badge
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/wing-blank',
      name: 'wing-blank',
      component: WingBlank
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    },
    {
      path: '/white-space',
      name: 'white-space',
      component: WhiteSpace
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/segmented-control',
      name: 'segmented-control',
      component: SegmentedControl
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/range',
      name: 'range',
      component: Range
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/popover',
      name: 'popover',
      component: Popover
    },
    {
      path: '/notice-bar',
      name: 'notice-bar',
      component: NoticeBar
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/action-sheet',
      name: 'action-sheet',
      component: ActionSheet
    },
    {
      path: '/steps',
      name: 'steps',
      component: Steps
    },
    {
      path: '/activity-indicator',
      name: 'activity-indicator',
      component: ActivityIndicator
    },
    {
      path: '/image-picker',
      name: 'image-picker',
      component: ImagePicker
    },
    {
      path: '/input-item',
      name: 'input-item',
      component: InputItem
    },
    {
      path: '/search-bar',
      name: 'search-bar',
      component: SearchBar
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },
    {
      path: '/tab-bar',
      name: 'tab-bar',
      component: TabBar
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: Accordion
    },
    {
      path: '/textarea-item',
      name: 'textarea-item',
      component: TextareaItem
    },
    {
      path: '/stepper',
      name: 'stepper',
      component: Stepper
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: Drawer
    },
    {
      path: '/drawer-inline',
      name: 'drawer-inline',
      component: DrawerInline
    },
    {
      path: '/m-picker',
      name: 'm-picker',
      component: MPicker
    },
    {
      path: '/multi-picker',
      name: 'multi-picker',
      component: MultiPicker
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/swipe-action',
      name: 'swipe-action',
      component: SwipeAction
    },
    {
      path: '/pull-to-refresh',
      name: 'pull-to-refresh',
      component: PullToRefresh
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/list-view',
      name: 'list-view',
      component: ListView
    },
    {
      path: '/index-list',
      name: 'index-list',
      component: IndexList
    },
    {
      path: '/m-cascader',
      name: 'm-cascader',
      component: MCascader
    },
    {
      path: '/popup-cascader',
      name: 'popup-cascade',
      component: PopupCascader
    },
    {
      path: '/picker-view',
      name: 'picker-view',
      component: PickerView
    },
    {
      path: '/date-time',
      name: 'date-time',
      component: DateTime
    },
    {
      path: '/m-date-picker',
      name: 'm-date-picker',
      component: MobileDatePicker
    },
    {
      path: '/date-picker-view',
      name: 'date-picker-view',
      component: DatePickerView
    },
    {
      path: '/m-calendar',
      name: 'm-calendar',
      component: MCalendar
    },
    {
      path: '/date-picker',
      name: 'date-picker',
      component: DatePicker
    },
    {
      path: '/locale-provider',
      name: 'locale-provider',
      component: LocaleProvider
    },
    {
      path: '/list-view-nav',
      name: 'list-view-nav',
      component: ListViewNav
    }
  ]
})
