require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6a059349_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a059349"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6a059349_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a059349", Component.options)
  } else {
    hotAPI.reload("data-v-6a059349", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Me",
  components: {},
  props: {},
  data: function data() {
    return {
      user: {},
      isSign: false, // 是否签到
      dynamic: 0, // 动态
      follow: 0, // 关注
      fans: 0, // 粉丝
      userId: ''
    };
  },

  methods: {
    goLogin: function goLogin() {
      wx.navigateTo({
        url: '../login/main'
      });
    },

    // 签到
    sign: function sign() {
      var _this = this;

      this.$fly.get('/daily_signin?type=1').then(function (res) {
        console.log(res);
        if (res.data.code === 200) {
          wx.showToast({
            title: '签到成功'
          });
          _this.isSign = true;
        }
      });
    },
    logout: function logout() {
      var _this2 = this;

      this.$fly.get('/logout').then(function (res) {
        if (res.data.code === 200) {
          _this2.$store.state.user = null;
          wx.removeStorageSync('user');
          wx.removeStorageSync('userId');
          wx.switchTab({
            url: '../index/main'
          });
          wx.showToast({
            title: '退出成功'

          });
        }
      });
    },

    // 获取动态
    getDynamic: function getDynamic() {
      var _this3 = this;

      this.$fly.get('/user/event?uid=' + this.userId).then(function (res) {
        if (res.data.code === 200) {
          _this3.dynamic = res.data.events.length;
        }
      });
    },

    // 获取关注
    getFollow: function getFollow() {
      var _this4 = this;

      this.$fly.get('/user/follows?uid=' + this.userId).then(function (res) {
        if (res.data.code === 200) {
          _this4.follow = res.data.follow.length;
        }
      });
    },

    // 获取粉丝
    getFans: function getFans() {
      var _this5 = this;

      this.$fly.get('/user/followeds?uid=' + this.userId).then(function (res) {
        if (res.data.code === 200) {
          _this5.fans = res.data.followeds.length;
        }
      });
    },

    // 编辑资料
    edit: function edit() {
      wx.navigateTo({
        url: '../edit/main'
      });
    },
    getUser: function getUser() {
      // this.$fly.get(`/user/detail?uid=${this.userId}`).then(res => {
      //   if (res.data) {
      //     this.user = res.data.profile
      //     console.log(this.user)
      //     this.isSign = res.pcSign
      //     wx.setStorageSync('user', JSON.stringify(res.profile))
      //   }
      // })
    }
  },
  mounted: function mounted() {
    if (wx.getStorageSync('userId') !== '') {
      this.userId = wx.getStorageSync('userId');
      this.getDynamic();
      this.getFollow();
      this.getFans();
      this.getUser();
    }
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {},
  directives: {}
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "me"
  }, [_c('div', {
    staticClass: "no-login"
  }, [_c('div', {
    staticClass: "n-desc"
  }, [_vm._v("\n        您还没有登录喔\n      ")]), _vm._v(" "), _c('div', [_c('van-button', {
    attrs: {
      "type": "info",
      "size": "small",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.goLogin
    }
  }, [_vm._v("立即登录")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6a059349", esExports)
  }
}

/***/ })

},[109]);