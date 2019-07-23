<config>
  {
  "navigationBarTitleText": "播放歌曲",
  "usingComponents": {
  "van-icon": "../../native/vant/icon/index",
  "van-slider": "../../native/vant/slider/index",
  "van-tab": "../../native/vant/tab/index",
  "van-tabs": "../../native/vant/tabs/index"
  },
  "onReachBottomDistance": 50
  }
</config>
<template>
  <div class="container">
    <div class="top">
      <div class="t-desc">
        <div class="songName">
          {{song.name}}
        </div>
        <div class="name" v-if="!Array.isArray(detailItem.name)">
          {{detailItem.name}}
        </div>
        <div class="flex">
          <div class="name" v-if="Array.isArray(detailItem.name)" v-for="(item3, index3) in detailItem.name"
               :key="index3">
            <div class="n-item">
              {{item3.name}} <span v-if="index3 !== detailItem.name.length - 1">-</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="i-con" v-if="changeIndex === 0">
      <div class="img">
        <img :src="alPic" alt="" :class="{pause: isPlay === false }">
      </div>
    </div>
    <div class="slider">
      <div class="start">
        {{nowTime}}
      </div>
      <div class="slider-item">
        <slider block-size="14" block-color="#ffad36" backgroundColor="#d8d8d8" activeColor="#c10d0d"
                @change="sliderChange" step="1" :value="sliderProgress"/>
      </div>
      <div class="duration">
        {{totalTime}}
      </div>
    </div>
    <div class="audio"></div>
    <div class="play">
      <div class="p-item" @click="changeLoop">
        <img src="../../icons/order.svg" alt="" v-if="loop === 1">
        <img src="../../icons/one.svg" alt="" v-else-if="loop === 2">
        <img src="../../icons/random.svg" alt="" v-else-if="loop === 3">
      </div>
      <div class="p-item" @click="preSong">
        <img src="../../icons/pre.svg" alt="">
      </div>
      <div class="p-item p-play" @click="pause(isPlay)">
        <img src="../../icons/pause.svg" alt="" v-if="isPlay">
        <img src="../../icons/play.svg" alt="" v-else>
      </div>
      <div class="p-item" @click="nextSong">
        <img src="../../icons/next.svg" alt="">
      </div>
      <div @click="collection(isCollection)">
        <van-icon name="like-o" size="60rpx" color="#fff" v-if="!isCollection"></van-icon>
        <van-icon name="like" size="60rpx" color="#fff" v-else></van-icon>
      </div>
    </div>

  </div>

</template>

