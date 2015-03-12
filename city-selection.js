var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(factory) {
  return factory(function($) {
    var CitySelection, Popup, View, css, oStyle, slice, _;
    css = '/*zl-popup stylesheet*/.zl-popup *{ -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box; font-size:12px; line-height:24px;} .fade { opacity: 0; -webkit-transition: opacity .2s linear; transition: opacity .2s linear; }.zl-popup-open {overflow: hidden;}.zl-popup.in {opacity: 1;background: rgba(0, 0, 0, 0.4);}.zl-popup {position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 1001;display: none;overflow: auto;overflow-y: scroll;outline: none;}.zl-popup-dialog {width: 600px;margin: 30px auto;position: relative;z-index: 1002;}.zl-popup-content {position: relative;background-color: #fff;border: 1px solid rgba(0, 0, 0, 0.2);outline: 0;background-clip: padding-box;-webkit-box-shadow:0 5px 15px rgba(0, 0, 0, 0.5);box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);}.zl-popup-header {min-height: 16px;padding: 6px 15px;border-bottom: 1px solid #e5e5e5;}.zl-popup-header button.close {float: right;font-size: 21px;font-weight: bold;line-height: 1;color: #000;text-shadow: 0 1px 0 #fff;opacity: .2;filter: alphaopacity=20);padding: 0;cursor: pointer;background: transparent;border: 0;-webkit-appearance: none;}.zl-popup-title {margin: 0;line-height: 24px;font-size: 14px;}.zl-popup-header .close {margin-top: -2px;}.zl-popup-body {position: relative;padding: 8px 20px;}.zl-popup-footer {padding: 6px 20px;text-align: right;border-top: 1px solid #e5e5e5;}.zl-popup-footer .btn + .btn {margin-bottom: 0;margin-left: 5px;}.zl-popup.fade > div {-webkit-transform: translate(0, -25%);-ms-transform: translate(0, -25%);transform: translate(0, -25%);-webkit-transition: -webkittransform 0.3s ease-out;-moz-transition: -moz-transform 0.3s ease-out;-o-transition: -o-transform 0.3s ease-out;transition: transform 0.3s ease-out;}.zl-popup.in > div {-webkit-transform: translate(0, 0);-ms-transform: translate(0, 0);transform: translate(0, 0);}/* city list stylesheet */.list-group {margin-bottom: 20px;padding-left: 0;position: relative;}.list-group-item {position: relative;display: block;padding: 3px 15px;margin-bottom: -1px;background-color: #ffffff;border: 1px solid #dddddd;text-decoration:none;font-size:12px;line-height:24px;}.list-group-item:first-child {border-top-right-radius: 4px;border-top-left-radius: 4px;}.list-group-item:last-child {margin-bottom: 0;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;}.list-group-item > .badge {float: right;}.list-group-item > .badge + .badge {margin-right: 5px;}a.list-group-item {color: #555555;}a.list-group-item .list-group-item-heading {color: #333333;}a.list-group-item.hover,a.list-group-item:hover {text-decoration: none;background-color: #f5f5f5;}a.list-group-item.active,a.list-group-item.active:hover {z-index: 2;color: #ffffff;background-color: #428bca;border-color: #ffffff;}#Z-cityInterface h3 {background-color: #edf7ff;color: #38599E;padding: 5px 10px;margin:0;}#Z-cityInterface .zl-city-tree {position: relative;padding: 10px 0;overflow-y: scroll;}#Z-cityInterface .zl-city-tree:before,#Z-cityInterface .zl-city-tree:after {content: " ";/* 1 */display: table;/* 2 */}#Z-cityInterface .zl-city-tree:after {clear: both;}#Z-cityInterface .zl-city-tree.zl-city-tree-readonly:before {content: " ";position: absolute;top: 0;left: 0;width: 100%;height: 500px;z-index: 1002;}#Z-cityInterface .zl-city-tree a.list-group-item b {width: 0;height: 0;border-width: 5px 0 5px 6px;border-color: transparent transparent transparent#428bca;border-style: solid;position: absolute;right: 10px;top: 9px;}#Z-cityInterface .zl-city-tree a.list-group-item.active b {border-left-color: #fff;}#Z-cityInterface .zl-city-tree a.list-group-item.hover b,#Z-cityInterface .zl-city-tree a.list-group-item.hover.active b {width: 10px;height: 10px;border: none;background: #2fe2bf;border-radius: 50%;}#Z-cityInterface .zl-city-tree > div {float: left;max-height: 500px;width: 25%;}#Z-cityInterface .zl-city-ctn {padding: 10px 0 0 10px;min-height: 44px;}#Z-cityInterface .zl-city-ctn > span.tag {border-radius: 4px;background: #428bca;color: #ffffff;cursor: pointer;margin: 0 3px 3px 0;overflow: hidden;padding:2px 8px 2px 15px;position: relative;vertical-align: middle;display: inline-block;zoom: 1;-webkit-transition: 0.14s linear;transition: 0.14s linear;}#Z-cityInterface .zl-city-ctn > span.tag > a {color: white;cursor: pointer;font-size: 12px;opacity: 0;padding: 2px 7px 0 0;position: absolute;bottom: 0;right:0;top: 0;text-align: right;text-decoration: none;z-index: 2;display: none\9;}#Z-cityInterface .zl-city-ctn > span.tag:hover {background-color: #3498db;padding-left: 8px;padding-right: 15px;}#Z-cityInterface .zl-city-ctn > span.tag:hover > a {color: white;opacity: 1;}.zl-popup-footer .btn {display: inline-block;margin-bottom: 0;font-weight: normal;text-align: center;vertical-align: middle;cursor: pointer;padding: 0 10px;font-size: 12px;line-height: 24px;border: none;outline: none;background: #ccc;color: white;text-decoration: none;-webkit-transition: 0.25s;transition: 0.25s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;-o-user-select: none;user-select: none;}.zl-popup-footer .btn.btn-info {background-color: #2980b9;}.zl-popup-footer .btn.btn-info:hover,.zl-popup-footer .btn.btn-info:focus {background-color: #3498db;}';
    oStyle = document.createElement('style');
    oStyle.type = "text/css";
    oStyle.rel = "stylesheet";
    if (oStyle.styleSheet) {
      oStyle.styleSheet.cssText = h;
    } else {
      oStyle.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(oStyle);
    slice = Array.prototype.slice;
    _ = {
      isString: function(str) {
        return toString.call(str) === '[object String]';
      },
      isNumber: function(num) {
        return toString.call(num) === '[object Number]';
      },
      isArray: function(arr) {
        return toString.call(arr) === '[object Array]';
      },
      isFunction: function(fn) {
        return toString.call(fn) === '[object Function]';
      },
      isBoolean: function(bool) {
        return toString.call(bool) === '[object Boolean]';
      },
      isObject: function(obj) {
        return obj === Object(obj);
      },
      isEmpty: function(obj) {
        var key;
        if (obj === null) {
          return true;
        }
        if (this.isArray(obj) || this.isString(obj)) {
          return obj.length === 0;
        }
        for (key in obj) {
          if (key in obj) {
            return false;
          }
        }
        return true;
      },
      isDefined: function() {
        return typeof arguments[0] !== 'undefined';
      },
      keys: function(obj) {
        var keys;
        if (Object.keys) {
          return Object.keys(obj);
        }
        if (obj !== Object(obj)) {
          throw new TypeError('Invalid object');
        }
        keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);;
        return keys;
      },
      each: function(obj, iterator, context) {
        if (obj === null) {
          return;
        }
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === {}) return;
          };
        } else {
          var keys = _.keys(obj);
          for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === {}) return;
          };
        }
        return true;
      },
      extend: function(obj) {
        _.each(slice.call(arguments, 1), function(source) {
          var prop, _results;
          if (source) {
            _results = [];
            for (prop in source) {
              _results.push(obj[prop] = source[prop]);
            }
            return _results;
          }
        });
        return obj;
      },
      without: function(array) {
        return _.difference(array, slice.call(arguments, 1));
      },
      difference: function(array) {
        var rest;
        rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) {
          return !_.contains(rest, value);
        });
      },
      filter: function() {
        return function(obj, iterator, context) {
          var results;
          results = [];
          if (obj === null) {
            return results;
          }
          if (nativeFilter && obj.filter === nativeFilter) {
            return obj.filter(iterator, context);
          }
          _.each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
              return results.push(value);
            }
          });
          return results;
        };
      }
    };
    View = (function() {
      function View() {}

      View.prototype.initialize = function() {
        this.events && this._bindEvents();
        return this.listens && this._bindListens();
      };

      View.prototype._bindEvents = function() {
        return _.each(this.events, this._bind, this);
      };

      View.prototype._bindListens = function() {
        if (this.model) {
          return this.model.events = this.listens;
        }
      };

      View.prototype._bind = function(value, key) {
        var arr, _this;
        _this = this;
        if (_.isFunction(value)) {
          arr = key.split(' ');
          if (arr.length === 1) {
            return this.$el.on(arr[0], function(ev) {
              value.call(this, ev, _this);
              ev.stopPropagation();
              return false;
            });
          } else {
            return this.$el.on(arr.shift(), (arr.length === 1 ? arr[0] : arr.join(' ')), function(ev) {
              value.call(this, ev, _this);
              ev.stopPropagation();
              return false;
            });
          }
        } else if (this[value]) {
          arr = key.split(' ');
          if (arr.length === 1) {
            return this.$el.on(arr[0], function(ev) {
              _this.oTarget = $(this);
              ev.stopPropagation();
              return _this[value]();
            });
          } else {
            return this.$el.on(arr.shift(), (arr.length === 1 ? arr[0] : arr.join(' ')), function(ev) {
              _this.oTarget = $(this);
              ev.stopPropagation();
              return _this[value]();
            });
          }
        } else {
          return console.warn(value + '方法不存在');
        }
      };

      View.prototype.$ = function() {
        return this.$el.find(arguments[0]);
      };

      return View;

    })();
    Popup = (function(_super) {
      var _disX, _disY;

      __extends(Popup, _super);

      _disX = 0;

      _disY = 0;

      function Popup() {
        this.initialize.apply(this, arguments);
      }

      Popup.prototype.initialize = function(json) {
        this.template = json.tmpl;
        this.options = this.getOptions(json);
        this.isOpen = false;
        this.$el = this.createDialog();
        if (this.options.drag) {
          this.$el.find('.zl-popup-title').css('cursor', 'move').on('mousedown', (function(_this) {
            return function(ev) {
              return _this.mouseDown(ev);
            };
          })(this));
        }
        if (this.options.lock) {
          this.$el.on('keyup', (function(_this) {
            return function(ev) {
              if (ev.keyCode === 27) {
                return _this.close();
              }
            };
          })(this));
        }
        this.$el.on('click', '.Close', (function(_this) {
          return function() {
            return _this.close();
          };
        })(this));
        return Popup.__super__.initialize.apply(this, arguments);
      };

      Popup.prototype.getOptions = function(json) {
        var defaults;
        defaults = {
          drag: true,
          lock: true,
          callback: null,
          success: null,
          title: '这是一个弹层',
          cancel: false,
          width: 600
        };
        if (json != null) {
          delete json.data;
          _.extend(defaults, json);
        }
        return defaults;
      };

      Popup.prototype.setPosition = function(elem) {
        return elem.css({
          marginTop: -this.$el.outerHeight() / 2,
          marginLeft: -this.$el.outerWidth() / 2
        });
      };

      Popup.prototype.createDialog = function() {
        var iW, oBox, str, tit;
        tit = this.options.title;
        iW = this.options.width;
        str = '<div class="zl-popup fade" tabindex="-1"><div class="zl-popup-dialog" style="width: ' + iW + 'px;"><div class="zl-popup-content"><div class="zl-popup-header"><button type="button" class="close Close">&times;</button><h4 class="zl-popup-title">' + tit + '</h4></div><div class="zl-popup-body"></div><div class="zl-popup-footer">' + (this.options.cancel ? '<button type="button" class="btn btn-default Close">取消</button>' : '') + '<button type="button" class="btn btn-info ' + (this.options.cancel ? '' : 'Close') + '">确定</button>' + '</div></div><!-- /.zl-popup-content --></div><!-- /.zl-popup-dialog --></div><!-- /.zl-popup -->';
        oBox = $(str);
        if (this.template) {
          oBox.find('.zl-popup-body').html(this.template);
        } else {
          this.$el.appendTo(oBox.find('.zl-popup-body'));
        }
        return oBox.appendTo('body');
      };

      Popup.prototype.open = function() {
        var data;
        data = this.data || this.model.data;
        data.id && (location.hash = data.id);
        $('body').addClass('zl-popup-open');
        this.$el.show();
        setTimeout((function(_this) {
          return function() {
            return _this.$el.addClass('in').focus();
          };
        })(this), 0);
        this.isOpen = true;
        return this;
      };

      Popup.prototype.close = function() {
        var data, ele, options;
        options = this.options;
        data = this.data || this.model.data;
        ele = this.$el;
        data.id && history.replaceState(null, top.document.title, '#');
        $('body').removeClass('zl-popup-open');
        ele.removeClass('in');
        setTimeout((function(_this) {
          return function() {
            var _ref;
            ele.hide();
            return (_ref = options.callback) != null ? _ref.call(_this) : void 0;
          };
        })(this), 300);
        this.isOpen = false;
        return this;
      };

      Popup.prototype.renderAgain = function() {
        this.$el.find('.zl-popup-body').html(this.template);
        return this;
      };

      Popup.prototype.updateOption = function(key, val) {
        if (_.isString(key)) {
          this.options[key] = val;
        } else if (_.isObject(key)) {
          _.extend(this.options, key);
        }
        return this;
      };

      Popup.prototype.mouseDown = function(ev) {
        var _this;
        _this = this;
        _disX = ev.pageX - this.$el.children().offset().left;
        _disY = ev.pageY - this.$el.children().offset().top;
        $(document).on('mousemove', (function(_this) {
          return function(ev) {
            return _this.mouseMove(ev);
          };
        })(this));
        $(document).on('mouseup', this.mouseUp);
        return false;
      };

      Popup.prototype.mouseMove = function(ev) {
        var iX, iY;
        iX = ev.pageX - _disX;
        iY = ev.pageY - _disY;
        return this.$el.children().offset({
          left: iX,
          top: iY
        });
      };

      Popup.prototype.mouseUp = function() {
        return $(document).off('mousemove').off('mouseup');
      };

      return Popup;

    })(View);
    return CitySelection = (function(_super) {
      var iTimer, _dataTree, _provinceMap;

      __extends(CitySelection, _super);

      _dataTree = {};

      _provinceMap = {};

      iTimer = null;

      CitySelection.author = 'leozhao';

      CitySelection.version = '1.2.0';

      CitySelection.settings = {
        style: 'default',
        success: '数据提交配置；此配置是一个function，将被调用于实例的getData方法内，参数为当前界面的所有选择城市数据',
        search: '{boolean}是否支持长列表搜索模式，未开放',
        debug: '{boolean}是否记录log，未开放'
      };

      CitySelection.create = function(json) {
        return new CitySelection(json);
      };

      function CitySelection(json) {
        if (json && _.isObject(json)) {
          this.updateConfig(json);
          this.initialize(json);
        } else {
          console.error("CitySelection需要配置参数才能初始化！");
        }
      }

      CitySelection.prototype.events = {
        'click .zl-popup-footer .btn-info': 'success',
        'click .tag': 'showPaving',
        'click .zl-cc-del-btn': 'kick',
        'click .zl-cc-code': 'codeSelect',
        'click .zl-cc-province': 'provinceSelect',
        'click .zl-cc-level': 'levelSelect',
        'click .zl-cc-country': 'countrySelect',
        'click .zl-cc-city': 'citySelect',
        'mouseenter .zl-cc-code': function(ev, _this) {
          iTimer && clearTimeout(iTimer);
          return iTimer = setTimeout(function() {
            return _this.codeChange(ev.target);
          }, 250);
        },
        'mouseenter .zl-cc-province': function(ev, _this) {
          iTimer && clearTimeout(iTimer);
          return iTimer = setTimeout(function() {
            return _this.provinceChange(ev.target);
          }, 250);
        },
        'mouseenter .zl-cc-level': function(ev, _this) {
          iTimer && clearTimeout(iTimer);
          return iTimer = setTimeout(function() {
            return _this.levelChange(ev.target);
          }, 250);
        },
        'mouseleave .list-group': function() {
          return iTimer && clearTimeout(iTimer);
        }
      };

      CitySelection.prototype.liMap = {
        'code': function(da, merge) {
          return '<a href="javascript:;" class="list-group-item zl-cc-code zl-cc-code-' + da.id + (merge && merge[da.id] ? ' active' : '') + '" data-id="' + da.id + '">' + da.name + '<b></b></a>';
        },
        'country': function(da, merge) {
          var dad;
          dad = da.name || da.ename;
          return '<a href="javascript:;" class="list-group-item zl-cc-country' + (merge && merge.indexOf(dad) > -1 ? ' active' : '') + '" title="' + da.ename + '">' + dad + '</a>';
        },
        'province': function(da, merge) {
          return '<a href="javascript:;" class="list-group-item zl-cc-province zl-cc-province-' + da.id + (merge && merge[da.id] ? ' active' : '') + '" data-id="' + da.id + '">' + da.name + '<b></b></a>';
        },
        'level': function(da, merge) {
          return '<a href="javascript:;" class="list-group-item zl-cc-level zl-cc-level-' + da.id + (merge && merge[da.id] ? ' active' : '') + '" data-id="' + da.id + '">' + da.name + '<b></b></a>';
        },
        'city': function(da, merge) {
          return '<a href="javascript:;" class="list-group-item zl-cc-city' + (merge && merge.indexOf(da) > -1 ? ' active' : '') + '" >' + da + '</a>';
        },
        'search': function(name) {
          return '<a href="javascript:;"><input type="text" class="list-group-item ' + name + '_search" name="' + name + '_search" style="width:100px;height:22px;border:none;outline:none;margin-left: -5px; padding:0 5px;" placeholder="输入检索字段"></a>';
        }
      };

      CitySelection.prototype.initialize = function() {
        this.nodes = [];
        this.data = {
          province: 0,
          level: 0,
          code: 0
        };
        this.mergeData = {};
        this.__root__ = CitySelection;
        this.record = [];
        CitySelection.__super__.initialize.call(this, {
          title: '城市选择',
          tmpl: '<h3>已选择区域:</h3><div class="zl-city-ctn"></div><h3>区域选择列表:</h3><div class="zl-city-tree"></div>',
          cancel: true
        });
        return this.$el.attr('id', 'Z-cityInterface');
      };

      CitySelection.prototype.updateConfig = function(sup) {
        var k, _i, _len, _ref;
        this.config = {};
        _ref = CitySelection.settings;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          k = _ref[_i];
          if (sup[k]) {
            this.config[k] = sup[k];
          }
        }
        if (sup.tree) {
          _dataTree = sup.tree || {};
          _provinceMap = (function() {
            var json;
            json = {};
            _.each(sup.tree[1]['provinces'], function(v, k) {
              return json[v.name] = k;
            });
            return json;
          })();
          return delete sup.tree;
        }
      };

      CitySelection.prototype.initCityList = function(model, bool, fn) {
        if (_.isBoolean(bool)) {
          this.readonly = bool;
          if (fn) {
            this.config.success = fn;
          }
        } else if (_.isFunction(bool)) {
          this.readonly = false;
          this.config.success = bool;
        }
        if (model) {
          if (model.length === 0 && this.readonly) {
            return true;
          }
          this.mergeData = this.combine(model);
        }
        if (this.readonly) {
          this.$('.zl-city-tree').addClass('zl-city-tree-readonly');
        }
        this.$('.zl-city-tree').html(this.createDom(_dataTree, this.mergeData));
        this.print().open();
        return this;
      };

      CitySelection.prototype.showPaving = function() {
        var json;
        json = {
          code: this.oTarget.data('c'),
          province: this.oTarget.data('p'),
          level: this.oTarget.data('l'),
          city: this.oTarget.data('ci')
        };
        if (json.code === this.data.code) {
          if (json.code === 1) {
            if (json.province === this.data.province) {
              if (json.level !== this.data.level) {
                this.data.level = json.level;
                return this.levelChange().cityChange(json.city);
              }
            } else {
              _.extend(this.data, json);
              return this.provinceChange().levelChange().cityChange(json.city);
            }
          } else if (json.code === 3) {
            return this.countryChange(json.city);
          }
        } else {
          _.extend(this.data, json);
          this.codeChange();
          if (json.code === 1) {
            return this.provinceChange().levelChange().cityChange(json.city);
          } else if (json.code === 3) {
            return this.countryChange(json.city);
          }
        }
      };

      CitySelection.prototype.kick = function(i) {
        var json, that;
        that = this.oTarget.parent();
        json = {
          code: that.data('c'),
          province: that.data('p'),
          level: that.data('l')
        };
        this.updateMergeData(that.data('ci'), json);
        that.remove();
        this.paving(json);
        if (_.isEmpty(this.mergeData)) {
          return this.$('.zl-city-ctn').html('无已选择地区');
        }
      };

      CitySelection.prototype.success = function() {
        if (this.close().config.success) {
          return this.config.success(this.explode());
        } else {
          console.log('选择的数据结果：', this.explode());
          return alert('未设置回调方法，数据已打印在console！');
        }
      };

      CitySelection.prototype.print = function() {
        var del, str;
        str = '';
        del = this.readonly ? '' : '<a class="zl-cc-del-btn" href="javascript:;">x</a>';
        _.each(this.explode(), (function(_this) {
          return function(c) {
            return str += '<span class="tag" data-c="' + c.large_region_code + '" data-p="' + (c.province_name || 0) + '" data-l="' + (c.city_level || 0) + '" data-ci="' + (c.city_name || c.country_name || '') + '"><span>' + _this.translate(c) + '&nbsp;&nbsp;</span>' + del + '</span>';
          };
        })(this));
        this.$('.zl-city-ctn').html(str || '无已选择地区');
        return this;
      };

      CitySelection.prototype.translate = function(json) {
        var str, _json;
        _json = {};
        str = '';
        if (isNaN(json.province_name)) {
          json.province_name = _provinceMap[json.province_name];
        }
        switch (json.large_region_code) {
          case 1:
            _json;
            str = '大陆';
            if (json.province_name) {
              str = _dataTree[1]['provinces'][json.province_name].name;
              if (json.city_level) {
                str += [0, '一线', '二线', '三线', '四线', '五线'][json.city_level];
              }
            }
            break;
          case 2:
            str = '港澳台';
            break;
          case 3:
            str = '海外';
            if (json.country_name) {
              str = json.country_name;
            }
        }
        if (json.city_name) {
          str = json.city_name;
        }
        return str;
      };

      CitySelection.prototype.combine = function(arr) {
        var json, map;
        json = {};
        if (arr) {
          _.each(arr, function(v, k) {
            if (isNaN(v.province_name)) {
              return v.province_name = _provinceMap[v.province_name];
            }
          });
          map = {
            '1': function(c) {
              if (!json['1']) {
                json['1'] = {};
              }
              if (c.province_name > 0) {
                if (!json['1'][c.province_name]) {
                  json['1'][c.province_name] = {};
                }
                if (c.city_level > 0) {
                  if (!json['1'][c.province_name][c.city_level]) {
                    json['1'][c.province_name][c.city_level] = [];
                  }
                  if (c.city_name) {
                    return json['1'][c.province_name][c.city_level].push(c.city_name);
                  }
                }
              }
            },
            '2': function(c) {
              if (!json['2']) {
                json['2'] = [];
              }
              if (c.city_name) {
                return json['2'].push(c.city_name);
              }
            },
            '3': function(c) {
              if (!json['3']) {
                json['3'] = [];
              }
              if (c.country_name) {
                return json['3'].push(c.country_name);
              }
            }
          };
          _.each(arr, function(c) {
            return map[c.large_region_code](c);
          });
        } else {
          console.error('combine方法出现错误: 参数不能为空');
          console.trace();
        }
        return json;
      };

      CitySelection.prototype.explode = function() {
        var add, record, self;
        record = [];
        add = function(c, p, l, ci) {
          var map;
          map = {
            "1": function() {
              return {
                large_region_code: +c,
                province_name: +p || 0,
                city_level: +l || 0,
                city_name: ci || ''
              };
            },
            "2": function() {
              return {
                large_region_code: +c,
                city_name: p || ''
              };
            },
            "3": function() {
              return {
                large_region_code: +c,
                country_name: p || ''
              };
            }
          };
          return c && record.push(map[c]());
        };
        slice = Array.prototype.slice;
        (self = function(data) {
          var args;
          args = slice.call(arguments, 1);
          if (_.isArray(data)) {
            if (data.length) {
              return _.each(data, function(ci) {
                return add.apply(this, args.concat(ci));
              });
            } else {
              return add.apply(this, args);
            }
          } else if (_.isObject(data)) {
            if (_.isEmpty(data)) {
              return add.apply(this, args);
            } else {
              return _.each(data, function(opts, k) {
                return self.apply(this, [opts].concat(args).concat([k]));
              });
            }
          } else {
            return console.error('递归函数出现错误，请检查mergeData数据正确性！');
          }
        })(this.mergeData);
        return record;
      };

      CitySelection.prototype.codeChange = function(oT) {
        var fn, id;
        if (oT) {
          oT = this.oTarget = $(oT);
          id = +oT.attr('data-id');
          _.extend(this.data, {
            "province": 0,
            "level": 0,
            "code": id
          });
        } else {
          if (id = this.data.code) {
            this.oTarget = this.$('.zl-cc-code').eq(id - 1);
          }
        }
        fn = {
          "1": function() {
            return this.render(_dataTree[1]['provinces'], this.mergeData[1], 'province');
          },
          "2": function() {
            return this.render(_dataTree[2]['citys'], this.mergeData[2], 'city');
          },
          "3": function() {
            return this.render(_dataTree[3]['countrys'], this.mergeData[3], 'country');
          }
        }[id];
        if (fn) {
          fn.call(this);
          this.$('.list-group').eq(1).css('top', this.oTarget.position().top);
        }
        return this;
      };

      CitySelection.prototype.provinceChange = function(oT) {
        var e, iT, id, merge, oP;
        if (oT) {
          oT = this.oTarget = $(oT);
          id = +oT.attr('data-id');
          _.extend(this.data, {
            "province": id,
            "level": 0
          });
        } else {
          if (id = this.data.province) {
            this.oTarget = this.$('.zl-cc-province-' + id);
            oP = this.$('.zl-city-tree');
            iT = this.oTarget.position().top + this.oTarget.height() - 10;
            if (iT < oP.scrollTop()) {
              oP.scrollTop(iT);
            } else if (iT > oP.scrollTop() + 500) {
              oP.scrollTop(iT - 500);
            }
          } else {
            return this;
          }
        }
        try {
          if (merge = this.mergeData[1]) {
            if (merge = merge[id]) {
              true;
            }
          }
          this.render(_dataTree[1]['provinces'][id]['levels'], merge, 'level');
          this.$('.list-group').eq(2).css('top', this.oTarget.position().top);
        } catch (_error) {
          e = _error;
          console.log(e);
        }
        return this;
      };

      CitySelection.prototype.levelChange = function(oT) {
        var e, id, merge;
        if (oT) {
          oT = this.oTarget = $(oT);
          this.data.level = id = +oT.attr('data-id');
        } else {
          if (id = this.data.level) {
            this.oTarget = this.$('.zl-cc-level-' + id);
          } else {
            return this;
          }
        }
        try {
          if (merge = this.mergeData[1]) {
            if (merge = merge[this.data.province]) {
              if (merge = merge[id]) {
                true;
              }
            }
          }
          this.render(_dataTree[1]['provinces'][this.data.province]['levels'][id]['citys'], merge, 'city');
          this.$('.list-group').eq(3).css('top', this.oTarget.position().top + 1 * this.$('.list-group').eq(2).css('top').slice(0, -2));
        } catch (_error) {
          e = _error;
          console.log(e);
        }
        return this;
      };

      CitySelection.prototype.cityChange = function(name) {
        var iH, oLast, oTree;
        oLast = this.$('.list-group').last();
        iH = +oLast.css('top').slice(0, -2);
        oTree = this.$('.zl-city-tree');
        return oLast.find('.active').each(function() {
          if ($(this).html() === name) {
            iH = $(this).position().top + $(this).outerHeight() + iH - 510;
            return oTree.scrollTop(iH < 0 ? 0 : iH);
          }
        });
      };

      CitySelection.prototype.countryChange = function(name) {
        return this.cityChange(name);
      };

      CitySelection.prototype.codeSelect = function() {
        return this.updateMergeData().paving().print();
      };

      CitySelection.prototype.provinceSelect = function() {
        return this.updateMergeData().paving().print();
      };

      CitySelection.prototype.levelSelect = function() {
        return this.updateMergeData().paving().print();
      };

      CitySelection.prototype.countrySelect = function() {
        return this.updateMergeData(this.oTarget.text()).paving().print();
      };

      CitySelection.prototype.citySelect = function() {
        return this.updateMergeData(this.oTarget.text()).paving().print();
      };

      CitySelection.prototype.updateMergeData = function(val, json) {
        var fn, merge, path;
        path = json || this.data;
        merge = this.mergeData;
        fn = {
          '1': function(p, l) {
            var i, o;
            if (p) {
              if (!(o = merge[1])) {
                o = merge[1] = {};
              }
              if (l) {
                if (o[p]) {
                  o = o[p];
                } else {
                  o = o[p] = {};
                }
                if (val) {
                  if (o[l]) {
                    o = o[l];
                  } else {
                    o = o[l] = [];
                  }
                  i = o.indexOf(val);
                  if (i === -1) {
                    return o.push(val);
                  } else {
                    o.splice(i, 1);
                    if (!o.length) {
                      delete merge[1][p][l];
                      if (_.isEmpty(merge[1][p])) {
                        delete merge[1][p];
                        if (_.isEmpty(merge[1])) {
                          return delete merge[1];
                        }
                      }
                    }
                  }
                } else {
                  if (o[l] && o[l].length === 0) {
                    delete o[l];
                    if (_.isEmpty(o)) {
                      delete merge[1][p];
                      if (_.isEmpty(merge[1])) {
                        return delete merge[1];
                      }
                    }
                  } else {
                    return o[l] = [];
                  }
                }
              } else {
                if (o[p] && _.isEmpty(o[p])) {
                  delete o[p];
                  if (_.isEmpty(o)) {
                    return delete merge[1];
                  }
                } else {
                  return o[p] = {};
                }
              }
            } else {
              if (merge[1] && _.isEmpty(merge[1])) {
                return delete merge[1];
              } else {
                return merge[1] = {};
              }
            }
          },
          '2': function() {
            var i, o;
            if (val) {
              if (!(o = merge[2])) {
                o = merge[2] = [];
              }
              i = o.indexOf(val);
              if (i === -1) {
                return o.push(val);
              } else {
                o.splice(i, 1);
                if (!o.length) {
                  return delete merge[2];
                }
              }
            } else {
              if (merge[2] && _.isEmpty(merge[2])) {
                return delete merge[2];
              } else {
                return merge[2] = [];
              }
            }
          },
          '3': function() {
            var i, o;
            if (val) {
              if (!(o = merge[3])) {
                o = merge[3] = [];
              }
              i = o.indexOf(val);
              if (i === -1) {
                return o.push(val);
              } else {
                o.splice(i, 1);
                if (!o.length) {
                  return delete merge[3];
                }
              }
            } else {
              if (merge[3] && _.isEmpty(merge[3])) {
                return delete merge[3];
              } else {
                return merge[3] = [];
              }
            }
          }
        }[path.code];
        fn && fn(path.province, path.level);
        return this;
      };

      CitySelection.prototype.paving = function() {
        var merge, path, rpath;
        merge = this.mergeData;
        rpath = this.data;
        path = arguments[0] || rpath;
        if (merge = merge[path.code]) {
          this.$('.zl-cc-code-' + path.code).addClass('active');
        } else {
          this.$('.zl-cc-code-' + path.code).removeClass('active');
        }
        if (path.code === rpath.code) {
          if (path.code === 1) {
            if (_.isEmpty(merge)) {
              this.$('.zl-cc-province, .zl-cc-level, .zl-cc-city').removeClass('active');
            } else {
              if (merge = merge[path.province]) {
                this.$('.zl-cc-province-' + path.province).addClass('active');
              } else {
                this.$('.zl-cc-province-' + path.province).removeClass('active');
              }
              if (path.province === rpath.province) {
                if (_.isEmpty(merge)) {
                  this.$('.zl-cc-level,.zl-cc-city').removeClass('active');
                } else {
                  if (merge = merge[path.level]) {
                    this.$('.zl-cc-level-' + path.level).addClass('active');
                  } else {
                    this.$('.zl-cc-level-' + path.level).removeClass('active');
                  }
                  if (path.level === rpath.level) {
                    if (_.isEmpty(merge)) {
                      this.$('.zl-cc-city').removeClass('active');
                    } else {
                      this.$('.zl-cc-city').each(function() {
                        if (merge.indexOf($(this).text()) === -1) {
                          return $(this).removeClass('active');
                        } else {
                          return $(this).addClass('active');
                        }
                      });
                    }
                  }
                }
              }
            }
          } else if (path.code === 2) {
            if (_.isEmpty(merge)) {
              this.$('.zl-cc-city').removeClass('active');
            } else {
              this.$('.zl-cc-city').each(function() {
                if (merge.indexOf($(this).text()) === -1) {
                  return $(this).removeClass('active');
                } else {
                  return $(this).addClass('active');
                }
              });
            }
          } else if (path.code === 3) {
            if (_.isEmpty(merge)) {
              this.$('.zl-cc-country').removeClass('active');
            } else {
              this.$('.zl-cc-country').each(function() {
                if (merge.indexOf($(this).text()) === -1) {
                  return $(this).removeClass('active');
                } else {
                  return $(this).addClass('active');
                }
              });
            }
          }
        }
        return this;
      };

      CitySelection.prototype.render = function(data, name) {
        var o, obj;
        this.oTarget.addClass('hover').siblings().removeClass('hover');
        obj = this.oTarget.parent();
        while (obj.next().length) {
          obj.next().remove();
        }
        o = $(this.createDom(data, name));
        if (o.find('.zl-cc-country').length) {
          o.css('width', 'auto');
        }
        o.insertAfter(obj);
        return this;
      };

      CitySelection.prototype.createDom = function(data, merData, name) {
        var liMap, str, type;
        str = '<div class="list-group">';
        type = '';
        liMap = this.liMap;
        _.each(data, (function(_this) {
          return function(da) {
            var fn;
            fn = liMap[da.type || 'city'];
            if (_.isFunction(fn)) {
              return str += fn.call(_this, da, merData);
            }
          };
        })(this));
        return str += '</div>';
      };

      CitySelection.prototype.filterData = function(arr, kw) {
        var d, _arr, _i, _len;
        if (kw) {
          _arr = [];
          for (_i = 0, _len = arr.length; _i < _len; _i++) {
            d = arr[_i];
            if (d.pinyin.indexOf(kw) > -1 || d.letter.indexOf(kw) > -1) {
              _arr.push(d);
            }
          }
          return _arr;
        } else {
          return arr;
        }
      };

      return CitySelection;

    })(Popup);
  });
})(function(fn) {
  if (typeof CitySelection !== 'undefined' && CitySelection.author === 'leozhao') {
    return console.error('CitySelection已经存在，请勿重复引入！');
  } else {
    if (typeof define === 'function') {
      if (define.amd) {
        return define('city-selection', ['jquery'], fn);
      }
      if (define.cmd) {
        return define('city-selection', ['jquery'], function(require, exports, module) {
          var $;
          $ = require('jquery');
          return fn($);
        });
      }
    }
    if (typeof $ === 'function') {
      return window.CitySelection = fn($);
    } else {
      return console.error('jQuery没有找到，CitySelection无法进行初始化！请确认文件引入和引入顺序！');
    }
  }
});
