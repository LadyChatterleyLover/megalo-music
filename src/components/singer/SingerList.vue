<config>
  {
    "onReachBottomDistance": 100
  }
</config>
<template>
  <div>
    <div ref="wrapper" class="wrapper">
      <div class="w-content" :class="{pad: active !== 0}">
        <div class="item" v-for="(item, index) in list" :key="index" @click="goToDetail(item)">
          <div class="img">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="name">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="l-container">
      <scroll-view scroll-x  class="letter" v-if="active > 0">
        <div class="l-content">
          <div class="l-item" v-for="(item, index) in letters"  :key="index"
               :class="{active: index === activeIndex}">
            <div @click="clickItem(item, index)">
              {{item}}
            </div>
          </div>
        </div>
      </scroll-view>
    </div>

  </div>

</template>

<script>
  export default {
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
    data() {
      return {
        letters: ['热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
          'L', 'M', 'N', 'O', "P", 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        activeIndex: 0,
        showLoading: true,
        offset: 1, // 请求数据分页偏移量
        limit: 10, // 每页多少条数据
        activeLetter: '热',
        list: []

      }
    },
    methods: {
      clickItem(item, index) {
        this.activeIndex = index
        this.activeLetter = item
        if (item !== '热') {
          this.$fly.get(`/artist/list?cat=${this.cat}&initial=${item}&limit=${this.limit}`)
            .then(res => {
              this.list = res.data.artists
            })
        } else {
          this.$fly.get(`/artist/list?cat=${this.cat}&limit=${this.limit}`)
            .then(res => {
              this.list = res.data.artists
            })
        }
      },
      goToDetail(item) {
        this.$store.state.detailItem = item
        wx.navigateTo({
          url: '../singerDetail/index'
        })
      },
      getMoreData () {
        wx.showLoading({
          title: '加载中...'
        })
        this.$fly.get(`/artist/list?cat=${this.cat}&limit=${this.limit}&offset=${this.offset*this.limit}`)
          .then(res => {
            if (res.data.artists.length > 0) {
              wx.hideLoading()
              this.showLoading = false
              this.offset ++
              this.list = [...this.list, ...res.data.artists]
            }
          }).catch(err => {
          console.log(err)
          wx.hideLoading()
        })
      }
    },
    mounted() {
      wx.showLoading({
        title: '加载中...'
      })
      this.$fly.get(`/artist/list?cat=${this.cat}&limit=${this.limit}`).then(res => {
        this.list = res.data.artists
        wx.hideLoading()
      })
    },
    onReachBottom () {
      this.getMoreData()
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
  .wrapper {
    .w-content {
      .title {
        color: #ccc;
        font-size: 28rpx;
        background: #eee;
        height: 60rpx;
        line-height: 60rpx;
        padding-left: 40rpx;
      }

      .item {
        display: flex;
        align-items: center;
        margin: 20rpx 40rpx;

        .img {
          width: 120rpx;
          height: 120rpx;
          margin-right: 40rpx;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .name {
          font-size: 26rpx;
        }
      }
    }
  }
  .l-container {
    position: fixed;
    top: 86rpx;
    width: 100%;
    z-index: 100;
    background: #fff;
    display: flex;
    align-items: center;
    /*margin: 0 40rpx;*/
    .letter {
      position: relative;
      top: -10rpx;
      .l-content {
        display: flex;
        align-items: center;
        .l-item {
          margin: 6rpx 0;
          padding: 4rpx;
          text-align: center;
          &:nth-child(2) {
            margin-left: 6rpx;
          }
          &:first-child {
            margin-left: 40rpx;
          }
          &:last-child {
            padding-right: 40rpx;
          }
        }
      }

    }
  }


  .active {
    background: #c10d0d;
    color: #fff;
  }

  .pad {
    padding-top: 120rpx !important;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120rpx;
  }
  .scroll-view {
    display: inline-block;
  }
</style>
