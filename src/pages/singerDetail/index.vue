<config>
  {
    "navigationBarTitleText": "歌手详情",
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
  <div class="container" >
    <div class="top">
      <div class="name">
        {{detailItem.name}}
      </div>
    </div>
    <div class="img">
      <img :src="detailItem.picUrl" alt="">
      <div class="play">
        <div class="p-icon">
          <van-icon name="play-circle-o" size="32rpx"></van-icon>
        </div>
        <div class="p-desc" @click="playAll">
          随机播放全部
        </div>
      </div>
    </div>
    <div class="content" ref="wrapper">
      <div class="w-content">
        <div class="c-item" v-for="(item, index) in songs" :key="index">
          <div class="index">
            {{index+ 1}}
          </div>
          <div class="con">
            <div class="c-name">
              {{item.name}}
            </div>
            <div class="al" @click="goToPlay(item, index)">
              <div v-for="(item1, index1) in item.ar" :key="index1" class="a-name">
                {{item1.name}} <span v-if="index1 !== item.ar.length - 1">/</span>
                <span v-if="index1 === item.ar.length - 1">·&nbsp;</span>
              </div>
              <div class="al-name">
                {{item.al.name}}
              </div>
            </div>
            <div class="c-icon">
              <van-icon name="play-circle-o" size="36rpx"></van-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "SingerDetail",
    components: {},
    props: {},
    data() {
      return {
        songs: []
      }
    },
    methods: {
      goToPlay(item, index) {
        let name = item.name
        let detailId = this.detailItem.id
        let id = item.id
        let alId = item.al.id
        let url = `../player/index?id=${id}&alId=${alId}&detailId=${detailId}&index=${index}&name=${name}`
        wx.navigateTo({
          url
        })
      },
      playAll () {
        let index = parseInt(Math.random() * this.songs.length)
        let item = this.songs[index]
        let url = `../player/index?item=${item}&index=${index}&songs=${this.songs}`
        wx.navigateTo({
          url
        })
        // this.$router.push({name: 'player', params: {item: item,index: index, songs: this.songs}})
      }
    },
    mounted() {
      wx.showLoading({
        title: '加载中...'
      })
      this.$fly.get(`/artists?id=${this.detailItem.id}`).then(res => {
        if (res.data) {
          wx.hideLoading()
          this.songs = res.data.hotSongs
        }
      }).catch(err => {
        console.log(err)
        wx.hideLoading()
      })
    },
    created() {

    },
    filters: {},
    computed: {
      detailItem () {
        return this.$store.state.detailItem
      }
    },
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .container {
    .top {
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      .icon {
        position: absolute;
        left: 80rpx;
        top: 4rpx;
      }
      .name {
        font-size: 32rpx;
      }
    }
    .img {
      margin-top: 20rpx;
      margin-bottom: 40rpx;
      width:100%;
      height:400rpx;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .play {
        width: 400rpx;
        height: 50rpx;
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 40rpx;
        border-radius: 20rpx;
        background: #eee;
        left: 174rpx;
        .p-icon {
          display: flex;
          align-items: center;
          margin-right: 40rpx;
          margin-left: 80rpx;
          position: relative;
          top: 2rpx;
        }
      }
    }
    .content {
      padding-left: 40rpx;
      .w-content {
        .c-item {
          margin: 20rpx 0;
          position: relative;
          display: flex;
          align-items: center;
          .index {
            font-size: 28rpx;
            color: #ccc;
            margin-right: 30rpx;
          }
          .con {
            width: 82%;
            .c-name {
              font-size: 32rpx;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              width: 80%;
            }
            .al {
              display: flex;
              align-items: center;
              width: 90%;
              .a-name, .al-name {
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size: 24rpx;
              }
              color: #ccc;
            }
            .c-icon {
              position: absolute;
              right: 40rpx;
              top: 16rpx;
            }
          }
        }
      }
    }
  }

</style>

