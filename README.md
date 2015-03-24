```
   _
  | |     ___   ___
  | |    / _ \ / _ \
  | |___|  __/| (_) |
   \_____\___| \___/
```
# city selection

## overflow

city selection是国内外城市选择前端界面

相比传统的城市选择界面它的特点是：

1. 优秀的使用体验，城市选择一目了然，即时展现
2. 细分城市级别，获取城市精准匹配
3. 支持修改输入数据格式化方法，支持输出需求格式化数据？！

兼容的浏览器：IE10+、Chrome、Firefox、Safari，opera

#####!!!此界面是内部项目控件，不支持对外使用，也不提供事例文件

## 安装

```shell
git clone https://github.com/zlstone/city_selection.git
```

## 使用

#### 创建实例
```
CitySelection.create({
	style : [String] 默认样式，暂未开放 默认值为'default'
	tree : [Object] 城市数据对象，由output.js生成的数据
	url : [String] 数据获取地址，如配置tree，责被忽略，默认为'./citys.js'
	search : [Boolean] 是否支持长列表搜索模式，未开放
})
```
#### 打开浮层并初始化城市列表
```
instance.initCityList({
  model : [Array] 需要初始化的数据 默认为[]
  readonly : [Boolean] 是否允许用户操作 默认为false
  success : [Fuction]确认后执行的回调函数 默认为空
})
```

## 更新
* 1.3.1 : 修改城市树文件的生成数据，修改港澳台子数据为国家名
* 1.3.0 : 移除内部数据文件；删除事例文件，重写原型链部分方法；支持输入输出数据省份中文和海外城市缩写；
* 1.2.2 : 修复输出无省份值时的映射错误
* 1.2.1 : 添加输入和输出省份值为中文的支持
* 1.2.0 : 修复些许bug，修改列表高度跟随特性
* 1.1.0 : 修复些许bug，添加跟随列表高度跟随特性
