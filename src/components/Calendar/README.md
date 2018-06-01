# Calendar 日历

用于选择日期区间。

### 规则

- 显示日历以用来选择日期或日期区间。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterDirection | 入场方向 | String ```'horizontal' | 'vertical'``` | vertical |
| locale | 本地化 | Object | - |
| onCancel | 关闭时回调函数 | Function | - |
| onConfirm | 确认时回调函数 | Function ```(startTime: Date, endTime: Date) => void``` | - |
| pickTime | 是否选择时间 | Boolean | false |
| prefixCls | 样式前缀 | String | mobile-calendar |
| renderShortcut | 替换快捷选择栏，需要设置```showShortcut: true``` | Function | - |
| renderHeader | 替换标题栏 | Function | - |
| showShortcut | 快捷日期选择 | Boolean | false |
| title | 头部标题 | String | - |
| type | 选择类型，one 单日，range 日期区间 | String | range |
| visible | 是否显示 | Boolean | false |
| defaultDate | 显示开始日期 | Date | ```new Date()``` |
| getDateExtra | 日期扩展数据 | Function ```(date: Date) => {info, disable} ``` | - |
| infiniteOpt | 无限滚动优化（大范围选择） | Boolean | false |
| initalMonths | 初始化月个数 | Number | 6 |
| maxDate | 最大日期 | Date | - |
| minDate | 最小日期 | Date | - |
| onSelectHasDisableDate | 选择区间包含不可用日期的回调 | Function ```(date) => void ``` | - |
| onSelect | 选择日期回调，如果有返回值，选择范围将使用返回值 | Function | - |
| rowSize | 行大小 | String ```'normal' | 'xl'``` | normal |
| defaultValue | 默认选择值，开始时间、结束时间 | Array | - |
| defaultTimeValue | 默认时间选择值 | Date | - |
