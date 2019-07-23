<config>
  {
    "navigationBarTitleText": "歌手列表",
    "usingComponents": {
    "van-icon": "../../native/vant/icon/index",
    "van-search": "../../native/vant/search/index",
    "van-tab": "../../native/vant/tab/index",
    "van-tabs": "../../native/vant/tabs/index"
    },
    "onReachBottomDistance": 50
  }
</config>

<template>
  <scroll-view scroll-y>
    <div class="wrapper">
      <div class="w-content">
        <div class="top">
          <div class="t-search">
            <van-search :value="value"></van-search>
          </div>
        </div>
        <div class="container">
          <van-tabs :active="active" :swipeable="true" :animated="true">
            <van-tab title="单曲">
              <div class="content">
                <div class="all">
                  <van-icon name="play-circle-o" size="36rpx"></van-icon>
                  <div>播放全部</div>
                </div>
                <div class="item" v-for="(item, index) in searchSongs" :key="index" @click="play(item,index)">
                  <div>
                    <div class="name">
                      {{item.name}}
                    </div>
                    <div class="i-desc">
                      <div v-for="(item1, index1) in item.artists" :key="index1" class="d-name">
                        <rich-text :nodes="item1.name"></rich-text>
                        &nbsp;<span
                        v-if="index1 !== item.artists.length - 1">/&nbsp;</span>
                      </div>
                      <div class="i-name">
                        &nbsp;- {{item.album.name}}
                      </div>
                    </div>
                  </div>
                  <div class="icon">
                    <van-icon name="play-circle-o" size="36rpx"></van-icon>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="专辑">
              <album :value="value" :moreAlbums="moreAlbums"></album>
            </van-tab>
            <van-tab title="歌手">
             <singer :value="value" :moreSingers="moreSingers"></singer>
            </van-tab>
            <van-tab title="歌单">
              <sheet :value="value" :moreSheets="moreSheets"></sheet>
            </van-tab>
            <van-tab title="用户">
               <user :value="value" :moreUsers="moreUsers"></user>
            </van-tab>
            <van-tab title="视频">
              <mv :value="value" :moreVideos="moreVideos"></mv>
            </van-tab>
            <van-tab title="电台">
              <radios :value="value" :moreRadios="moreRadios"></radios>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </scroll-view>

</template>

<script>
  import album from '../../components/search/Album'
  import singer from '../../components/search/Singer'
  import sheet from '../../components/search/Sheet'
  import user from '../../components/search/Users'
  import mv from '../../components/search/Videos'
  import radios from '../../components/search/Radio'

  export default {
    name: "SearchList",
    components: {
      album,
      singer,
      sheet,
      user,
      mv,
      radios
    },
    props: {},
    data() {
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
        moreRadios: [], // 更多电台
      }
    },
    onReachBottom() {
      if (this.active === 0) {
        this.getMoreSongs()
      }
      if (this.active === 1) {
        this.getMoreAlbums()
      }
      if (this.active === 2) {
        this.getMoreSingers()
      }
      if (this.active === 3) {
        this.getMoreSheets()
      }
      if (this.active === 4) {
        this.getMoreUsers()
      }
      if (this.active === 5) {
        this.getMoreVideos()
      }
    },
    methods: {
      play(item, index) {
        this.$fly.get(`/song/detail?ids=${item.id}`).then(res => {
          if (res.data.code === 200) {
            let song = res.data.songs[0]
            let detailId = item.artists[0].id
            let name = item.artists
            this.$store.state.detailItem.name = item.artists
            let id = item.id
            let alId = song.al.id
            let url = `../player/index?id=${id}&alId=${alId}&detailId=${detailId}&index=${index}&name=${name}&isSearch=1&music=${item.name}`
            wx.navigateTo({
              url
            })

          }
        })
      },
      getMoreSongs() {
        wx.showLoading({
          title: '加载中...'
        })
        this.$fly.get(`/search?keywords=${this.value}&limit=${this.limit}&offset=${this.offset * this.limit}`)
          .then(res => {
            let result = res.data.result.songs
            if (result.length > 0) {
              wx.hideLoading()
              this.showLoading = false
              this.offset++
              result.map((item => {
                this.searchSongs.push(item)
              }))
            }
          }).catch(err => {
          console.log(err)
        })
      },
      getMoreAlbums() {
        this.$fly.get(`/search?keywords=${this.value}&limit=${this.limit}&offset=${this.offset * this.limit}&type=10`)
          .then(res => {
            let result = res.data.result.albums
            if (result.length > 0) {
              this.showLoading = false
              this.offset++
              result.map((item => {
                this.moreAlbums.push(item)
              }))
            }
          })
      },
      getMoreSingers() {
        this.$fly.get(`/search?keywords=${this.value}&limit=${this.limit}&offset=${this.offset * this.limit}&type=100`)
          .then(res => {
            let result = res.data.result.artists
            if (result.length > 0) {
              this.showLoading = false
              this.offset++
              result.map((item => {
                this.moreSingers.push(item)
              }))
            }
          })
      },
      getMoreSheets() {
        this.$fly.get(`/search?keywords=${this.value}&limit=${this.limit}&offset=${this.offset * this.limit}&type=1000`)
          .then(res => {
            let result = res.data.result.playlists
            if (result.length > 0) {
              this.showLoading = false
              this.offset++
              result.map((item => {
                this.moreSheets.push(item)
              }))
            }
          })
      },
      getMoreUsers() {
        this.$fly.get(`/search?keywords=${this.value}&limit=${this.limit}&offset=${this.offset * this.limit}&type=1002`)
          .then(res => {
            let result = res.data.result.userprofiles
            if (result.length > 0) {
              this.showLoading = false
              this.offset++
              result.map((item => {
                this.moreUsers.push(item)
              }))
            }
          })
      },
      getMoreVideos() {
        this.$fly.get(`/search?keywords=${this.value}&limit=${this.limit}&offset=${this.offset * this.limit}&type=1014`)
          .then(res => {
            let result = res.data.result.videos
            if (result.length > 0) {
              this.showLoading = false
              this.offset++
              result.map((item => {
                this.moreVideos.push(item)
              }))
            }
          })
      }
    },
    onLoad(options) {
      this.searchSongs = options.searchSongs
      this.value = options.searchValue
      this.$store.state.keywords = options.searchValue
    },
    mounted() {
    },
    created() {

    },
    filters: {},
    computed: {
      searchSongs() {
        return this.$store.state.searchSongs
      },
      value: {
        get() {
          return this.$store.state.searchValue
        },
        set() {

        }
      }
    },
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .wrapper {
    bottom: 20rpx;
    width: 100%;
    top: 10rpx;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120rpx;
  }

  .top {
    width: 100%;
    display: flex;
    align-items: center;

    .t-icon {
      margin-left: 20rpx;
    }

    .t-search {
      flex: 2;
    }
  }

  .content {
    margin-top: 40rpx;

    .all {
      display: flex;
      align-items: center;
      margin-left: 20rpx;

      div {
        margin-left: 20rpx;
        font-size: 28rpx;
      }
    }

    .item {
      display: flex;
      align-items: center;
      position: relative;
      margin: 20rpx;

      .icon {
        position: absolute;
        right: 40rpx;
        top: 30rpx;
      }

      .name {
        margin: 10rpx 0;
        font-size: 36rpx;
      }

      .i-desc {
        display: flex;
        align-items: center;
        color: #ccc;
        font-size: 28rpx;

        .d-name {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .i-name {

        }
      }
    }
  }
</style>
