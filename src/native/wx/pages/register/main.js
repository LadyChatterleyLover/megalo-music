require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(115);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_72a9da14_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72a9da14"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_72a9da14_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/register/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72a9da14", Component.options)
  } else {
    hotAPI.reload("data-v-72a9da14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_toast_toast__ = __webpack_require__(118);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Register",
  components: {},
  props: {},
  data: function data() {
    return {
      phone: '',
      password: '',
      captcha: '',
      nickname: '',
      sendValue: '发送验证码',
      time: 30,
      timer: null
    };
  },

  methods: {
    onBlur1: function onBlur1(e) {
      this.phone = e.mp.detail.value;
    },
    onBlur2: function onBlur2(e) {
      this.password = e.mp.detail.value;
    },
    onBlur3: function onBlur3(e) {
      this.captcha = e.mp.detail.value;
    },
    onBlur4: function onBlur4(e) {
      this.nickname = e.mp.detail.value;
    },
    register: function register() {
      var _this = this;

      this.$fly.get('/captch/verify?phone=' + this.phone + '&captcha=' + this.captcha).then(function (res) {
        if (res.code === 200) {
          _this.$fly.get('/captch/register?phone=' + _this.phone + '&password=' + _this.password + '&captcha=' + _this.captcha + '&nickname=' + _this.nickname).then(function (res) {
            if (res.code === 200) {
              wx.navigateTo({
                url: '../login/main'
              });
              wx.showToast({
                title: '注册成功',
                icon: 'success'
              });
            }
          }).catch(function (err) {
            if (err) {
              wx.showToast({
                title: '注册失败,请稍后再试',
                icon: 'none'
              });
            }
          });
        }
      }).catch(function (err) {
        if (err) {
          wx.showToast({
            title: '验证码错误',
            icon: 'none'
          });
        }
      });
    },
    send: function send() {
      var _this2 = this;

      if (this.timer) clearInterval(this.timer);
      if (this.phone === '') {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none'
        });
        return;
      } else {
        this.timer = setInterval(function () {
          _this2.time--;
          _this2.sendValue = _this2.time + 's';
          if (_this2.time === 0) {
            _this2.sendValue = '重新发送';
            clearInterval(_this2.timer);
          }
        }, 1000);
        if (this.sendValue === '重新发送') {
          if (this.timer) clearInterval(this.timer);
          this.time = 30;
          this.timer = setInterval(function () {
            _this2.time--;
            _this2.sendValue = _this2.time + 's';
            if (_this2.time === 0) {
              _this2.sendValue = '重新发送';
              clearInterval(_this2.timer);
            }
          }, 1000);
        }
        this.$fly.get('/captcha/sent?phone=' + this.phone).then(function (res) {
          if (res.code === 200) {
            wx.showToast({
              title: '短信验证码发送成功',
              icon: 'success'
            });
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  },
  mounted: function mounted() {},
  created: function created() {},

  filters: {},
  computed: {},
  watch: {},
  directives: {}
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils__ = __webpack_require__(119);

const defaultOptions = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
    duration: 3000,
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__common_utils__["a" /* isObj */])(message) ? message : { message };
}
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
    const options = Object.assign({}, currentOptions, parseOptions(toastOptions));
    const context = options.context || getContext();
    const toast = context.selectComponent(options.selector);
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
    toast.clear = () => {
        toast.set({ show: false });
        if (options.onClose) {
            options.onClose();
        }
    };
    queue.push(toast);
    toast.set(options);
    clearTimeout(toast.timer);
    if (options.duration > 0) {
        toast.timer = setTimeout(() => {
            toast.clear();
            queue = queue.filter(item => item !== toast);
        }, options.duration);
    }
    return toast;
}
const createMethod = type => (options) => Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
    queue.forEach(toast => {
        toast.clear();
    });
    queue = [];
};
Toast.setDefaultOptions = (options) => {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
    currentOptions = Object.assign({}, defaultOptions);
};
/* unused harmony default export */ var _unused_webpack_default_export = (Toast);


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObj; });
/* unused harmony export isDef */
/* unused harmony export isNumber */
/* unused harmony export range */
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return /^\d+$/.test(value);
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}



/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-field', {
    attrs: {
      "type": "tel",
      "left-icon": "phone-o",
      "value": _vm.phone,
      "label": "手机号",
      "required": "",
      "clearable": "",
      "placeholder": "请输入手机号",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "blur": _vm.onBlur1
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "type": "password",
      "value": _vm.password,
      "label": "密码",
      "left-icon": "photo-o",
      "required": "",
      "clearable": "",
      "placeholder": "请输入密码",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "blur": _vm.onBlur2
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.captcha,
      "label": "验证码",
      "left-icon": "label-o",
      "required": "",
      "clearable": "",
      "placeholder": "请输入验证码",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "blur": _vm.onBlur3
    }
  }, [_c('van-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.send
    },
    slot: "button"
  }, [_vm._v("\n          " + _vm._s(_vm.sendValue) + "\n        ")])], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.nickname,
      "center": "",
      "label": "昵称",
      "left-icon": "user-o",
      "required": "",
      "clearable": "",
      "placeholder": "请输入昵称",
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "blur": _vm.onBlur4
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('van-button', {
    attrs: {
      "type": "danger",
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "click": function($event) {
        _vm.$router.push('/login')
      }
    }
  }, [_vm._v("前往登录")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "warning",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("立即注册")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-72a9da14", esExports)
  }
}

/***/ })

},[114]);