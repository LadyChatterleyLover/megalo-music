<config>
  {
    "usingComponents": {
    "van-search": "../../native/vant/search/index",
    "van-dialog": "../../native/vant/dialog/index",
    "van-icon": "../../native/vant/icon/index",
    "van-button": "../../native/vant/button/index"
    }
  }
</config>

<template>
  <div class="search">
    <div>
      <div class="s-top">
        <div class="s-search">
          <van-search
            :value="value"
            placeholder="请输入搜索关键词"
            shape="round"
            @search="onSearch"
            @cancel="onCancel"
            @change="onChange"
          >
          </van-search>
        </div>
        <div class="s-btn">
          <div @click="onSearch" v-if="showValue">搜索</div>
          <div @click="onCancel" v-else>取消</div>
        </div>
      </div>
      <search-panel v-if="showPanel" :searchRank="searchRank" :value="value"></search-panel>
      <div v-else>
        <div class="history" v-if="showHistory && searchArr.length > 0">
          <h3>
            搜索历史
          </h3>
          <div class="desc">
            <div v-for="(item, index) in searchArr" :key="index" class="item" @click="handleItem(item)">
              <div class="name">
                {{item.name}}
              </div>
            </div>
            <div class="d-icon" @click="clearHistory" style="font-size: 24rpx">
              清空历史
            </div>
          </div>
        </div>
        <div class="hot">
          <h3>
            热搜榜
          </h3>
          <div class="h-desc">
            <div class="h-item" v-for="(item, index) in hots" :key="index" @click="searchItem(item)">
              <div class="index" :class="{hotIndex: index < 3}">
                {{index + 1}}
              </div>
              <div class="name">
                <div>
                  {{item.first}}
                </div>
              </div>
              <div class="h-hot" v-if="index < 2">
                hot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import searchPanel from './SearchPanel'
  export default {
    name: "Search",
    components: {
      searchPanel
    },
    props: {
      showSearch: {
        type: Boolean
      }
    },
    data() {
      return {
        value: '',
        hots: [], // 热搜
        showList: false,
        searchList: [],
        recommend: {},
        flag: false,
        showValue: false,
        searchArr: [],
        showFlag: true, // 是否显示弹框
        showHistory: true, // 是否显示搜索历史
        searchValue: '',
        showPanel: false,
        searchRank: [], // 搜索建议
        searchSongs: [], // 搜索结果
      }
    },
    methods: {
      getHots() {
        this.$fly.get('/search/hot').then(res => {
          wx.showLoading({
            title: '加载中...'
          })
          if (res.data) {
            wx.hideLoading()
            this.hots = res.data.result.hots
          }
        })
      },
      searchItem(item) {
        this.$fly.get(`/search?keywords=${item.first}`)
          .then(res => {
            this.searchSongs = res.data.result.songs
            this.$store.state.searchSongs = res.data.result.songs
            this.$store.state.searchValue = item.first
            let url = `../../pages/searchList/index?searchSongs=${this.searchSongs}&searchValue=${item.first}`
            wx.navigateTo({
              url
            })
          })
        let obj = {
          name: item.first
        }
        let arr = JSON.parse(wx.getStorageSync('searchArr'))
        arr.push(obj)
        // arr = lodash.unionBy(arr, 'name')
        wx.setStorageSync('searchArr', JSON.stringify(arr));
      },
      onSearch() {
        this.$fly.get(`/search?keywords=${this.value}`)
          .then(res => {
            this.searchSongs = res.data.result.songs
            this.$store.state.searchSongs = res.result.songs
            this.$store.state.searchValue = this.value
            let url = `../../pages/searchList/index?searchSongs=${this.searchSongs}&searchValue=${this.searchValue}`
            wx.navigateTo({
              url
            })
          })
        let obj = {
          name: this.value
        }
        let arr = JSON.parse(wx.getStorageSync('searchArr'))
        arr.push(obj)
        wx.setStorageSync('searchArr', JSON.stringify(arr))
      },
      onCancel() {
        this.$emit('update:showSearch', false)
      },
      clearHistory() {
        wx.showModal({
          content: '确定清除搜索历史吗？',
          success: res=>{
            if (res.confirm) {
              this.showHistory = false
              let arr = []
              wx.setStorageSync('searchArr', JSON.stringify(arr))
              this.showFlag = true
            }
          }
        })
      },
      confirm() {
        this.showHistory = false
        let arr = []
        wx.setStorageSync('searchArr', JSON.stringify(arr))
      },
      handleItem(item) {
        this.$fly.get(`/search?keywords=${item.name}&limit=10`)
          .then(res => {
            this.$store.state.searchValue = item.name
            this.searchSongs = res.data.result.songs
            this.$store.state.searchSongs = res.data.result.songs
            let url = `../../pages/searchList/index?searchSongs=${this.searchSongs}&searchValue=${item.name}`
            wx.navigateTo({
              url
            })
            wx.navigateTo({
              url
            })
          })
      },
      onChange (e) {
        this.value = e.detail
        if (this.value !== '') {
          this.searchValue = this.value
          this.showValue = true
          this.$fly.get(`/search/suggest?keywords=${this.value}&type=mobile`)
            .then(res => {
              if (res) {
                this.searchRank = res.data.result.allMatch
                this.showPanel = true
              }
            })
        } else {
          this.showValue = false
          this.showPanel = false
        }
      }
    },
    onShow () {``
      if (wx.getStorageSync('searchArr')) {
        this.searchArr = JSON.parse(wx.getStorageSync('searchArr'))
      }
    },
    mounted() {
      if (wx.getStorageSync('searchArr')) {
        this.searchArr = JSON.parse(wx.getStorageSync('searchArr'))
      }
      this.getHots()
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {

    },
    directives: {}
  }
</script>

<style scoped lang="scss">
  .search {
    .s-top {
      display: flex;
      align-items: center;
      .s-btn {
        width: 100rpx;
      }
      .s-search {
        flex: 1;
      }
    }
    .hot, .history {
      h3 {
        margin: 30rpx;
        position: relative;
        top: 20rpx;
      }

      .desc {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 30rpx;
        flex-wrap: wrap;
        position: relative;

        .item {
          /*width: 30%;*/
          margin: 10rpx;
          text-align: center;

          .name {
            padding: 10rpx 20rpx;
            border-radius: 20rpx;
            background: #fff;
          }
        }

        .d-icon {
          position: absolute;
          top: -46rpx;
          right: 60rpx;
        }
      }
    }
  }

  .dialog {
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
  }

  .active {
    $color: #31c27c;
    color: $color;
  }

  .hotIndex {
    color: #C10D0D;
    font-size: 28rpx;
  }
  .history {
    background: #f9f9f9;
    .desc {
      .name {
        font-size: 28rpx;
      }
    }
  }
  .h-desc {
    .h-item {
      display: flex;
      align-items: center;
      margin: 10rpx 0 30rpx 10rpx;

      .index {
        margin-right: 20rpx;
        margin-left: 30rpx;
      }

      .name {
        margin-right: 20rpx;
      }

      .h-hot {
        font-style: italic;
        color: #c10d0d;
        font-size: 32rpx;
      }
    }
  }
</style>
