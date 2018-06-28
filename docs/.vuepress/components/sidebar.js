let layoutBar = ['Flex', 'WhiteSpace', 'WingBlank']
let navBar = ['Drawer', 'DrawerInline', 'Menu', 'NavBar', 'Pagination', 'Popover', 'SegmentedControl', 'TabBar', 'Tabs']
let dataEntryBar = ['Button', 'Calendar', 'Checkbox', 'DatePicker', 'DatePickerView', 'ImagePicker', 'InputItem', 'Picker', 'PickerView', 'Radio', 'Range', 'SearchBar', 'Slider', 'Stepper', 'Switch', 'TextareaItem']
let dataDisBar = ['Accordion', 'Badge', 'Card', 'Carousel', 'Grid', 'Icon', 'List', 'NoticeBar', 'Steps', 'Tag']
let feedbackBar = ['ActionSheet', 'ActivityIndicator', 'Modal', 'Progress', 'Toast']
let gestureBar = ['PullToRefresh', 'SwipeAction']
let combinationBar = ['ListView', 'Result']
let otherBar = ['LocaleProvider']
let barObj = {
  Layout: layoutBar,
  Navigation: navBar,
  DataEntry: dataEntryBar,
  DataDisplay: dataDisBar,
  Feedback: feedbackBar,
  Gesture: gestureBar,
  Combination: combinationBar,
  Other: otherBar
}
module.exports = barObj
