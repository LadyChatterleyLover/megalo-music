require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3ef95aee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ef95aee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3ef95aee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ef95aee", Component.options)
  } else {
    hotAPI.reload("data-v-3ef95aee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

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
  name: "Login",
  components: {},
  props: {},
  data: function data() {
    return {
      user: {},
      active: 0,
      phone: '',
      password: '',
      email: '',
      password2: ''
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
      this.email = e.mp.detail.value;
    },
    onBlur4: function onBlur4(e) {
      this.password2 = e.mp.detail.value;
    },
    phoneLogin: function phoneLogin() {
      var _this = this;

      if (this.phone === '') {
        wx.showToast({
          title: '电话号码不能为空',
          icon: 'none'
        });
        return;
      }
      if (this.password === '') {
        wx.showToast({
          title: '密码不能为空',
          icon: 'none'
        });
        return;
      }
      this.$fly.get('/login/cellphone?phone=' + this.phone + '&password=' + this.password).then(function (res) {
        console.log(res);
        if (res.data) {
          var user = res.data.profile;
          wx.setStorageSync('user', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(user));
          wx.setStorageSync('userId', user.userId);
          _this.$store.state.user = user;
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
          wx.switchTab({
            url: '../me/main'
          });
        }
      }).catch(function (err) {
        if (err) {
          wx.showToast({
            title: '账号或密码错误',
            icon: 'none'
          });
        }
      });
    },
    emailLogin: function emailLogin() {
      var _this2 = this;

      if (this.email === '') {
        wx.showToast({
          title: '邮箱不能为空',
          icon: 'none'
        });
        return;
      }
      if (this.password2 === '') {
        wx.showToast({
          title: '密码不能为空',
          icon: 'none'
        });
        return;
      }
      this.$fly.get('/login/email?email=' + this.email + '&password=' + this.password2).then(function (res) {
        if (res.data) {
          var user = res.data.profile;
          wx.setStorageSync('user', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(user));
          wx.setStorageSync('userId', user.userId);
          _this2.$store.state.user = user;
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
          wx.switchTab({
            url: '../me/main'
          });
        }
      }).catch(function (err) {
        console.log(err);
        if (err) {
          wx.showToast({
            title: '账号或密码错误',
            icon: 'none'
          });
        }
      });
    },
    register: function register() {
      wx.navigateTo({
        url: '../register/main'
      });
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "tab"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "mpcomid": '12'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "手机号登录",
      "mpcomid": '5'
    }
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('van-field', {
    attrs: {
      "type": "tel",
      "left-icon": "phone-o",
      "label": "手机号",
      "required": "",
      "clearable": "",
      "placeholder": "请输入手机号",
      "value": _vm.phone,
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
      "left-icon": "manager-o",
      "required": "",
      "clearable": "",
      "placeholder": "请输入密码",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "blur": _vm.onBlur2
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('van-button', {
    attrs: {
      "type": "danger",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.phoneLogin
    }
  }, [_vm._v("立即登录")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "warning",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("立即注册")])], 1)]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "邮箱登录",
      "mpcomid": '11'
    }
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('van-field', {
    attrs: {
      "type": "email",
      "left-icon": "phone-o",
      "value": _vm.email,
      "label": "邮箱",
      "required": "",
      "clearable": "",
      "placeholder": "请输入网易邮箱",
      "eventid": '4',
      "mpcomid": '6'
    },
    on: {
      "blur": _vm.onBlur3
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "type": "password",
      "value": _vm.password2,
      "label": "密码",
      "left-icon": "envelop-o",
      "required": "",
      "clearable": "",
      "placeholder": "请输入密码",
      "eventid": '5',
      "mpcomid": '7'
    },
    on: {
      "blur": _vm.onBlur4
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('van-button', {
    attrs: {
      "type": "danger",
      "eventid": '6',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.emailLogin
    }
  }, [_vm._v("立即登录")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "warning",
      "eventid": '7',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("立即注册")])], 1)])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ef95aee", esExports)
  }
}

/***/ })

},[104]);