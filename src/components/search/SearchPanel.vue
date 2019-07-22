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
  <div class="home">
    <div class="content">
      <div class="value" @click="search(value)">
        搜索 "{{value}}"
      </div>
      <div class="line"></div>
      <div v-for="(item, index) in searchRank" :key="item.keyword" >
        <div class="item" @click="search(item)">
          <div class="search">
            <van-icon name="search"></van-icon>
          </div>
          <div>
            {{item.keyword}}
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
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
    data() {
      return {
        searchSongs: []
      }
    },
    methods: {
      search (item) {
        if (typeof item === 'object') {
          this.$fly.get(`/search?keywords=${item.keyword}&limit=10`)
            .then(res => {
              this.searchSongs = res.data.result.songs
              this.$store.state.searchSongs = res.data.result.songs
              this.$store.state.searchValue = item.keyword
              // this.$router.push({name: 'searchList', params: {searchSongs: this.searchSongs, searchValue:item.keyword}})
              let url = `../../pages/searchList/index?searchSongs=${this.searchSongs}&searchValue=${item.keyword}`
              wx.navigateTo({
                url
              })
            })
          let obj = {
            name: item.keyword
          }
          let arr = JSON.parse(wx.getStorageSync('searchArr'))
          arr.push(obj)
          wx.setStorageSync('searchArr', JSON.stringify(arr))
        } else {
          this.$fly.get(`/search?keywords=${item}`)
            .then(res => {
              this.searchSongs = res.data.result.songs
              this.$store.state.searchSongs = res.data.result.songs
              this.$store.state.searchValue = item
              let url = `../../pages/searchList/index?searchSongs=${this.searchSongs}&searchValue=${item}`
              wx.navigateTo({
                url
              })
            })
          let obj = {
            name: item
          }
          let arr = JSON.parse(wx.getStorageSync('searchArr'))
          arr.push(obj)
          wx.setStorageSync('searchArr', JSON.stringify(arr))
        }

      }
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .content {
    .value {
      color: skyblue;
      margin-left: 40rpx;
    }
    .line {
      background: #eee;
      width: 100%;
      height: 2rpx;
      margin: 10rpx 0;
    }
    .item {
      display: flex;
      align-items: center;
      margin:20rpx 40rpx;
      .search {
        margin-right: 20rpx;
      }
    }
  }
</style>
