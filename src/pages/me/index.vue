<config>
  {
    "navigationBarTitleText": "我的",
    "usingComponents": {
    "van-icon": "../../native/vant/icon/index",
    "van-search": "../../native/vant/search/index",
    "van-tab": "../../native/vant/tab/index",
    "van-tabs": "../../native/vant/tabs/index",
    "van-cell-group": "../../native/vant/cell-group/index",
    "van-field": "../../native/vant/field/index",
    "van-button": "../../native/vant/button/index"
    }
  }
</config>

<template>
  <div class="me">
    <div v-if="user">
      <div class="content">
        <div class="img">
          <img :src="user.avatarUrl" alt="">
        </div>
        <div class="desc">
          <div class="name">
            {{user.nickname}}
          </div>
          <div class="type">
            Lv: {{user.userType}}
          </div>
        </div>
        <div class="sign">
          <div v-if="!isSign" class="s-item" @click="sign">签到</div>
          <div v-else class="s-item">已签到</div>
        </div>
      </div>
      <div class="container">
        <div class="c-item">
          <div class="num">
            {{dynamic}}
          </div>
          <div class="title">
            动态
          </div>
        </div>
        <div class="c-item">
          <div class="num">
            {{follow}}
          </div>
          <div class="title">
            关注
          </div>
        </div>
        <div class="c-item">
          <div class="num">
            {{fans}}
          </div>
          <div class="title">
            粉丝
          </div>
        </div>
        <div class="c-item" @click="edit">
          <div class="num">
            <van-icon name="edit" size="20rpx"></van-icon>
          </div>
          <div class="title">
            编辑资料
          </div>
        </div>
      </div>
      <div class="btn1">
        <van-button type="warning" @click="logout">退出登录</van-button>
      </div>
    </div>
    <div class="no-login" v-else>
      <div class="n-desc">
        您还没有登录喔
      </div>
      <div>
        <van-button type="info" size="small" @click="goLogin">立即登录</van-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Me",
    components: {},
    props: {},
    data() {
      return {
        user: null,
        isSign: false, // 是否签到
        dynamic: 0, // 动态
        follow: 0, // 关注
        fans: 0, // 粉丝
        userId: ''
      }
    },
    methods: {
      goLogin() {
        wx.navigateTo({
          url: '../login/index'
        })
      },
      // 签到
      sign() {
        this.$fly.get(`/daily_signin?type=1`).then(res => {
          console.log(res)
          if (res.data.code === 200) {
            wx.showToast({
              title: '签到成功'
            })
            this.isSign = true
          }
        })
      },
      logout() {
        this.$fly.get('/logout').then(res => {
          if (res.data.code === 200) {
            this.$store.state.user = null
            wx.removeStorageSync('user')
            wx.removeStorageSync('userId')
            wx.switchTab({
              url: '../index/Index'
            })
            wx.showToast({
              title: '退出成功'
            
            })
          }
        })

      },
      // 获取动态
      getDynamic() {
        this.$fly.get(`/user/event?uid=${this.userId}`).then(res => {
          if (res.data.code === 200) {
            this.dynamic = res.data.events.length
          }
        })
      },
      // 获取关注
      getFollow() {
        this.$fly.get(`/user/follows?uid=${this.userId}`).then(res => {
          if (res.data.code === 200) {
            this.follow = res.data.follow.length
          }
        })
      },
      // 获取粉丝
      getFans() {
        this.$fly.get(`/user/followeds?uid=${this.userId}`).then(res => {
          if (res.data.code === 200) {
            this.fans = res.data.followeds.length
          }
        })
      },
      // 编辑资料
      edit() {
        wx.navigateTo({
          url: '../edit/index'
        })
      },
      getUser() {
        this.$fly.get(`/user/detail?uid=${this.userId}`).then(res => {
          if (res.data) {
            this.user = res.data.profile
            this.isSign = res.pcSign
            wx.setStorageSync('user', JSON.stringify(res.profile))
          }
        })
      }
    },
    mounted() {

    },
    created() {
      if (wx.getStorageSync('userId') !==''){
        this.userId = wx.getStorageSync('userId')
        this.getDynamic()
        this.getFollow()
        this.getFans()
        this.getUser()
      }
    },
    filters: {},
    computed: {

    },
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .me {
    .no-login {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50%;

      .n-desc {
        font-size: 28rpx;
        margin: 20rpx 0;
      }
    }

    .content {
      display: flex;
      align-items: center;
      margin-top: 50rpx;
      margin-left: 40rpx;
      position: relative;

      .img {
        width: 120rpx;
        height: 120rpx;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .desc {
        display: flex;
        flex-direction: column;
        align-items: center;

        .name {
          margin-left: 40rpx;
          font-size: 32rpx;
        }

        .type {
          text-align: center;
          width: 100rpx;
          background: #eee;
          border-radius: 14rpx;
          position: relative;
          top: 12rpx;
        }
      }

      .sign {
        position: absolute;
        right: 40rpx;

        .s-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100rpx;
          border-radius: 14rpx;
          background: #ccc;
          color: #fff;
        }
      }
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 60rpx;

      .c-item {
        text-align: center;

        .num {
          font-size: 30rpx;
        }

        .title {
          color: #aaa;
        }
      }
    }

    .btn1 {
      display: flex;
      justify-content: center;
      margin-top: 100rpx;
    }
  }
</style>