<script>
  import lyricL from './LyricL'

  export default {
    name: "Player",
    components: {
      lyricL
    },
    props: {},
    data() {
      return {
        name: '',
        song: {},
        currentIndex: 0,
        songs: [],
        url: '',
        slider: 0,
        nowTime: 0,
        duration: 0,
        alPic: '', // 专辑封面
        isPlay: true, // 是否播放
        isCollection: false, // 是否收藏
        loop: 1, // 播放模式 1代表顺序播放 2代表单曲循环 3代表随机播放
        isFoot: false, // 是否缩放到底部
        lyricL: '', // 歌词
        changeIndex: 0, // 歌曲下标
        id: '', // 歌手id
        alId: '', // 专辑id
        innerAudioContext: null, // 音频对象
        totalTime: 0
      }
    },
    methods: {
      getSongUrl() {
        this.$fly.get(`/song/url?id=${this.song.id}`)
            .then(res => {
              this.url = res.data.data[0].url
              this.innerAudioContext = wx.createInnerAudioContext()
              // 设置音频播放来源
              this.innerAudioContext.src = this.url
              this.innerAudioContext.onCanplay((res) => {
                this.isPaly = true
                this.innerAudioContext.play()
              })
              // 音频自然播放结束事件
              this.innerAudioContext.onEnded((res) => {
                // 当音频播放结束后，将滑动条滑到末尾
                this.sliderProgress = 100
                this.isPaly = false
                  if (this.loop === 1) {
                    this.currentIndex ++
                    this.innerAudioContext.destroy()
                    this.innerAudioContext
                    this.song = this.songs[this.currentIndex]
                    this.getSongUrl()
                    this.getAlPic()
                  }
                  if (this.loop === 2) {
                    this.innerAudioContext.destroy()
                    this.innerAudioContext
                    this.song = this.songs[this.currentIndex]
                    this.getSongUrl()
                    this.getAlPic()
                  }
                  if (this.loop === 3) {
                    this.currentIndex = parseInt(Math.random() * this.songs.length)
                    this.innerAudioContext.destroy()
                    this.innerAudioContext
                    this.song = this.songs[this.currentIndex]
                    this.getSongUrl()
                    this.getAlPic()
                  }
              })
              // 音频播放中
              this.innerAudioContext.onTimeUpdate((res) => {
                let duration = this.innerAudioContext.duration
                // 获取音频播放时长，单位s，保留小数点后六位，转为分钟
                this.totalTime = this.secToTime(duration)
                let currentTime = this.innerAudioContext.currentTime
                // 设置当前音频播放位置
                this.nowTime = this.secToTime(currentTime)
                // 设置滑动条位置，小数计算不精确，转为整数计算
                this.sliderProgress = (currentTime * 1000000) / (duration * 1000000) * 100

              })
            })
      },
      pause(isPlay) {
        this.isPlay = !this.isPlay
        if (isPlay) {
          this.innerAudioContext.pause()
        } else {
          this.innerAudioContext.play()
        }
      },
      collection(isCollection) {
        this.isCollection = !this.isCollection
      },
      changeLoop() {
        this.loop++
        if (this.loop === 4) this.loop = 1
        if (this.loop === 1) {
          wx.showToast({
            title: '已切换成顺序播放',
            icon: 'none'
          })
        }
        if (this.loop === 2) {
          wx.showToast({
            title: '已切换成单曲循环',
            icon: 'none'
          })
        }
        if (this.loop === 3) {
          wx.showToast({
            title: '已切换成随机播放',
            icon: 'none'
          })
        }
      },
      // 获取专辑封面
      getAlPic() {
        this.$fly.get(`/album?id=${this.song.al.id}`).then(res => {
          this.alPic = res.data.album.picUrl
        })
      },
      // 上一首
      preSong() {
        if (Number(this.currentIndex) === 0) {
          wx.showToast({
            title: '已经是第一首啦',
            icon: 'none'
          })
        } else {
          if (this.loop === 1) {
            this.currentIndex --
          }
          if (this.loop === 3) {
            this.currentIndex = parseInt(Math.random() * this.songs.length)
          }
          this.isPlay = true
          this.innerAudioContext.destroy()
          this.innerAudioContext
          this.song = this.songs[this.currentIndex]
          this.getSongUrl()
          this.getAlPic()
        }
      },
      // 下一首
      nextSong() {
        if (Number(this.currentIndex) === this.songs.length - 1) {
          wx.showToast({
            title: '已经是最后一首啦',
            icon: 'none'
          })
        } else {
          if (this.loop === 1) {
            this.currentIndex ++
          }
          if (this.loop === 3) {
            this.currentIndex = parseInt(Math.random() * this.songs.length)
          }
          this.isPlay = true
          this.innerAudioContext.destroy()
          this.song = this.songs[this.currentIndex]
          this.getSongUrl()
          this.getAlPic()
        }
      },
      // 滑动条拖动
      sliderChange(e) {
        let duration = this.innerAudioContext.duration
        let currentTime = duration * e.target.value / 100
        if (currentTime < 10) {

          this.nowTime = '0:0' + currentTime
        }
        if (currentTime >= 10 && currentTime < 60) {

          this.nowTime = '0:' + currentTime
        }
        if (currentTime >= 60) {
          let m = (currentTime / 60).toString().substr(0, 1)
          if (m < 10) m = '0' + m
          let s = (currentTime % 60).toFixed(0)
          if (s < 10) s = '0' + s
          this.nowTime = `${m}:${s}`
        }
        // 音频快进
        this.innerAudioContext.seek(currentTime)
        // 设置滑动条位置
        this.sliderProgress = (currentTime * 1000000) / (duration * 1000000) * 100
        this.isPaly = true
        let val = e.target.value
        if (val === 100) {
          if (this.loop === 1) {
            this.currentIndex++
            this.song = this.songs[this.currentIndex]
            this.getSongUrl()
            this.getAlPic()
          }
          if (this.loop === 2) {
            this.innerAudioContex.currentTime = 0
            this.start = '0:00'
            this.innerAudioContex.play()
          }
          if (this.loop === 3) {
            this.currentIndex = parseInt(Math.random() * this.songs.length)
            this.song = this.songs[this.currentIndex]
            this.getSongUrl()
            this.getAlPic()
          }
        }
      },
      secToTime(s) {
        let t = ''
        if (s > -1) {
          let min = Math.floor(s / 60) % 60
          let sec = s % 60
          if (min < 10) {
            t = '0'
          }
          t += min + ':'
          if (sec < 10) {
            t += '0'
          }
          t += sec.toFixed(2).split('.')[0]
        }
        return t
      }
    },
    onLoad (options) {
      let detailId = options.detailId
      this.currentIndex = options.index
      this.alId = options.alId
      wx.showLoading({
        title: '加载中...'
      })
      this.$fly.get(`/artists?id=${detailId}`).then(res => {
        if (res.data) {
          wx.hideLoading()
          this.songs = res.data.hotSongs
          if (options.isSearch === '1') {
            // let arr = res.data.hotSongs.filter(item => {
            //   return item.name = options.music
            // })
            // this.song = arr[0]
            this.$set(this.song, 'id', options.id)
            this.$set(this.song, 'al', {})
            this.$set(this.song.al, 'id', options.alId)
          } else {
            this.song = res.data.hotSongs[this.currentIndex]
          }
          this.getSongUrl()
          this.getAlPic()
        }
      }).catch(err => {
        console.log(err)
        wx.hideLoading()
      })

    },
    mounted() {
    },
    filters: {
      toFiexd(val) {
        return val.toString().substr(0, 2)
      }
    },
    destroyed() {
      this.innerAudioContext.destroy()
    },
    computed: {
      detailItem() {
        return this.$store.state.detailItem
      }
    },
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .pause {
    animation-play-state: paused !important;
  }

  .flex {
    width: 30%;
    display: flex;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .container {
    height: 100vh;
    background: rgba(0, 0, 0, .3);

    .top {
      position: relative;
      top: 20rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40rpx;

      .t-icon {
        position: absolute;
        left: 40rpx;
      }

      .t-desc {
        width: 100%;
        text-align: center;

        .songName {
          font-size: 32rpx;
          color: #fff;
          margin-bottom: 8rpx;
        }

        .name {
          width: 100%;
          color: #ccc;
          font-size: 28rpx;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .i-con {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 100rpx;

      .img {
        width: 500rpx;
        height: 500rpx;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: rotate 20s infinite linear;
          position: relative;
        }
      }
    }

    .slider {
      position: relative;
      top: 200rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      font-size: 28rpx;

      .slider-item {
        width: 60%;
      }
    }

    .change {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 80rpx;

      .c-item {
        width: 50rpx;
        height: 10rpx;
        background: #fff;
        border-radius: 14rpx;
        margin-left: 20rpx;
      }
    }

    .audio {
      margin-top: 80rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .play {
      margin-top: 160rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .p-item {
        width: 60rpx;
        height: 60rpx;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .p-play {
        width: 100rpx;
        height: 100rpx;
      }
    }
  }

  .changeActive {
    height: 15rpx !important;
  }
</style>
