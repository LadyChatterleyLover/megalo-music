<config>
  {
  "usingComponents": {
    "van-button": "../../native/vant/button/index",
    "van-search": "../../native/vant/search/index"
    }
  }
</config>

<template>
  <div>
    <search v-if="showSearch" :showSearch.sync="showSearch"></search>
    <div v-else>
      <div class="top">
        <div class="t-title">
          <h3>音乐馆</h3>
        </div>
        <div class="t-search">
          <van-search :value="value"
                      placeholder="请输入搜索关键词"
                      shape='round'
                      @focus="onFocus"
          >
          </van-search>
        </div>
        <div class="t-img">
          <div @click="onSearch">搜索</div>
          <img src="../../icons/music.svg" alt="" @click="clickImg">
        </div>
      </div>
      <div class="swiper">
        <swiper :indicator-dots="indicatorDots"
                :autoplay="autoplay"
                :interval="interval"
                :duration="duration"
                indicator-active-color="#fff"
                :circular="circular"
        >
          <swiper-item v-for="(item, index) in banners" :key="item.encodeId">
            <img :src="item.pic" class="slide-image"/>
          </swiper-item>
        </swiper>
      </div>
      <div class="nav">
        <div class="nav-item">
          <div class="name">
            每日推荐
          </div>
          <div class="n-icon">
            <img src="../../icons/rili.svg" alt="">
          </div>
        </div>
        <div class="nav-item" >
          <div class="name">
            歌单
          </div>
          <div class="n-icon">
            <img src="../../icons/song.svg" alt="">
          </div>
        </div>
        <div class="nav-item">
          <div class="name">
            排行榜
          </div>
          <div class="n-icon">
            <img src="../../icons/rank.svg" alt="">
          </div>
        </div>
        <div class="nav-item" >
          <div class="name">
            电台
          </div>
          <div class="n-icon">
            <img src="../../icons/radio.svg" alt="">
          </div>
        </div>
        <div class="nav-item">
          <div class="name">
            直播
          </div>
          <div class="n-icon">
            <img src="../../icons/zhibo.svg" alt="">
          </div>
        </div>
      </div>
      <div>
        <card title="推荐歌单" :content="rankList" desc="歌单广场" v-if="rankList.length > 0"></card>
        <card title="音乐新势力" :content="newMusic" desc="新音乐" v-if="newMusic.length > 0"></card>
        <card title="推荐电台" :content="djArr" desc="电台广场" v-if="djArr.length > 0"></card>
        <card title="推荐节目" :content="recommend" desc="更多节目" v-if="recommend.length > 0"></card>
      </div>
    </div>
  </div>
</template>

<script>
  import card from '../../components/hone/Card'
  import search from '../../components/search/Search'
  export default {
    components: {
      card,
      search
    },
    data() {
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
        recommend: [], // 推荐节目
      }
    },
    methods: {
      getBanner() {
        this.$fly.get('/banner?type=2').then(response => {
          let res = response.data
          if (res.code === 200) {
            this.banners = res.banners
          }
        })
      },
      onFocus() {
        this.showSearch = true
      },
      clickImg () {
        wx.showToast({
          title: '听歌识曲功能暂未开放喔',
          icon: 'none'
        })
      },
      getRank() {
        wx.showLoading({
          title: '加载中...'
        })
        this.$fly.get('/personalized').then(res => {
          if (res.data) {
            wx.hideLoading()
            this.rankList = res.data.result
          }
        })
      },
      getNewMusic() {
        this.$fly.get('/personalized/newsong').then(res => {
          this.newMusic = res.data.result
        })
      },
      getDJ() {
        this.$fly.get('/personalized/djprogram').then(res => {
          this.djArr = res.data.result
        })
      },
      getRecommend() {
        this.$fly.get('/program/recommend').then(res => {
          this.recommend = res.data.programs
        })
      },
    },
    mounted() {
      this.getBanner()
      this.getRank()
      this.getNewMusic()
      this.getDJ()
      this.getRecommend()
    },

    created() {

      // let app = getApp()
    }
  }
</script>

<style scoped lang="scss">
  .top {
    display: flex;
    top: 120rpx;
    .t-title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150rpx;
    }
    .t-search {
      display: flex;
      align-items: center;
      flex:1;
    }
    .t-img {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20rpx;
      img {
        width: 60rpx;
        height: 60rpx;
        margin-left: 20rpx;
      }
    }
  }
  .swiper {
    margin-top: 20rpx;
    .slide-image {
      width: 94%;
      margin-left: 3%;
      border-radius: 12rpx;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    margin-top: 40rpx;

    .nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .n-icon {
        width: 50rpx;
        height: 50rpx;
        margin-top: 10rpx;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
