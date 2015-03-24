( (factory)->
  factory ($)->
    # 样式引入
    css = '/*zl-popup stylesheet*/.zl-popup *{ -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box; font-size:12px; line-height:24px;} .fade { opacity: 0; -webkit-transition: opacity .2s linear; transition: opacity .2s linear; }.zl-popup-open {overflow: hidden;}.zl-popup.in {opacity: 1;background: rgba(0, 0, 0, 0.4);}.zl-popup {position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 1001;display: none;overflow: auto;overflow-y: scroll;outline: none;}.zl-popup-dialog {width: 600px;margin: 30px auto;position: relative;z-index: 1002;}.zl-popup-content {position: relative;background-color: #fff;border: 1px solid rgba(0, 0, 0, 0.2);outline: 0;background-clip: padding-box;-webkit-box-shadow:0 5px 15px rgba(0, 0, 0, 0.5);box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);}.zl-popup-header {min-height: 16px;padding: 6px 15px;border-bottom: 1px solid #e5e5e5;}.zl-popup-header button.close {float: right;font-size: 21px;font-weight: bold;line-height: 1;color: #000;text-shadow: 0 1px 0 #fff;opacity: .2;filter: alphaopacity=20);padding: 0;cursor: pointer;background: transparent;border: 0;-webkit-appearance: none;}.zl-popup-title {margin: 0;line-height: 24px;font-size: 14px;}.zl-popup-header .close {margin-top: -2px;}.zl-popup-body {position: relative;padding: 8px 20px;}.zl-popup-footer {padding: 6px 20px;text-align: right;border-top: 1px solid #e5e5e5;}.zl-popup-footer .btn + .btn {margin-bottom: 0;margin-left: 5px;}.zl-popup.fade > div {-webkit-transform: translate(0, -25%);-ms-transform: translate(0, -25%);transform: translate(0, -25%);-webkit-transition: -webkittransform 0.3s ease-out;-moz-transition: -moz-transform 0.3s ease-out;-o-transition: -o-transform 0.3s ease-out;transition: transform 0.3s ease-out;}.zl-popup.in > div {-webkit-transform: translate(0, 0);-ms-transform: translate(0, 0);transform: translate(0, 0);}/* city list stylesheet */.list-group {margin-bottom: 20px;padding-left: 0;position: relative;}.list-group-item {position: relative;display: block;padding: 3px 15px;margin-bottom: -1px;background-color: #ffffff;border: 1px solid #dddddd;text-decoration:none;font-size:12px;line-height:24px;}.list-group-item:first-child {border-top-right-radius: 4px;border-top-left-radius: 4px;}.list-group-item:last-child {margin-bottom: 0;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;}.list-group-item > .badge {float: right;}.list-group-item > .badge + .badge {margin-right: 5px;}a.list-group-item {color: #555555;}a.list-group-item .list-group-item-heading {color: #333333;}a.list-group-item.hover,a.list-group-item:hover {text-decoration: none;background-color: #f5f5f5;}a.list-group-item.active,a.list-group-item.active:hover {z-index: 2;color: #ffffff;background-color: #428bca;border-color: #ffffff;}#Z-cityInterface h3 {background-color: #edf7ff;color: #38599E;padding: 5px 10px;margin:0;}#Z-cityInterface .zl-city-tree {position: relative;padding: 10px 0;overflow-y: scroll;}#Z-cityInterface .zl-city-tree:before,#Z-cityInterface .zl-city-tree:after {content: " ";/* 1 */display: table;/* 2 */}#Z-cityInterface .zl-city-tree:after {clear: both;}#Z-cityInterface .zl-city-tree.zl-city-tree-readonly:before {content: " ";position: absolute;top: 0;left: 0;width: 100%;height: 500px;z-index: 1002;}#Z-cityInterface .zl-city-tree a.list-group-item b {width: 0;height: 0;border-width: 5px 0 5px 6px;border-color: transparent transparent transparent#428bca;border-style: solid;position: absolute;right: 10px;top: 9px;}#Z-cityInterface .zl-city-tree a.list-group-item.active b {border-left-color: #fff;}#Z-cityInterface .zl-city-tree a.list-group-item.hover b,#Z-cityInterface .zl-city-tree a.list-group-item.hover.active b {width: 10px;height: 10px;border: none;background: #2fe2bf;border-radius: 50%;}#Z-cityInterface .zl-city-tree > div {float: left;max-height: 500px;width: 25%;}#Z-cityInterface .zl-city-ctn {padding: 10px 0 0 10px;min-height: 44px;}#Z-cityInterface .zl-city-ctn > span.tag {border-radius: 4px;background: #428bca;color: #ffffff;cursor: pointer;margin: 0 3px 3px 0;overflow: hidden;padding:2px 8px 2px 15px;position: relative;vertical-align: middle;display: inline-block;zoom: 1;-webkit-transition: 0.14s linear;transition: 0.14s linear;}#Z-cityInterface .zl-city-ctn > span.tag > a {color: white;cursor: pointer;font-size: 12px;opacity: 0;padding: 2px 7px 0 0;position: absolute;bottom: 0;right:0;top: 0;text-align: right;text-decoration: none;z-index: 2;display: none\9;}#Z-cityInterface .zl-city-ctn > span.tag:hover {background-color: #3498db;padding-left: 8px;padding-right: 15px;}#Z-cityInterface .zl-city-ctn > span.tag:hover > a {color: white;opacity: 1;}.zl-popup-footer .btn {display: inline-block;margin-bottom: 0;font-weight: normal;text-align: center;vertical-align: middle;cursor: pointer;padding: 0 10px;font-size: 12px;line-height: 24px;border: none;outline: none;background: #ccc;color: white;text-decoration: none;-webkit-transition: 0.25s;transition: 0.25s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;-o-user-select: none;user-select: none;}.zl-popup-footer .btn.btn-info {background-color: #2980b9;}.zl-popup-footer .btn.btn-info:hover,.zl-popup-footer .btn.btn-info:focus {background-color: #3498db;}'
    oStyle = document.createElement 'style'
    oStyle.type = "text/css"
    oStyle.rel = "stylesheet"
    if oStyle.styleSheet
      oStyle.styleSheet.cssText = h
    else
      oStyle.appendChild document.createTextNode css
    document.getElementsByTagName('head')[0].appendChild oStyle
    # 工具方法
    slice = Array.prototype.slice
    _ =
      isString : (str) -> toString.call( str ) is '[object String]'
      isNumber : (num) -> toString.call( num ) is '[object Number]'
      isArray : (arr) -> toString.call( arr ) is '[object Array]'
      isFunction : (fn) -> toString.call( fn ) is '[object Function]'
      isBoolean : (bool) -> toString.call( bool ) is '[object Boolean]'
      isObject : (obj) -> obj is Object obj
      isEmpty : (obj) ->
        return yes if obj is null
        return obj.length is 0 if @isArray(obj) or @isString(obj)
        for key of obj
          return no if `key in obj`
        yes
      isDefined : -> typeof arguments[0] isnt 'undefined'
      # Retrieve the names of an object's properties.
      # Delegates to **ECMAScript 5**'s native `Object.keys`
      keys : (obj) ->
        if Object.keys
          return Object.keys obj
        if obj isnt Object(obj)
          throw new TypeError 'Invalid object'
        keys = []
        `for (var key in obj) if (_.has(obj, key)) keys.push(key);`
        keys
      # The cornerstone, an `each` implementation, aka `forEach`.
      # Handles objects with the built-in `forEach`, arrays, and raw objects.
      # Delegates to **ECMAScript 5**'s native `forEach` if available.
      each : (obj, iterator, context) ->
        return if obj == null
        if Array::forEach and obj.forEach is Array::forEach
          obj.forEach iterator, context
        else if obj.length is +obj.length
          `for (var i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === {}) return;
          }`
        else
          `var keys = _.keys(obj);
          for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === {}) return;
          }`
        yes
      extend : (obj) ->
        _.each slice.call(arguments, 1), (source) ->
          if source
            for prop of source
              obj[prop] = source[prop]
        obj
      without : (array) -> _.difference array, slice.call arguments, 1
      # Take the difference between one array and a number of other arrays.
      # Only the elements present in just the first array will remain.
      difference : (array) ->
        rest = concat.apply ArrayProto, slice.call arguments, 1
        _.filter array, (value) -> not _.contains rest, value
      # Return all the elements that pass a truth test.
      # Delegates to **ECMAScript 5**'s native `filter` if available.
      # Aliased as `select`.
      filter : -> (obj, iterator, context) ->
        results = []
        return results if obj == null
        return obj.filter(iterator, context) if nativeFilter and obj.filter is nativeFilter
        _.each obj, (value, index, list) ->
          if iterator.call context, value, index, list
            results.push value
        results
    # 视图层
    class View
      initialize : ->
        # 绑定events事件
        @events and @_bindEvents()
        # 监听listens事件
        @listens and @_bindListens()

      _bindEvents : ->_.each @events, @_bind, @

      _bindListens : -> @model.events = @listens if @model

      _bind : (value, key)->
        _this = @
        if _.isFunction value
          arr = key.split ' '
          if arr.length is 1
            @$el.on arr[0], (ev) ->
              value.call @, ev, _this
              ev.stopPropagation()
              return no
          else
            @$el.on arr.shift(), (if arr.length is 1 then arr[0] else arr.join(' ')), (ev) ->
              value.call @, ev, _this
              ev.stopPropagation()
              return no
        else if @[value]
          arr = key.split ' '
          if arr.length is 1
            @$el.on arr[0], (ev) ->
              _this.oTarget = $ @
              ev.stopPropagation()
              _this[value]()
          else
            @$el.on arr.shift(), (if arr.length is 1 then arr[0] else arr.join(' ')), (ev) ->
              _this.oTarget = $ @
              ev.stopPropagation()
              _this[value]()
        else
          # console.log key
          console.warn value + '方法不存在'
      # jquery类对象find语法糖
      $ : -> @$el.find arguments[0]
    # 浮层类 继承于View
    class Popup extends View
      _disX = 0
      _disY = 0
      constructor : -> @initialize.apply @, arguments
      initialize :(json) ->
        @template = json.tmpl
        @options = @getOptions(json)
        @isOpen = no
        @$el = @createDialog()
        # events binding
        # 拖拽事件
        if @options.drag
          @$el.find('.zl-popup-title').css('cursor','move').on 'mousedown', (ev)=> @mouseDown ev
        # ESC键来关闭弹出层事件
        if @options.lock
          @$el.on 'keyup', (ev)=> @close() if ev.keyCode is 27
        # 关闭
        @$el.on 'click', '.Close', => @close()
        super
      getOptions : (json)-> # 参数设置
        # 默认参数
        defaults =
          drag : yes,       # {boolean}   是否绑定拖拽事件
          lock : yes,       # {boolean}   是否允许ESC键来关闭弹出层
          callback : null     # {function}      关闭弹出层后执行的回调函数
          success : null  # {function} 确认按钮
          title : '这是一个弹层'      # {string}     对话框标题
          cancel : no            # {boolean}      关闭按钮是否显示，如不显示，确认按钮默认为关闭对话框
          width : 600               # {对话框宽度}    默认600
          auto_render : yes    #是否自动化渲染
        if json?
          delete json.data
          _.extend defaults, json
        defaults
      setPosition : ( elem ) ->
        elem.css
          marginTop : -@$el.outerHeight() / 2
          marginLeft :  -@$el.outerWidth() / 2
      createDialog : ->    # 创建弹出层 @return { Object } 弹出层
        tit = @options.title
        iW = @options.width
        str = '<div class="zl-popup fade" tabindex="-1"><div class="zl-popup-dialog" style="width: ' + iW + 'px;"><div class="zl-popup-content"><div class="zl-popup-header"><button type="button" class="close Close">&times;</button><h4 class="zl-popup-title">' + tit + '</h4></div><div class="zl-popup-body"></div><div class="zl-popup-footer">' + (if @options.cancel then '<button type="button" class="btn btn-default Close">取消</button>' else '') + '<button type="button" class="btn btn-info ' + (if @options.cancel then '' else 'Close') + '">确定</button>' + '</div></div><!-- /.zl-popup-content --></div><!-- /.zl-popup-dialog --></div><!-- /.zl-popup -->'
        oBox = $(str)
        if @options.auto_render
          if @template
            oBox.find('.zl-popup-body').html @template
          else
            @$el.appendTo oBox.find('.zl-popup-body')
        oBox.appendTo 'body'
      open : ->
        data = @data or @model.data
        data.id and location.hash = data.id
        $('body').addClass 'zl-popup-open'
        @$el.show()
        setTimeout(
          => @$el.addClass('in').focus()
          0)
        # 自动关闭弹出层
        # 确认窗口已经打开
        @isOpen = yes
        @
      close : ->
        options = @options
        data = @data or @model.data
        # 创建对象引用
        ele = @$el
        # 修改hash值
        data.id and history.replaceState null, top.document.title , '#'
        # 隐藏弹出层
        $('body').removeClass 'zl-popup-open'
        ele.removeClass 'in'
        setTimeout(
          =>
            ele.hide()
            # 触发回调
            options.callback?.call @
          300)
        # 确认窗口关闭
        @isOpen = no
        @
      renderAgain : ->
        @$el.find('.zl-popup-body').html @template
        @
      # 更新options值
      updateOption : (key,val) ->
        if _.isString key
          @options[key] = val
        else if _.isObject key
          _.extend @options, key
        @
      # 以下是拖拽事件
      mouseDown : (ev) ->
        _this = @
        _disX = ev.pageX - @$el.children().offset().left
        _disY = ev.pageY - @$el.children().offset().top
        $(document).on 'mousemove', (ev) => @mouseMove ev
        $(document).on 'mouseup', @mouseUp;
        no
      mouseMove : (ev) ->
        iX = ev.pageX - _disX
        iY = ev.pageY - _disY
        @$el.children().offset
          left : iX
          top : iY
      mouseUp : -> $(document).off('mousemove').off('mouseup')
    # 城市位置浮层 继承于Popup
    class CityInterface extends Popup
      citytree = null
      # 版本记录
      @version = '1.3.1'
      # # 本地config可配置项信息，updateConfig调用，请勿修改
      @settings =
        success : '数据提交配置；此配置是一个function，将被调用于实例的getData方法内，参数为当前界面的所有选择城市数据'
        search : '{boolean}是否支持长列表搜索模式，未开放'
      _provinceMap = {}
      @create = -> new CityInterface arguments[0]
      # 构造函数
      constructor: (json)->
        if json and _.isObject json
          # 进行初始化
          @initialize json
        else
          console.error "CityInterface需要配置参数才能初始化！"
      # 浮层事件hash
      events:
        'click .zl-popup-footer .btn-info' : 'success'
        'click .tag' : 'rebuild'
        'click .zl-cc-del-btn' : 'discard'
        'click .zl-cc-code': 'codeSelect'
        'click .zl-cc-province': 'provinceSelect'
        'click .zl-cc-level': 'levelSelect'
        'click .zl-cc-country': 'countrySelect'
        'click .zl-cc-city': 'citySelect'
        'mouseenter .zl-cc-code' : 'delay'
        'mouseenter .zl-cc-province' : 'delay'
        'mouseenter .zl-cc-level' : 'delay'
        'mouseleave .list-group' : 'delay'
        # 'keyup .province_search': 'provinceSearch'
      # 列表模版映射
      # 已完成 !search待定
      liMap:
        'code': (da, merge) ->
          "<a href=\"javascript:;\" class=\"list-group-item zl-cc-code zl-cc-code-#{da.id} #{if merge and merge[da.id] then 'active' else ''}\" data-id=\"#{da.id}\">#{da.name}<b></b></a>"
        'country': (da, merge) ->
          "<a href=\"javascript:;\" class=\"list-group-item zl-cc-country #{if merge and merge.indexOf(da.addr) > -1 then 'active' else '' }\" data-id=\"#{da.addr}\" title=\"#{da.ename}\">#{da.name or da.ename}</a>"
        'province': (da, merge) ->
          "<a href=\"javascript:;\" class=\"list-group-item zl-cc-province zl-cc-province-#{da.id} #{if merge and merge[da.name] then 'active' else ''}\" data-id=\"#{da.id}\">#{da.name}<b></b></a>"
        'level': (da, merge) ->
          "<a href=\"javascript:;\" class=\"list-group-item zl-cc-level zl-cc-level-#{da.id} #{if merge and merge[da.id] then 'active' else '' }\" data-id=\"#{da.id}\">#{da.name}<b></b></a>"
        'city': (da, merge) ->
          "<a href=\"javascript:;\" class=\"list-group-item zl-cc-city #{if merge and merge.indexOf(da.name) > -1 then 'active' else '' }\" data-id=\"#{da.name}\">#{da.name}</a>"
        'search': (name) ->
          "<a href=\"javascript:;\"><input type=\"text\" class=\"list-group-item #{name}_search\" name=\"#{name}_search\" style=\"width:100px;height:22px;border:none;outline:none;margin-left: -5px; padding:0 5px;\" placeholder=\"输入检索字段\"></a>"
      # 初始化函数
      initialize: ->
        # attributes
        @__root__ = CityInterface
        # 更新本地配置
        @updateConfig arguments[0]
        @data =
          province: 0
          level: 0
          code: 0
        @mergeData = {}
        @record = []
        # 初始化浮层
        super {
          title : '城市选择'
          cancel : yes
          auto_render : no
        }
        @$ '.zl-popup-body'
          .attr 'id', 'Z-cityInterface'
            .html '<h3>已选择区域:</h3><div class="zl-city-ctn"></div><h3>区域选择列表:</h3><div class="zl-city-tree"></div>'
      # 更新本地config配置
      updateConfig : (sup) ->
        @config = {}
        # 更新本地config
        # for k in @__root__.settings
        #   if sup[k]
        #     @config[k] = sup[k]
        # 存储数据
        if sup.tree
          citytree = sup.tree or {}
          return delete sup.tree
        # if sup.url and _.isString sup.url
        $.getJSON sup.url or './citys.js', null, (res) => citytree = res unless res.no
      #
      # 初始化列表
      #
      initCityList : (json) ->
        # 只读属性处理
        @readonly = json.readonly
        @config.success = json.success
        # 数据处理
        if json.model
          if json.model.length is 0 and json.readonly
            # 数据为空并且为只读状态
            return yes
          @mergeData = @combine json.model
        if json.readonly
          @$('.zl-city-tree').addClass 'zl-city-tree-readonly'
        @$('.zl-city-tree').html @createDom citytree, @mergeData
        #
        @print().open()
        # 数据滞空
        @data =
          province: 0
          level: 0
          code: 0
        @
      #
      # 重建城市路径
      #
      rebuild : ->
        that = @oTarget
        json =
          code : that.data 'c'
          province : that.data 'p'
          level : that.data 'l'
          city : that.data 'ci'
        # render logic
        if json.code is @data.code
          # code相同，不重新渲染
          if json.code is 1
            if json.province is @data.province
              # province相同，不重新渲染
              if json.level isnt @data.level
                @data.level = json.level
                # level不同，进行渲染
                @levelChange().cityChange json.city
            else
              # province不同，重新渲染
              _.extend @data, json
              @provinceChange().levelChange().cityChange json.city
          else if json.code is 3
            @countryChange json.city
        else
          _.extend @data, json
          @codeChange()
          if json.code is 1
            # code不同，重新渲染
            return @provinceChange().levelChange().cityChange json.city
          if json.code is 3
            return @countryChange json.city
      #
      # 丢弃城市数据
      #
      discard: ->
        that = @oTarget.parent()
        json =
          code : that.data 'c'
          province : that.data 'p'
          level : that.data 'l'
        @updateMergeData( that.data( 'ci' ), json ).paving json
        that.remove()
        # console.log @mergeData
        if _.isEmpty @mergeData
          @$( '.zl-city-ctn' ).html '无已选择地区'
      #
      # 确认按钮事件
      #
      success : ->
        if @close().config.success
          @config.success @explode()
        else
          console.log @explode()
          alert '未设置回调函数，请在console处查看数据！'
      #
      # 延迟事件
      #
      delay : ->
        @iTimer and clearTimeout @iTimer
        tar = @oTarget
        if tar.is 'a'
          if @oTarget.hasClass 'zl-cc-code'
            cb = @codeChange.bind @
          else if @oTarget.hasClass 'zl-cc-province'
            cb = @provinceChange.bind @
          else if @oTarget.hasClass 'zl-cc-level'
            cb = @levelChange.bind @
          if cb
            @iTimer = setTimeout(
              -> cb tar
              250)
      #
      # 打印city tree 数据
      #
      print : ->
        str = ''
        del = if @readonly then '' else '<a class="zl-cc-del-btn" href="javascript:;">x</a>'
        _.each @explode(), (c) =>
          str += '<span class="tag" data-c="' + c.large_region_code + '" data-p="' + ( c.province_name or 0 ) + '" data-l="' + ( c.city_level or 0 ) + '" data-ci="' + ( c.city_name or c.country_name or '' ) + '"><span>' + @translate( c ) + '&nbsp;&nbsp;</span>' + del + '</span>'
        @$( '.zl-city-ctn' ).html str or '无已选择地区'
        @
      #
      #  翻译数据－》可读文本
      #
      translate: (json)->
        _json = {}
        str = ''
        switch json.large_region_code
          when 1
            _json
            str = '大陆'
            if json.province_name
              str = json.province_name
              if json.city_level
                str += [ 'v5', '一线', '二线', '三线', '四线', '五线' ][ json.city_level ]
                if json.city_name
                  str = json.city_name
          when 2
            str = '港澳台'
            if json.country_name
              str = citytree[2].countrys[json.country_name].name
          when 3
            str = '海外'
            if json.country_name
              str = citytree[3].countrys[json.country_name].name
        str
      #
      # 外部数据合并, { 云引擎专用 } 其他项目根据需要覆盖此函数！！！！
      #
      combine : (data)->
        json = {}
        if data
          # 修正省份数据
          # _.each data, (v,k) -> v.province_name = _provinceMap[v.province_name]
          map =
            '1' : (c) ->
              unless json['1']
                json['1'] = {}
              if c.province_name
                unless json['1'][ c.province_name ]
                  json['1'][ c.province_name ] = {}
                if c.city_level > 0
                  unless json['1'][ c.province_name ][ c.city_level ]
                    json['1'][ c.province_name ][ c.city_level ] = []
                  if c.city_name
                    json['1'][ c.province_name ][ c.city_level ].push c.city_name
            '2' : (c) ->
              json['2'] = [] unless json['2']
              json['2'].push c.country_name if c.country_name
            '3' : (c) ->
              json['3'] = [] unless json['3']
              json['3'].push c.country_name if c.country_name
          _.each data, (c) -> map[ c.large_region_code ]( c )
        else
          console.error 'combine方法出现错误: 参数不能为空'
          console.trace()
        json
      # 内部数据分解，对外输出数据
      explode: ->
        record = []
        add = ( c, p, l, ci ) ->
          map =
            "1" : ->
              large_region_code : +c
              province_name : p or undefined
              city_level : +l or undefined
              city_name : ci or undefined
            "2" : ->
              large_region_code : +c
              country_name : p or undefined
            "3" : ->
              large_region_code : +c
              country_name : p or undefined
          record.push map[ c ]() if c
        slice = Array::slice
        ( self = ( data ) ->
          args = slice.call arguments, 1
          if _.isArray data
            if data.length
              _.each data, (ci) -> add.apply @, args.concat ci
            else
              add.apply @, args
          else if _.isObject data
            if _.isEmpty data
              add.apply @, args
            else
              _.each data, ( opts, k ) -> self.apply @, [ opts ].concat( args ).concat [ k ]
          else
            console.error '递归函数出现错误，请检查mergeData数据正确性！'
        )( @mergeData )
        # console.log record
        record
      # 区域选择逻辑
      codeChange: (oT)->
        if oT
          oT = @oTarget = $ oT
          # if oT[0].className is 'B'
          id = +oT.attr 'data-id'
          # reset model data
          _.extend @data, { "province": '', "level": 0, "code": id }
        else
          if id = @data.code
            @oTarget = @$('.zl-cc-code').eq id - 1
        fn = ({
          "1": -> @render citytree[1]['provinces'], @mergeData[1]
          "2": -> @render citytree[2]['countrys'], @mergeData[2]
          "3": -> @render citytree[3]['countrys'], @mergeData[3]
          })[id]
        # console.log fn
        if fn
          fn.call @
          @$('.list-group').last().css 'top', @oTarget.position().top
        @
      # 切换省逻辑
      provinceChange: (oT)->
        if oT
          @oTarget = $ oT
          id = @oTarget.text()
          _.extend @data, { "province": id, "level": 0 }
        else
          if id = @data.province
            @oTarget = @$ '.zl-cc-province-' + citytree[1].provinces[id]['id']
            oP = @$ '.zl-city-tree'
            iT = @oTarget.position().top + @oTarget.height() - 10
            if iT < oP.scrollTop()
              oP.scrollTop iT
            else if iT > oP.scrollTop() + 500
              oP.scrollTop iT - 500
          else
            return @
        try
          if merge = @mergeData[1]
            if merge = merge[id]
              yes
          @render citytree[1]['provinces'][id]['levels'], merge, 'level'
          @$('.list-group').eq(2).css 'top', @oTarget.position().top
        catch e
          console.log e
        @
      # 切换城市级别逻辑
      levelChange: (oT)->
        if oT
          # 点击
          oT = @oTarget = $ oT
          @data.level = id = +oT.attr 'data-id'
          # console.log id, oT
        else
          # 联动
          if id = @data.level
            @oTarget = @$ '.zl-cc-level-' + id
          else
            return @
        try
          if merge = @mergeData[1]
            if merge = merge[@data.province]
              if merge = merge[id]
                yes
                # console.log @data
          @render citytree[1]['provinces'][@data.province]['levels'][id]['citys'], merge, 'city'
          @$('.list-group').eq(3).css 'top', @oTarget.position().top + 1 * @$('.list-group').eq(2).css('top').slice 0, -2
          # 删除对象存储
          delete @oTarget
        catch e
          console.log e
        @
      # 城市联动
      cityChange : (name)->
        oLast = @$('.list-group').last()
        iH = +oLast.css('top').slice 0, -2
        oTree = @$ '.zl-city-tree'
        oLast.find( '.active' ).each -> oTree.scrollTop( $(@).position().top + $(@).outerHeight() + iH - 510 ) if $(@).attr('data-id') is name
      #
      # 国家联动
      #
      countryChange : (name) -> @cityChange name
      # code区域确认选择
      codeSelect : -> @updateMergeData().paving().print()
      # 省份确认选择
      provinceSelect: -> @updateMergeData().paving().print()
      # 级别确认选择
      levelSelect: -> @updateMergeData().paving().print()
      # 国家确认选择
      countrySelect: -> @updateMergeData( @oTarget.attr('data-id') ).paving().print()
      # 城市确认选择
      citySelect: -> @updateMergeData( @oTarget.attr('data-id') ).paving().print()
      # 更新数据记录
      updateMergeData : (val, json)->
        path = json or @data
        merge = @mergeData
        fn = ({
          '1' : ( p, l) ->
            if p
              # code logic
              if not o = merge[1]
                o = merge[1] = {}
              if l
                # province logic
                if o[p]
                  o = o[p]
                else
                  o = o[p] = {}
                if val
                  # level logic
                  if o[l]
                    o = o[l]
                  else
                    o = o[l] = []
                  # city logic
                  i = o.indexOf val
                  if i is -1
                    o.push val
                  else
                    o.splice i, 1
                    if not o.length
                      delete merge[1][p][l]
                      if _.isEmpty merge[1][p]
                        delete merge[1][p]
                        if _.isEmpty merge[1]
                          delete merge[1]
                else
                  # level data togggle
                  if o[l] and o[l].length is 0
                    delete o[l]
                    if _.isEmpty o
                      delete merge[1][p]
                      if _.isEmpty merge[1]
                        delete merge[1]
                  else
                    o[l] = []
              else
                # province data togggle
                if o[p] and _.isEmpty o[p]
                  delete o[p]
                  if _.isEmpty o
                    delete merge[1]
                else
                  o[p] = {}
            else
              # code data togggle
              if merge[1] and _.isEmpty merge[1]
                delete merge[1]
              else
                merge[1] = {}
          '2' : ->
            if val
              if not o = merge[2]
                o = merge[2] = []
              i = o.indexOf val
              if i is -1
                o.push val
              else
                o.splice i, 1
                if not o.length
                  delete merge[2]
            else
              # code data togggle
              if merge[2] and _.isEmpty merge[2]
                delete merge[2]
              else
                merge[2] = []
          '3' : ->
            if val
              if not o = merge[3]
                o = merge[3] = []
              i = o.indexOf val
              if i is -1
                o.push val
              else
                o.splice i, 1
                if not o.length
                  delete merge[3]
            else
              # code data togggle
              if merge[3] and _.isEmpty merge[3]
                delete merge[3]
              else
                merge[3] = []
        })[path.code]
        fn and fn path.province, path.level
        @
      #
      # 铺设路径
      #
      paving : ->
        # 用户选择数据记录
        merge = @mergeData
        # 真实路径
        rpath = @data
        # 被删除路径
        path = arguments[0] or rpath
        # code logic
        if merge = merge[path.code]
          @$( '.zl-cc-code-' + path.code ).addClass 'active'
        else
          @$( '.zl-cc-code-' + path.code ).removeClass 'active'
        if path.code is rpath.code
          if path.code is 1
            # province logic
            if _.isEmpty merge
              @$( '.zl-cc-province, .zl-cc-level, .zl-cc-city' ).removeClass 'active'
            else
              if merge = merge[path.province]
                @$( '.zl-cc-province-' + citytree[1].provinces[path.province].id ).addClass 'active'
              else
                @$( '.zl-cc-province-' + citytree[1].provinces[path.province].id ).removeClass 'active'
              # level logic
              if path.province is rpath.province
                if _.isEmpty merge
                  @$( '.zl-cc-level,.zl-cc-city' ).removeClass 'active'
                else
                  if merge = merge[path.level]
                    @$( '.zl-cc-level-' + path.level ).addClass 'active'
                  else
                    @$( '.zl-cc-level-' + path.level ).removeClass 'active'
                  if path.level is rpath.level
                    # city logic
                    if _.isEmpty merge
                      @$( '.zl-cc-city' ).removeClass 'active'
                    else
                      @$( '.zl-cc-city' ).each ->
                        if merge.indexOf( $(@).attr('data-id') ) is -1
                          $(@).removeClass 'active'
                        else
                          $(@).addClass 'active'
          else if path.code is 2
            # city logic
            if _.isEmpty merge
              @$( '.zl-cc-country' ).removeClass 'active'
            else
              @$( '.zl-cc-country' ).each ->
                if merge.indexOf( $(@).attr('data-id') ) is -1
                  $(@).removeClass 'active'
                else
                  $(@).addClass 'active'
          else if path.code is 3
            # city logic
            if _.isEmpty merge
              @$( '.zl-cc-country' ).removeClass 'active'
            else
              @$( '.zl-cc-country' ).each ->
                if merge.indexOf( $(@).attr('data-id') ) is -1
                  $(@).removeClass 'active'
                else
                  $(@).addClass 'active'
        @
      #
      # 渲染页面
      #
      render: (data, merage)->
        @oTarget.addClass('hover').siblings().removeClass 'hover'
        # 移除dom
        obj = @oTarget.parent()
        while  obj.next().length
          obj.next().remove()
        # dom添加
        o = $ @createDom data, merage
        if o.find( '.zl-cc-country' ).length
          o.css 'width', 'auto'
        o.insertAfter obj
        @
      #
      # 创建
      #
      createDom: ( data, merData ) ->
        str = '<div class="list-group">'
        type = ''
        liMap = @liMap
        # 过多的数据加入检索框
        # if name and data.length > 10
          # str += liMap['search'].call @, name
        # 遍历数据整合dom
        _.each data, (da) =>
          fn = liMap[ da.type or 'city' ]
          if _.isFunction fn
            str += fn.call @, da, merData
        # console.log @model
        str += '</div>'
)( (fn) ->
  if typeof CitySelection isnt 'undefined' and CitySelection.author is 'leozhao'
    console.error 'CitySelection已经存在，请勿重复引入！'
  else
    if typeof define is 'function'
      if define.amd
        return define 'city-selection', ['jquery'], fn
      if define.cmd
        return define 'city-selection', ['jquery'], (require, exports, module) ->
          $ = require 'jquery'
          fn $
    if typeof $ is 'function'
      window.CitySelection = fn $
    else
      console.error 'jQuery没有找到，CitySelection无法进行初始化！请确认文件引入和引入顺序！'
)
