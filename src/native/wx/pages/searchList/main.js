require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(122);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_27a846d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27a846d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_27a846d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/searchList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27a846d2", Component.options)
  } else {
    hotAPI.reload("data-v-27a846d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_search_Album__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_search_Singer__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_Sheet__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_Users__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_Videos__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_Radio__ = __webpack_require__(146);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SearchList",
  components: {
    album: __WEBPACK_IMPORTED_MODULE_0__components_search_Album__["a" /* default */],
    singer: __WEBPACK_IMPORTED_MODULE_1__components_search_Singer__["a" /* default */],
    sheet: __WEBPACK_IMPORTED_MODULE_2__components_search_Sheet__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_3__components_search_Users__["a" /* default */],
    mv: __WEBPACK_IMPORTED_MODULE_4__components_search_Videos__["a" /* default */],
    radios: __WEBPACK_IMPORTED_MODULE_5__components_search_Radio__["a" /* default */]
  },
  props: {},
  data: function data() {
    return {
      active: 0,
      // searchSongs: [], // 搜索结果
      offset: 1, // 请求数据分页偏移量
      limit: 10, // 每页多少条数据
      showLoading: true,
      moreAlbums: [], // 更多专辑
      moreSingers: [], //更多歌手
      moreSheets: [], // 更多歌单
      moreUsers: [], // 更多用户
      moreVideos: [], // 更多mv
      moreRadios: [] // 更多电台
    };
  },
  onReachBottom: function onReachBottom() {
    if (this.active === 0) {
      this.getMoreSongs();
    }
    if (this.active === 1) {
      this.getMoreAlbums();
    }
    if (this.active === 2) {
      this.getMoreSingers();
    }
    if (this.active === 3) {
      this.getMoreSheets();
    }
    if (this.active === 4) {
      this.getMoreUsers();
    }
    if (this.active === 5) {
      this.getMoreVideos();
    }
  },

  methods: {
    back: function back() {
      this.$router.back();
    },
    play: function play(item, index) {
      var _this = this;

      this.$store.state.detailItem.name = item.ar;
      this.$fly.get('/song/detail?ids=' + item.id).then(function (res) {
        if (res.code === 200) {
          var song = res.songs[0];
          _this.$router.push({ name: 'player', params: { item: song, index: index, songs: _this.searchSongs } });
        }
      });
    },
    getMoreSongs: function getMoreSongs() {
      var _this2 = this;

      wx.showLoading({
        title: '加载中...'
      });
      this.$fly.get('/search?keywords=' + this.value + '&limit=' + this.limit + '&offset=' + this.offset * this.limit).then(function (res) {
        var result = res.data.result.songs;
        if (result.length > 0) {
          wx.hideLoading();
          _this2.showLoading = false;
          _this2.offset++;
          result.map(function (item) {
            _this2.searchSongs.push(item);
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getMoreAlbums: function getMoreAlbums() {
      var _this3 = this;

      this.$fly.get('/search?keywords=' + this.value + '&limit=' + this.limit + '&offset=' + this.offset * this.limit + '&type=10').then(function (res) {
        var result = res.data.result.albums;
        if (result.length > 0) {
          _this3.showLoading = false;
          _this3.offset++;
          result.map(function (item) {
            _this3.moreAlbums.push(item);
          });
        }
      });
    },
    getMoreSingers: function getMoreSingers() {
      var _this4 = this;

      this.$fly.get('/search?keywords=' + this.value + '&limit=' + this.limit + '&offset=' + this.offset * this.limit + '&type=100').then(function (res) {
        var result = res.data.result.artists;
        if (result.length > 0) {
          _this4.showLoading = false;
          _this4.offset++;
          result.map(function (item) {
            _this4.moreSingers.push(item);
          });
        }
      });
    },
    getMoreSheets: function getMoreSheets() {
      var _this5 = this;

      this.$fly.get('/search?keywords=' + this.value + '&limit=' + this.limit + '&offset=' + this.offset * this.limit + '&type=1000').then(function (res) {
        var result = res.data.result.playlists;
        if (result.length > 0) {
          _this5.showLoading = false;
          _this5.offset++;
          result.map(function (item) {
            _this5.moreSheets.push(item);
          });
        }
      });
    },
    getMoreUsers: function getMoreUsers() {
      var _this6 = this;

      this.$fly.get('/search?keywords=' + this.value + '&limit=' + this.limit + '&offset=' + this.offset * this.limit + '&type=1002').then(function (res) {
        var result = res.data.result.userprofiles;
        if (result.length > 0) {
          _this6.showLoading = false;
          _this6.offset++;
          result.map(function (item) {
            _this6.moreUsers.push(item);
          });
        }
      });
    },
    getMoreVideos: function getMoreVideos() {
      var _this7 = this;

      this.$fly.get('/search?keywords=' + this.value + '&limit=' + this.limit + '&offset=' + this.offset * this.limit + '&type=1014').then(function (res) {
        var result = res.data.result.videos;
        if (result.length > 0) {
          _this7.showLoading = false;
          _this7.offset++;
          result.map(function (item) {
            _this7.moreVideos.push(item);
          });
        }
      });
    }
  },
  onLoad: function onLoad(options) {
    this.searchSongs = options.searchSongs;
    this.value = options.searchValue;
  },
  mounted: function mounted() {
    var _this8 = this;

    this.searchSongs.map(function (item) {
      item.artists.map(function (item1) {
        var replaceReg = new RegExp(_this8.value, 'g');
        var replaceString = '<span class="search-text">' + _this8.value + '</span>';
        item1.name = item1.name.replace(replaceReg, replaceString);
      });
    });
  },
  created: function created() {},

  filters: {},
  computed: {
    searchSongs: function searchSongs() {
      return this.$store.state.searchSongs;
    },

    value: {
      get: function get() {
        return this.$store.state.searchValue;
      },
      set: function set() {}
    }
  },
  watch: {},
  directives: {}
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Album_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_17b78bce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Album_vue__ = __webpack_require__(129);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17b78bce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Album_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_17b78bce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Album_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Album.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Album.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17b78bce", Component.options)
  } else {
    hotAPI.reload("data-v-17b78bce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Album",
  components: {},
  props: {
    value: {
      type: String
    },
    moreAlbums: {
      type: Array
    }
  },
  data: function data() {
    return {
      albums: [],
      showLoading: true
    };
  },

  methods: {
    goDetail: function goDetail(item) {
      this.$store.state.albumId = item.id;
      // this.$router.push('/albumPlay')
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get('/search?keywords=' + this.value + '&type=10&limit=10').then(function (res) {
      // 156 346 560 0000
      _this.albums = res.data.result.albums;
      _this.albums.map(function (item) {
        item.publishTime = _this.$moment(item.publishTime).format('YYYY-MM-DD');
        var replaceReg = new RegExp(_this.value, 'g');
        var replaceString = '<div class="search-text">' + _this.value + '</div>';
        item.name = item.name.replace(replaceReg, replaceString);
        item.artists.map(function (item1) {
          item1.name = item1.name.replace(replaceReg, replaceString);
        });
      });
    });
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {
    moreAlbums: function moreAlbums(val) {
      var _this2 = this;

      if (val.length > 0) {
        this.showLoading = false;
        val.map(function (item) {
          _this2.albums.push(item);
        });
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('/');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return t1 + ' ' + t2;
}
function formatTimeTwo(number, format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];
  var date = new Date(number);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  formatNumber: formatNumber,
  formatTime: formatTime,
  formatTimeTwo: formatTimeTwo
});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "content"
  }, [(_vm.albums.length === 0) ? _c('div', {
    staticClass: "flex"
  }, [_vm._v("无结果")]) : _c('div', _vm._l((_vm.albums), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.blurPicUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('div', {
      staticClass: "name",
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._l((item.artists), function(item1, index1) {
      return _c('div', {
        key: index1
      }, [_c('div', {
        domProps: {
          "innerHTML": _vm._s(item1.name)
        }
      })])
    }), _vm._v(" "), _c('div', {
      staticClass: "publish"
    }, [_vm._v("\n              " + _vm._s(item.publishTime) + "\n            ")])], 2)])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-17b78bce", esExports)
  }
}

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Singer_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3f8436ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Singer_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f8436ad"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Singer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3f8436ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Singer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Singer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Singer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f8436ad", Component.options)
  } else {
    hotAPI.reload("data-v-3f8436ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Singger",
  components: {},
  props: {
    value: {
      type: String
    },
    moreSinggers: {
      type: Array
    }
  },
  data: function data() {
    return {
      singer: [],
      showLoading: true
    };
  },

  methods: {
    goDetail: function goDetail(item) {
      this.$store.state.singerId = item.id;
      this.$store.state.singName = item.name.substr(26, 3);
      this.$store.state.singer = item;
      // this.$router.push({name: 'singerPlay', params: {item: item}})
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get('/search?keywords=' + this.value + '&type=100&limit=10').then(function (res) {
      _this.singer = res.data.result.artists;
      _this.showLoading = false;
      _this.singer.map(function (item) {
        var replaceReg = new RegExp(_this.value, 'g');
        var replaceString = '<span class="search-text">' + _this.value + '</span>';
        item.name = item.name.replace(replaceReg, replaceString);
      });
    });
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {
    moreSinggers: function moreSinggers(val) {
      var _this2 = this;

      if (val.length > 0) {
        this.showLoading = false;
        val.map(function (item) {
          item.id = Math.floor(item.id + Math.random() * 100000);
          _this2.singer.push(item);
        });
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
  }, [(_vm.singer.length === 0) ? _c('div', {
    staticClass: "flex"
  }, [_vm._v("无结果")]) : _c('div', _vm._l((_vm.singer), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.img1v1Url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "name",
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "alias"
    }, _vm._l((item.alias), function(item1, index1) {
      return _c('div', {
        key: index1
      }, [_vm._v("\n            (" + _vm._s(item1) + ")\n          ")])
    }))])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3f8436ad", esExports)
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Sheet_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_68ca72be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Sheet_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68ca72be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Sheet_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_68ca72be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Sheet_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Sheet.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sheet.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ca72be", Component.options)
  } else {
    hotAPI.reload("data-v-68ca72be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Sheet",
  components: {},
  props: {
    value: {
      type: String
    },
    moreSheets: {
      type: Array
    }
  },
  data: function data() {
    return {
      sheet: [],
      showLoading: true
    };
  },

  methods: {
    goDetail: function goDetail(item) {
      this.$store.state.sheetId = item.id;
      this.$router.push('/sheetPlay');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get('/search?keywords=' + this.value + '&type=1000&limit=10').then(function (res) {
      _this.sheet = res.data.result.playlists;
      _this.sheet.map(function (item) {
        item.publishTime = _this.$moment(item.publishTime).format('YYYY-MM-DD');
        var replaceReg = new RegExp(_this.value, 'g');
        var replaceString = '<span class="search-text">' + _this.value + '</span>';
        item.name = item.name.replace(replaceReg, replaceString);
        item.playCount = item.playCount.toString().substr(0, 2) + '.' + item.playCount.toString().substr(2, 1);
      });
    });
  },
  created: function created() {},

  computed: {},
  watch: {
    moreSheets: function moreSheets(val) {
      var _this2 = this;

      if (val.length > 0) {
        this.showLoading = false;
        val.map(function (item) {
          _this2.sheet.push(item);
        });
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.sheet.length === 0) ? _c('div', {
    staticClass: "flex"
  }, [_vm._v("无结果")]) : _c('div', _vm._l((_vm.sheet), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.coverImgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('div', {
      staticClass: "name",
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "d-item"
    }, [_c('div', {
      staticClass: "count"
    }, [_vm._v("\n            " + _vm._s(item.trackCount) + "首音乐\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "user"
    }, [_vm._v("\n            by" + _vm._s(item.creator.nickname) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "play"
    }, [_vm._v("\n            播放" + _vm._s(item.playCount) + "万次\n          ")])])])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-68ca72be", esExports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Users_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1e2126e7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Users_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e2126e7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Users_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1e2126e7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Users_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Users.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Users.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e2126e7", Component.options)
  } else {
    hotAPI.reload("data-v-1e2126e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Users",
  components: {},
  props: {
    value: {
      type: String
    },
    moreUsers: {
      type: Array
    }
  },
  data: function data() {
    return {
      users: [],
      showLoading: true
    };
  },

  methods: {
    goDetail: function goDetail(item) {
      console.log(item);
      this.$store.state.userId = item.userId;
      this.$router.push('/userPlay');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get('/search?keywords=' + this.value + '&type=1002&limit=10').then(function (res) {
      _this.users = res.data.result.userprofiles;
      _this.users.map(function (item) {
        var replaceReg = new RegExp(_this.value, 'g');
        var replaceString = '<span class="search-text">' + _this.value + '</span>';
        item.nickname = item.nickname.replace(replaceReg, replaceString);
      });
    });
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {
    moreUsers: function moreUsers(val) {
      var _this2 = this;

      if (val.length > 0) {
        this.showLoading = false;
        val.map(function (item) {
          _this2.users.push(item);
        });
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
  }, [(_vm.users.length === 0) ? _c('div', {
    staticClass: "flex"
  }, [_vm._v("无结果")]) : _c('div', _vm._l((_vm.users), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.avatarUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('div', {
      staticClass: "name",
      domProps: {
        "innerHTML": _vm._s(item.nickname)
      }
    }), _vm._v(" "), (item.signature !== '') ? _c('div', {
      staticClass: "signature"
    }, [_vm._v("\n            " + _vm._s(item.signature) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "btn"
    }, [_c('van-button', {
      attrs: {
        "round": "",
        "type": "danger",
        "size": "mini",
        "mpcomid": '0_' + index
      }
    }, [_vm._v("+ 关注")])], 1)])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1e2126e7", esExports)
  }
}

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Videos_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_96323eee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Videos_vue__ = __webpack_require__(145);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-96323eee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Videos_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_96323eee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Videos_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Videos.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Videos.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96323eee", Component.options)
  } else {
    hotAPI.reload("data-v-96323eee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
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
  name: "MV",
  components: {},
  props: {
    value: {
      type: String
    },
    moreVideos: {
      type: Array
    }
  },
  data: function data() {
    return {
      videos: [],
      showLoading: true
    };
  },

  methods: {
    goDetail: function goDetail(item) {
      console.log(item);
      this.$store.state.videoId = item.vid;
      this.$router.push('/videoPlay');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get('/search?keywords=' + this.value + '&type=1014&limit=10').then(function (res) {
      _this.showLoading = false;
      if (res.result) {
        _this.videos = res.data.result.videos;
      }
    });
  },
  created: function created() {},

  filters: {
    fiexd: function fiexd(val) {
      if ((val / 60 / 1000).toString().includes('.')) {
        return '0' + (val / 60 / 1000).toString().substr(0, 1) + ':' + (val / 60 / 1000).toString().substr(2, 2);
      } else {
        return '0' + (val / 60 / 1000).toString().substr(0, 1) + ':' + '00';
      }
    },
    toFiexd: function toFiexd(val) {
      return val.toString().substr(0, 2);
    }
  },
  computed: {},
  watch: {
    moreVideos: function moreVideos(val) {
      var _this2 = this;

      if (val.length > 0) {
        this.showLoading = false;
        val.map(function (item) {
          _this2.videos.push(item);
        });
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
  }, [(_vm.videos.length === 0) ? _c('div', {
    staticClass: "flex"
  }, [_vm._v("无结果")]) : _c('div', _vm._l((_vm.videos), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "i-con"
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.coverUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "play"
    }, [_c('div', {
      staticClass: "icon"
    }, [_c('van-icon', {
      attrs: {
        "name": "play",
        "color": "",
        "mpcomid": '0_' + index
      }
    })], 1), _vm._v(" "), _c('div', [(item.playTime > 100000) ? _c('span', [_vm._v("\n              " + _vm._s(_vm._f("toFiexd")(item.playTime)) + "万\n            ")]) : _c('span', [_vm._v("\n              " + _vm._s(item.playTime) + "\n            ")])])])]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('div', {
      staticClass: "name"
    }, [(item.type === 0) ? _c('div', {
      staticClass: "mv"
    }, [_vm._v("MV")]) : _vm._e(), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _c('div', {
      staticClass: "d-item"
    }, [_c('div', {
      staticClass: "time"
    }, [_vm._v("\n              " + _vm._s(_vm._f("fiexd")(item.durationms)) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "user"
    }, [(index > 0) ? _c('div', [_vm._v("by ")]) : _vm._e(), _vm._v(" "), _vm._l((item.creator), function(item1, index1) {
      return _c('div', {
        key: index1
      }, [_vm._v("\n                " + _vm._s(item1.userName) + "\n              ")])
    })], 2)])])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-96323eee", esExports)
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Radio_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_61f7094c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Radio_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61f7094c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Radio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_61f7094c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Radio_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/search/Radio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61f7094c", Component.options)
  } else {
    hotAPI.reload("data-v-61f7094c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Radio",
  components: {},
  props: {
    value: {
      type: String
    },
    moreRadios: {
      type: Array
    }
  },
  data: function data() {
    return {
      radios: [],
      showLoading: true
    };
  },

  methods: {
    goDetail: function goDetail(item) {
      console.log(item);
      this.$store.state.radioId = item.id;
      this.$router.push('/radioPlay');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.get('/search?keywords=' + this.value + '&type=1009&limit=50').then(function (res) {
      _this.radios = res.data.result.djRadios;
      _this.radios.map(function (item) {
        var replaceReg = new RegExp(_this.value, 'g');
        var replaceString = '<span class="search-text">' + _this.value + '</span>';
        item.name = item.name.replace(replaceReg, replaceString);
      });
    });
  },
  created: function created() {},

  filters: {},
  computed: {},
  watch: {
    moreRadios: function moreRadios(val) {
      var _this2 = this;

      if (val.length > 0) {
        this.showLoading = false;
        val.map(function (item) {
          _this2.radios.push(item);
        });
      }
    }
  },
  directives: {}
});

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.radios.length === 0) ? _c('div', {
    staticClass: "flex"
  }, [_vm._v("无结果")]) : _c('div', _vm._l((_vm.radios), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
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
      staticClass: "desc"
    }, [_c('div', {
      staticClass: "name",
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "d-item"
    }, [_c('div', {
      staticClass: "d-name"
    }, [_vm._v("\n            " + _vm._s(item.dj.nickname) + "\n          ")])])])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-61f7094c", esExports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "w-content"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "t-search"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "swipeable": true,
      "animated": true,
      "mpcomid": '17'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "单曲",
      "mpcomid": '4'
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "all"
  }, [_c('van-icon', {
    attrs: {
      "name": "play-circle-o",
      "size": "36rpx",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', [_vm._v("播放全部")])], 1), _vm._v(" "), _vm._l((_vm.searchSongs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.play(item, index)
        }
      }
    }, [_c('div', [_c('div', {
      staticClass: "name"
    }, [_vm._v("\n                    " + _vm._s(item.name) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "i-desc"
    }, [_vm._l((item.artists), function(item1, index1) {
      return _c('div', {
        key: index1,
        staticClass: "d-name"
      }, [_c('rich-text', {
        attrs: {
          "nodes": item1.name,
          "mpcomid": '2_' + index + '-' + index1
        }
      }), _vm._v("\n                       "), (index1 !== item.artists.length - 1) ? _c('span', [_vm._v("/ ")]) : _vm._e()], 1)
    }), _vm._v(" "), _c('div', {
      staticClass: "i-name"
    }, [_vm._v("\n                       - " + _vm._s(item.album.name) + "\n                    ")])], 2)]), _vm._v(" "), _c('div', {
      staticClass: "icon"
    }, [_c('van-icon', {
      attrs: {
        "name": "play-circle-o",
        "size": "36rpx",
        "mpcomid": '3_' + index
      }
    })], 1)])
  })], 2)]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "专辑",
      "mpcomid": '6'
    }
  }, [_c('album', {
    attrs: {
      "value": _vm.value,
      "moreAlbums": _vm.moreAlbums,
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "歌手",
      "mpcomid": '8'
    }
  }, [_c('singer', {
    attrs: {
      "value": _vm.value,
      "moreSingers": _vm.moreSingers,
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "歌单",
      "mpcomid": '10'
    }
  }, [_c('sheet', {
    attrs: {
      "value": _vm.value,
      "moreSheets": _vm.moreSheets,
      "mpcomid": '9'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "用户",
      "mpcomid": '12'
    }
  }, [_c('user', {
    attrs: {
      "value": _vm.value,
      "moreUsers": _vm.moreUsers,
      "mpcomid": '11'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "视频",
      "mpcomid": '14'
    }
  }, [_c('mv', {
    attrs: {
      "value": _vm.value,
      "moreVideos": _vm.moreVideos,
      "mpcomid": '13'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "电台",
      "mpcomid": '16'
    }
  }, [_c('radios', {
    attrs: {
      "value": _vm.value,
      "moreRadios": _vm.moreRadios,
      "mpcomid": '15'
    }
  })], 1)], 1)], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-27a846d2", esExports)
  }
}

/***/ })

},[121]);