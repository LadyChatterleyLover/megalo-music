require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "value",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.search(_vm.value)
      }
    }
  }, [_vm._v("\n      搜索 \"" + _vm._s(_vm.value) + "\"\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _vm._l((_vm.searchRank), function(item, index) {
    return _c('div', {
      key: item.keyword
    }, [_c('div', {
      staticClass: "item",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.search(item)
        }
      }
    }, [_c('div', {
      staticClass: "search"
    }, [_c('van-icon', {
      attrs: {
        "name": "search",
        "mpcomid": '0_' + index
      }
    })], 1), _vm._v(" "), _c('div', [_vm._v("\n          " + _vm._s(item.keyword) + "\n        ")])]), _vm._v(" "), _c('div', {
      staticClass: "line"
    })])
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-49ca6a4a", esExports)
  }
}

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('div', [_c('div', {
    staticClass: "s-top"
  }, [_c('div', {
    staticClass: "s-search"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "shape": "round",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "search": _vm.onSearch,
      "cancel": _vm.onCancel,
      "change": _vm.onChange
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "s-btn"
  }, [(_vm.showValue) ? _c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.onSearch
    }
  }, [_vm._v("搜索")]) : _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.onCancel
    }
  }, [_vm._v("取消")])])]), _vm._v(" "), (_vm.showPanel) ? _c('search-panel', {
    attrs: {
      "searchRank": _vm.searchRank,
      "value": _vm.value,
      "mpcomid": '3'
    }
  }) : _c('div', [(_vm.showHistory && _vm.searchArr.length > 0) ? _c('div', {
    staticClass: "history"
  }, [_c('h3', [_vm._v("\n          搜索历史\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._l((_vm.searchArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleItem(item)
        }
      }
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v("\n              " + _vm._s(item.name) + "\n            ")])])
  }), _vm._v(" "), _c('div', {
    staticClass: "d-icon",
    staticStyle: {
      "font-size": "24rpx"
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.clearHistory
    }
  }, [_vm._v("\n            清空历史\n          ")]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "show": true,
      "show-cancel-button": "",
      "title": "是否清空搜索历史",
      "eventid": '5',
      "mpcomid": '1'
    },
    on: {
      "confirm": _vm.confirm
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '2'
    }
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "hot"
  }, [_c('h3', [_vm._v("\n          热搜榜\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "h-desc"
  }, _vm._l((_vm.hots), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "h-item",
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.searchItem(item)
        }
      }
    }, [_c('div', {
      staticClass: "index",
      class: {
        hotIndex: index < 3
      }
    }, [_vm._v("\n              " + _vm._s(index + 1) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_c('div', [_vm._v("\n                " + _vm._s(item.first) + "\n              ")])]), _vm._v(" "), (index < 2) ? _c('div', {
      staticClass: "h-hot"
    }, [_vm._v("\n              hot\n            ")]) : _vm._e()])
  }))], 1)])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2c1dba4e", esExports)
  }
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showSearch) ? _c('search', {
    attrs: {
      "showSearch": _vm.showSearch,
      "eventid": '3',
      "mpcomid": '6'
    },
    on: {
      "update:showSearch": function($event) {
        _vm.showSearch = $event
      }
    }
  }) : _c('div', [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "t-title"
  }, [_c('h3', [_vm._v("音乐馆")])], 1), _vm._v(" "), _c('div', {
    staticClass: "t-search"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "shape": "round",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "focus": _vm.onFocus
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "t-img"
  }, [_c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.onSearch
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../icons/music.svg",
      "alt": "",
      "eventid": '2'
    },
    on: {
      "click": _vm.clickImg
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "indicator-active-color": "#fff",
      "circular": _vm.circular
    }
  }, _vm._l((_vm.banners), function(item, index) {
    return _c('swiper-item', {
      key: item.encodeId,
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('img', {
      staticClass: "slide-image",
      attrs: {
        "src": item.pic
      }
    })])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n          每日推荐\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "n-icon"
  }, [_c('img', {
    attrs: {
      "src": "../../icons/rili.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n          歌单\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "n-icon"
  }, [_c('img', {
    attrs: {
      "src": "../../icons/song.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n          排行榜\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "n-icon"
  }, [_c('img', {
    attrs: {
      "src": "../../icons/rank.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n          电台\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "n-icon"
  }, [_c('img', {
    attrs: {
      "src": "../../icons/radio.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n          直播\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "n-icon"
  }, [_c('img', {
    attrs: {
      "src": "../../icons/zhibo.svg",
      "alt": ""
    }
  })])])]), _vm._v(" "), _c('div', [(_vm.rankList.length > 0) ? _c('card', {
    attrs: {
      "title": "推荐歌单",
      "content": _vm.rankList,
      "desc": "歌单广场",
      "mpcomid": '2'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.newMusic.length > 0) ? _c('card', {
    attrs: {
      "title": "音乐新势力",
      "content": _vm.newMusic,
      "desc": "新音乐",
      "mpcomid": '3'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.djArr.length > 0) ? _c('card', {
    attrs: {
      "title": "推荐电台",
      "content": _vm.djArr,
      "desc": "电台广场",
      "mpcomid": '4'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.recommend.length > 0) ? _c('card', {
    attrs: {
      "title": "推荐节目",
      "content": _vm.recommend,
      "desc": "更多节目",
      "mpcomid": '5'
    }
  }) : _vm._e()], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3628a517", esExports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(58);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3628a517_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3628a517"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3628a517_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3628a517", Component.options)
  } else {
    hotAPI.reload("data-v-3628a517", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hone_Card__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_search_Search__ = __webpack_require__(65);
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
  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_hone_Card__["a" /* default */],
    search: __WEBPACK_IMPORTED_MODULE_1__components_search_Search__["a" /* default */]
  },
  data: function data() {
    return {
      banners: [], // 轮播图
      indicatorDots: true, // 轮播小点
      autoplay: true, // 自动播放
      interval: 3000, // 间隔时间
      duration: 1000, // 滑动时长
      circular: true, // 循环轮播
      value: '', // 搜索框
      showSearch: false, // 是否显示搜索
      rankList: [], // 推荐歌曲
      moreList: [],
      newMusic: [], // 新音乐
      djArr: [], // 推荐电台
      recommend: [] // 推荐节目
    };
  },

  methods: {
    getBanner: function getBanner() {
      var _this = this;

      this.$fly.get('/banner?type=2').then(function (response) {
        var res = response.data;
        if (res.code === 200) {
          _this.banners = res.banners;
        }
      });
    },
    onFocus: function onFocus() {
      this.showSearch = true;
    },
    clickImg: function clickImg() {
      wx.showToast({
        title: '听歌识曲功能暂未开放喔',
        icon: 'none'
      });
    },
    getRank: function getRank() {
      var _this2 = this;

      wx.showLoading({
        title: '加载中...'
      });
      this.$fly.get('/personalized').then(function (res) {
        if (res.data) {
          wx.hideLoading();
          _this2.rankList = res.data.result;
        }
      });
    },
    getNewMusic: function getNewMusic() {
      var _this3 = this;

      this.$fly.get('/personalized/newsong').then(function (res) {
        _this3.newMusic = res.data.result;
      });
    },
    getDJ: function getDJ() {
      var _this4 = this;

      this.$fly.get('/personalized/djprogram').then(function (res) {
        _this4.djArr = res.data.result;
      });
    },
    getRecommend: function getRecommend() {
      var _this5 = this;

      this.$fly.get('/program/recommend').then(function (res) {
        _this5.recommend = res.data.programs;
      });
    }
  },
  mounted: function mounted() {
    this.getBanner();
    this.getRank();
    this.getNewMusic();
    this.getDJ();
    this.getRecommend();
  },
  created: function created() {

    // let app = getApp()
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1262672a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__(64);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1262672a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1262672a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/hone/Card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1262672a", Component.options)
  } else {
    hotAPI.reload("data-v-1262672a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Card",
  components: {},
  data: function data() {
    return {
      showMore: false,
      showContentOne: false,
      showContent: false,
      activeIndex: 0
    };
  },

  props: {
    title: {
      type: [String, Array],
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    onClick: function onClick(item, index) {
      this.activeIndex = index;
    }
  },
  mounted: function mounted() {
    if (typeof this.title === 'string') {
      this.showMore = true;
    }
    if (Array.isArray(this.content[1])) {
      this.showContentOne = true;
      this.content[1].length = 6;
    }
    if (Array.isArray(this.content[0])) {
      this.showContent = true;
      this.content[0].length = 6;
    } else {
      this.showContent = false;
      this.content.length = 6;
    }
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {},
  directives: {}
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.content.length > 0) ? _c('div', [_c('div', {
    staticClass: "top"
  }, [(_vm.showMore) ? _c('h3', [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]) : _c('h3', [_c('div', {
    staticClass: "flex"
  }, _vm._l((_vm.title), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "f-item",
      class: {
        active: _vm.activeIndex === index
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.onClick(item, index)
        }
      }
    }, [_vm._v("\n          " + _vm._s(item) + "\n        ")])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "song"
  }, [_vm._v("\n      " + _vm._s(_vm.desc) + "\n    ")])], 1), _vm._v(" "), (!_vm.showContent) ? _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.content), function(item, index) {
    return (_vm.activeIndex === 0) ? _c('div', {
      key: index,
      staticClass: "item"
    }, [(item.song) ? _c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.song.album.picUrl,
        "alt": ""
      }
    })]) : (item.coverUrl) ? _c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.coverUrl,
        "alt": ""
      }
    })]) : _c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.picUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "title t-name"
    }, [_vm._v("\n        " + _vm._s(item.name) + "\n      ")])]) : _vm._e()
  })) : _vm._e()]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1262672a", esExports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Search_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2c1dba4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Search_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c1dba4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2c1dba4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Search_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c1dba4e", Component.options)
  } else {
    hotAPI.reload("data-v-2c1dba4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SearchPanel__ = __webpack_require__(68);

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
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Search",
  components: {
    searchPanel: __WEBPACK_IMPORTED_MODULE_1__SearchPanel__["a" /* default */]
  },
  props: {
    showSearch: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      value: '',
      hots: [], // 热搜
      showList: false,
      searchList: [],
      recommend: {},
      flag: false,
      showValue: false,
      searchArr: JSON.parse(wx.getStorageSync('searchArr')),
      showFlag: true, // 是否显示弹框
      showHistory: true, // 是否显示搜索历史
      searchValue: '',
      showPanel: false,
      searchRank: [], // 搜索建议
      searchSongs: [] // 搜索结果
    };
  },

  methods: {
    getHots: function getHots() {
      var _this = this;

      this.$fly.get('/search/hot').then(function (res) {
        wx.showLoading({
          title: '加载中...'
        });
        if (res.data) {
          wx.hideLoading();
          _this.hots = res.data.result.hots;
        }
      });
    },
    searchItem: function searchItem(item) {
      var _this2 = this;

      this.$fly.get('/search?keywords=' + item.first).then(function (res) {
        _this2.searchSongs = res.data.result.songs;
        _this2.$store.state.searchSongs = res.data.result.songs;
        _this2.$store.state.searchValue = item.first;
        var url = '../../pages/searchList/main?searchSongs=' + _this2.searchSongs + '&searchValue=' + item.first;
        wx.navigateTo({
          url: url
        });
      });
      var obj = {
        name: item.first
      };
      var arr = JSON.parse(wx.getStorageSync('searchArr'));
      arr.push(obj);
      // arr = lodash.unionBy(arr, 'name')
      wx.setStorageSync('searchArr', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr));
    },
    onSearch: function onSearch() {
      var _this3 = this;

      this.$fly.get('/search?keywords=' + this.value).then(function (res) {
        _this3.searchSongs = res.data.result.songs;
        _this3.$store.state.searchSongs = res.result.songs;
        _this3.$store.state.searchValue = _this3.value;
        var url = '../../pages/searchList/main?searchSongs=' + _this3.searchSongs + '&searchValue=' + _this3.searchValue;
        wx.navigateTo({
          url: url
        });
      });
      var obj = {
        name: this.value
      };
      var arr = JSON.parse(wx.getStorageSync('searchArr'));
      arr.push(obj);
      wx.setStorageSync('searchArr', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr));
    },
    onCancel: function onCancel() {
      this.$emit('update:showSearch', false);
    },
    clearHistory: function clearHistory() {
      this.showHistory = false;
      var arr = [];
      wx.setStorageSync('searchArr', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr));
      this.showFlag = true;
    },
    confirm: function confirm() {
      this.showHistory = false;
      var arr = [];
      wx.setStorageSync('searchArr', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr));
    },
    handleItem: function handleItem(item) {
      var _this4 = this;

      this.$fly.get('/search?keywords=' + item.name + '&limit=10').then(function (res) {
        _this4.$store.state.searchValue = item.name;
        _this4.searchSongs = res.data.result.songs;
        _this4.$store.state.searchSongs = res.data.result.songs;
        var url = '../../pages/searchList/main?searchSongs=' + _this4.searchSongs + '&searchValue=' + item.name;
        wx.navigateTo({
          url: url
        });
        wx.navigateTo({
          url: url
        });
      });
    },
    onChange: function onChange(e) {
      this.value = e.mp.detail;
    }
  },
  mounted: function mounted() {
    this.getHots();
    if (wx.getStorageSync('searchArr')) {
      this.searchArr = JSON.parse(wx.getStorageSync('searchArr'));
    }
  },
  onShow: function onShow() {},
  created: function created() {},

  filters: {},
  computed: {},
  watch: {
    value: function value(val) {
      var _this5 = this;

      if (val !== '') {
        this.searchValue = val;
        this.showValue = true;
        this.$fly.get('/search/suggest?keywords=' + val + '&type=mobile').then(function (res) {
          if (res) {
            _this5.searchRank = res.data.result.allMatch;
            _this5.showPanel = true;
          }
        });
      } else {
        this.showValue = false;
        this.showPanel = false;
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_SearchPanel_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_49ca6a4a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_SearchPanel_vue__ = __webpack_require__(101);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49ca6a4a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_SearchPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_49ca6a4a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_SearchPanel_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/SearchPanel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchPanel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49ca6a4a", Component.options)
  } else {
    hotAPI.reload("data-v-49ca6a4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


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
  name: "SearchPanel",
  components: {},
  props: {
    searchRank: {
      type: Array
    },
    value: {
      type: String
    }
  },
  data: function data() {
    return {
      searchSongs: []
    };
  },

  methods: {
    search: function search(item) {
      var _this = this;

      if ((typeof item === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(item)) === 'object') {
        this.$fly.get('/search?keywords=' + item.keyword + '&limit=10').then(function (res) {
          _this.searchSongs = res.data.result.songs;
          _this.$store.state.searchSongs = res.data.result.songs;
          _this.$store.state.searchValue = item.keyword;
          // this.$router.push({name: 'searchList', params: {searchSongs: this.searchSongs, searchValue:item.keyword}})
          var url = '../../pages/searchList/main?searchSongs=' + _this.searchSongs + '&searchValue=' + item.keyword;
          wx.navigateTo({
            url: url
          });
        });
        var obj = {
          name: item.keyword
        };
        var arr = JSON.parse(wx.getStorageSync('searchArr'));
        arr.push(obj);
        wx.setStorageSync('searchArr', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr));
      } else {
        this.$fly.get('/search?keywords=' + item).then(function (res) {
          _this.searchSongs = res.data.result.songs;
          _this.$store.state.searchSongs = res.data.result.songs;
          _this.$store.state.searchValue = item;
          var url = '../../pages/searchList/main?searchSongs=' + _this.searchSongs + '&searchValue=' + item;
          wx.navigateTo({
            url: url
          });
        });
        var _obj = {
          name: item
        };
        var _arr = JSON.parse(wx.getStorageSync('searchArr'));
        _arr.push(_obj);
        wx.setStorageSync('searchArr', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_arr));
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

/***/ })

},[57]);