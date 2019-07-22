require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(152);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3222c12d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3222c12d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3222c12d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/singer/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3222c12d", Component.options)
  } else {
    hotAPI.reload("data-v-3222c12d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_singer_SingerList__ = __webpack_require__(155);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Singer",
  components: {
    singerList: __WEBPACK_IMPORTED_MODULE_0__components_singer_SingerList__["a" /* default */]
  },
  props: {},
  data: function data() {
    return {
      active: 0,
      cat: 5001, // 歌手类型
      singers: [], // 入驻歌手
      offset: 1, // 请求数据分页偏移量
      limit: 10 // 每页多少条数据
    };
  },

  methods: {
    clickTab: function clickTab(e) {
      var index = e.mp.detail.index;
      this.active = index;
      if (index === 0) {
        this.cat = 5001;
      }
      if (index === 1) {
        this.cat = 1001;
      }
      if (index === 2) {
        this.cat = 1002;
      }
      if (index === 3) {
        this.cat = 1003;
      }
      if (index === 4) {
        this.cat = 2001;
      }
      if (index === 5) {
        this.cat = 2002;
      }
      if (index === 6) {
        this.cat = 2003;
      }
      if (index === 7) {
        this.cat = 6001;
      }
      if (index === 8) {
        this.cat = 6002;
      }
      if (index === 9) {
        this.cat = 6003;
      }
      if (index === 10) {
        this.cat = 7001;
      }
      if (index === 11) {
        this.cat = 7002;
      }
      if (index === 12) {
        this.cat = 7003;
      }
      if (index === 13) {
        this.cat = 4001;
      }
      if (index === 14) {
        this.cat = 4002;
      }
      if (index === 15) {
        this.cat = 4003;
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_SingerList_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6921b997_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_SingerList_vue__ = __webpack_require__(158);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6921b997"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_SingerList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6921b997_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_SingerList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/singer/SingerList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SingerList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6921b997", Component.options)
  } else {
    hotAPI.reload("data-v-6921b997", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 157:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "SingerList",
  components: {},
  props: {
    cat: {
      type: Number
    },
    active: {
      type: Number
    }
  },
  data: function data() {
    return {
      letters: ['热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', "P", 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      activeIndex: 0,
      showLoading: true,
      offset: 1, // 请求数据分页偏移量
      limit: 10, // 每页多少条数据
      activeLetter: '热',
      list: []

    };
  },

  methods: {
    clickItem: function clickItem(item, index) {
      var _this = this;

      this.activeIndex = index;
      this.activeLetter = item;
      if (item !== '热') {
        this.$fly.get('/artist/list?cat=' + this.cat + '&initial=' + item + '&limit=' + this.limit).then(function (res) {
          // this.$emit('update:list', res.artists)
          _this.list = res.data.artists;
        });
      } else {
        this.$fly.get('/artist/list?cat=' + this.cat + '&limit=' + this.limit).then(function (res) {
          _this.list = res.data.artists;
        });
      }
    },
    goToDetail: function goToDetail(item) {
      this.$store.state.detailItem = item;
      // this.$router.push({name: 'singerDetail'})
      wx.navigateTo({
        url: '../singerDetail/main'
      });
    },
    getMoreData: function getMoreData() {
      var _this2 = this;

      this.$fly.get('/artist/list?cat=' + this.cat + '&limit=' + this.limit + '&offset=' + this.offset * this.limit).then(function (res) {
        if (res.artists.length > 0) {
          _this2.showLoading = false;
          _this2.offset++;
          var arr = _this2.list;
          res.data.artists.map(function (item) {
            arr.push(item);
          });
          // this.$emit('update:list', arr)
          _this2.list = res.data.artists;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    wx.showLoading({
      title: '加载中...'
    });
    this.$fly.get('/artist/list?cat=' + this.cat + '&limit=' + this.limit).then(function (res) {
      _this3.list = res.data.artists;
      wx.hideLoading();
    });
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {},
  directives: {}
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    ref: "wrapper",
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "w-content",
    class: {
      pad: _vm.active !== 0
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.picUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v("\n          " + _vm._s(item.name) + "\n        ")])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "l-container"
  }, [(_vm.active > 0) ? _c('scroll-view', {
    staticClass: "letter",
    attrs: {
      "scroll-x": ""
    }
  }, [_c('div', {
    staticClass: "l-content"
  }, _vm._l((_vm.letters), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "l-item",
      class: {
        active: index === _vm.activeIndex
      }
    }, [_c('div', {
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.clickItem(item, index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item) + "\n          ")])])
  }))]) : _vm._e()], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6921b997", esExports)
  }
}

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "animated": true,
      "sticky": true,
      "eventid": '12',
      "mpcomid": '32'
    },
    on: {
      "change": _vm.clickTab
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "入驻歌手",
      "mpcomid": '1'
    }
  }, [(_vm.active === 0) ? _c('singer-list', {
    attrs: {
      "cat": _vm.cat,
      "active": _vm.active,
      "mpcomid": '0'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "华语男歌手",
      "mpcomid": '3'
    }
  }, [(_vm.active === 1) ? _c('singer-list', {
    attrs: {
      "cat": _vm.cat,
      "active": _vm.active,
      "mpcomid": '2'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "华语女歌手",
      "mpcomid": '5'
    }
  }, [(_vm.active === 2) ? _c('singer-list', {
    attrs: {
      "cat": _vm.cat,
      "active": _vm.active,
      "mpcomid": '4'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "华语组合/乐队",
      "mpcomid": '7'
    }
  }, [(_vm.active === 3) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '0',
      "mpcomid": '6'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "欧美男歌手",
      "mpcomid": '9'
    }
  }, [(_vm.active === 4) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '1',
      "mpcomid": '8'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "欧美女歌手 ",
      "mpcomid": '11'
    }
  }, [(_vm.active === 5) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '2',
      "mpcomid": '10'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "欧美组合",
      "mpcomid": '13'
    }
  }, [(_vm.active === 6) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '3',
      "mpcomid": '12'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "日本男歌手",
      "mpcomid": '15'
    }
  }, [(_vm.active === 7) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '4',
      "mpcomid": '14'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "日本女歌手",
      "mpcomid": '17'
    }
  }, [(_vm.active === 8) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '5',
      "mpcomid": '16'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "日本组合/乐队",
      "mpcomid": '19'
    }
  }, [(_vm.active === 9) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '6',
      "mpcomid": '18'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "韩国男歌手",
      "mpcomid": '21'
    }
  }, [(_vm.active === 10) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '7',
      "mpcomid": '20'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e(), _vm._v("/van-tab>\n    ")], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "韩国女歌手",
      "mpcomid": '23'
    }
  }, [(_vm.active === 11) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '8',
      "mpcomid": '22'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e(), _vm._v("/van-tab>\n    ")], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "韩国组合/乐队",
      "mpcomid": '25'
    }
  }, [(_vm.active === 12) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "mpcomid": '24'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "其他男歌手",
      "mpcomid": '27'
    }
  }, [(_vm.active === 13) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '9',
      "mpcomid": '26'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "其他女歌手",
      "mpcomid": '29'
    }
  }, [(_vm.active === 14) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '10',
      "mpcomid": '28'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "其他组合",
      "mpcomid": '31'
    }
  }, [(_vm.active === 15) ? _c('singer-list', {
    attrs: {
      "list": _vm.singers,
      "cat": _vm.cat,
      "active": _vm.active,
      "eventid": '11',
      "mpcomid": '30'
    },
    on: {
      "update:list": function($event) {
        _vm.singers = $event
      }
    }
  }) : _vm._e()], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3222c12d", esExports)
  }
}

/***/ })

},[151]);