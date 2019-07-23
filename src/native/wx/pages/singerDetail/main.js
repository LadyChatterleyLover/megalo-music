require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(161);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_40d456de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40d456de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_40d456de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/singerDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40d456de", Component.options)
  } else {
    hotAPI.reload("data-v-40d456de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "SingerDetail",
  components: {},
  props: {},
  data: function data() {
    return {
      songs: []
    };
  },

  methods: {
    back: function back() {
      this.$router.back();
    },
    goToPlay: function goToPlay(item, index) {
      console.log(item);
      // this.$router.push({name: 'player', params: {item: item,index: index, songs: this.songs}})
    },
    playAll: function playAll() {
      var index = parseInt(Math.random() * this.songs.length);
      var item = this.songs[index];
      // this.$router.push({name: 'player', params: {item: item,index: index, songs: this.songs}})
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get("/artists?id=" + this.detailItem.id).then(function (res) {
      console.log(res);
      _this.songs = res.data.hotSongs;
    });
  },
  created: function created() {},

  filters: {},
  computed: {
    detailItem: function detailItem() {
      return this.$store.state.detailItem;
    }
  },
  watch: {},
  directives: {}
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n      " + _vm._s(_vm.detailItem.name) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": _vm.detailItem.picUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "play"
  }, [_c('div', {
    staticClass: "p-icon"
  }, [_c('van-icon', {
    attrs: {
      "name": "play-circle-o",
      "size": "32rpx",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "p-desc",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.playAll
    }
  }, [_vm._v("\n        随机播放全部\n      ")])])]), _vm._v(" "), _c('div', {
    ref: "wrapper",
    staticClass: "content"
  }, [_c('div', {
    staticClass: "w-content"
  }, _vm._l((_vm.songs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "c-item"
    }, [_c('div', {
      staticClass: "index"
    }, [_vm._v("\n          " + _vm._s(index + 1) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "con"
    }, [_c('div', {
      staticClass: "c-name"
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "al",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToPlay(item, index)
        }
      }
    }, [_vm._l((item.ar), function(item1, index1) {
      return _c('div', {
        key: index1,
        staticClass: "a-name"
      }, [_vm._v("\n              " + _vm._s(item1.name) + " "), (index1 !== item.ar.length - 1) ? _c('span', [_vm._v("/")]) : _vm._e(), _vm._v(" "), (index1 === item.ar.length - 1) ? _c('span', [_vm._v("· ")]) : _vm._e()])
    }), _vm._v(" "), _c('div', {
      staticClass: "al-name"
    }, [_vm._v("\n              " + _vm._s(item.al.name) + "\n            ")])], 2), _vm._v(" "), _c('div', {
      staticClass: "c-icon"
    }, [_c('van-icon', {
      attrs: {
        "name": "play-circle-o",
        "size": "36rpx",
        "mpcomid": '1_' + index
      }
    })], 1)])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-40d456de", esExports)
  }
}

/***/ })

},[160]);