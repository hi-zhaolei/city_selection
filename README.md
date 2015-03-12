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

注意!:由于是内部项目控件，只支持下方类型数据结果( 输出 和 输入 ) 

```
[
	<!-- 大陆 -->
	{
		"large_region_code":1,
		"province_name":5,
		"city_level":2,
		"city_name":"贵阳"
	},
	<!-- 港澳台 -->
	{
		"large_region_code":2,
		"city_name":"澳门"
	},
	<!-- 国外 -->
	{
		"large_region_code":3,
		"country_name":"\"CONGO,\nTHE DEMOCRATIC REPUBLIC OF THE\""
	}
]
```

## 安装

```shell
git clone https://github.com/zlstone/city_selection.git
```

## 使用

#### 创建实例
```
CitySelection.create({
	style : 'default',
	success : '数据提交配置；此配置是一个function，将被调用于实例的getData方法内，参数为当前界面的所有选择城市数据',
	search : '{boolean}是否支持长列表搜索模式，未开放',
	debug : '{boolean}是否记录log，未开放'
})
```
#### 打开浮层并初始化城市列表
```
instance.initCityList(model, bool, fn)
// model : 需要初始化的数据 [Object]
// bool : 是否允许用户操作 [Boolean]
// fn : 确认后执行的回调函数 [Fuction]
```

## 更新
#### 1.2.0
* 修复些许bug
* 修改列表高度跟随特性
* 添加输入和输出省份值为中文的支持

#### 1.1.0
* 修复些许bug
* 添加跟随列表高度跟随特性