<template>
  <div>
    <div class="content">
      <div class="flex" v-if="videos.length === 0">无结果</div>
      <div v-else>
        <div class="item" v-for="(item, index) in videos" :key="index" @click="goDetail(item)">
          <div class="i-con">
            <div class="img">
              <img :src="item.coverUrl" alt="">
            </div>
            <div class="play">
              <div class="icon">
                <van-icon name="play" color=""></van-icon>
              </div>
              <div>
              <span v-if="item.playTime > 100000">
                {{item.playTime | toFiexd}}万
              </span>
                <span v-else>
                {{item.playTime}}
              </span>
              </div>
            </div>
          </div>
          <div class="desc">
            <div class="name">
              <div class="mv" v-if="item.type === 0">MV</div>
              <div>{{item.title}}</div>
            </div>
            <div class="d-item">
              <div class="time">
                {{item.durationms | fiexd}}
              </div>
              <div class="user">
                <div v-if="index > 0">by&nbsp;</div>
                <div v-for="(item1, index1) in item.creator" :key="index1">
                  {{item1.userName}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
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
    data() {
      return {
        videos: [],
        showLoading: true
      }
    },
    methods: {
      goDetail(item) {
        console.log(item)
        this.$store.state.videoId = item.vid
        this.$router.push('/videoPlay')
      }
    },
    mounted() {
      this.$fly.get(`/search?keywords=${this.value}&type=1014&limit=10`)
        .then(res => {
          this.showLoading = false
          if (res.result) {
            this.videos = res.data.result.videos
          }
        })
    },
    created() {

    },
    filters: {
      fiexd(val) {
        if ((val / 60 / 1000).toString().includes('.')) {
          return '0' + (val / 60 / 1000).toString().substr(0, 1) + ':' + (val / 60 / 1000).toString().substr(2, 2)
        } else {
          return '0' + (val / 60 / 1000).toString().substr(0, 1) + ':' + '00'
        }
      },
      toFiexd (val) {
        return val.toString().substr(0, 2)
      }
    },
    computed: {},
    watch: {
      moreVideos (val) {
        if (val.length > 0) {
          this.showLoading = false
          val.map(item => {
            this.videos.push(item)
          })
        }
      }
    },
    directives: {}
  }
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120rpx;
  }

  .item {
    display: flex;
    align-items: center;
    margin-left: 20rpx;
    margin-top: 20rpx;
    position: relative;
    .i-con {
      position: relative;
      .img {
        width: 200rpx;
        height: 120rpx;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .play {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 20rpx;
        color: #fff;
        .icon {
          position: relative;
          top: 2rpx;
        }
      }
    }


    .desc {
      margin-left: 20rpx;
      width: 500rpx;

      .name {
        font-size: 28rpx;
        display: flex;
        align-items: center;
        .mv {
          padding:0 8rpx;
          color: #c10d0d;
          font-size: 24rpx;
          border: 1rpx solid #c10d0d;
          margin-right: 10rpx;
        }
      }

      .d-item {
        color: #ccc;
        display: flex;
        align-items: center;

        .user {
          margin-left: 20rpx;
          display: flex;
          align-items: center;

        }
      }

    }

    .btn {
      position: absolute;
      right: 40rpx;
    }
  }
</style>
