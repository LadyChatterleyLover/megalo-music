<config>
  {
    "navigationBarTitleText": "登录",
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
  <div class="login">
    <div class="tab">
      <van-tabs :active="active">
        <van-tab title="手机号登录">
          <div class="desc">
            <van-cell-group>
              <van-field
                type="tel"
                left-icon="phone-o"
                label="手机号"
                required
                clearable
                placeholder="请输入手机号"
                :value="phone"
                @blur="onBlur1"
              ></van-field>
              <van-field
                type="password"
                :value="password"
                label="密码"
                left-icon="manager-o"
                required
                clearable
                placeholder="请输入密码"
                @blur="onBlur2"
              ></van-field>
            </van-cell-group>
          </div>
          <div class="btn">
            <van-button type="danger" @click="phoneLogin">立即登录</van-button>
            <van-button type="warning"  @click="register">立即注册</van-button>
          </div>
        </van-tab>
        <van-tab title="邮箱登录">
          <div class="desc">
            <van-cell-group>
              <van-field
                type="email"
                left-icon="phone-o"
                :value="email"
                label="邮箱"
                required
                clearable
                placeholder="请输入网易邮箱"
                @blur="onBlur3"
              ></van-field>
              <van-field
                type="password"
                :value="password2"
                label="密码"
                left-icon="envelop-o"
                required
                clearable
                placeholder="请输入密码"
                @blur="onBlur4"
              ></van-field>
            </van-cell-group>
          </div>
          <div class="btn">
            <van-button type="danger" @click="emailLogin">立即登录</van-button>
            <van-button type="warning"  @click="register">立即注册</van-button>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Login",
    components: {},
    props: {},
    data() {
      return {
        user: {},
        active: 0,
        phone: '',
        password: '',
        email: '',
        password2: ''
      }
    },
    methods: {
      onBlur1 (e) {
        this.phone = e.detail.value
      },
      onBlur2 (e) {
        this.password = e.detail.value
      },
      onBlur3 (e) {
        this.email = e.detail.value
      },
      onBlur4 (e) {
        this.password2 = e.detail.value
      },
      phoneLogin() {
        if (this.phone === '') {
          wx.showToast({
            title: '电话号码不能为空',
            icon: 'none'
          })
          return
        }
        if (this.password === '') {
          wx.showToast({
            title: '密码不能为空',
            icon: 'none'
          })
          return
        }
        this.$fly.get(`/login/cellphone?phone=${this.phone}&password=${this.password}`)
          .then(res => {
            console.log(res)
            if (res.data) {
              let user = res.data.profile
              wx.setStorageSync('user', JSON.stringify(user))
              wx.setStorageSync('userId', user.userId)
              this.$store.state.user = user
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              })
              wx.switchTab({
                url: '../me/index'
              })
            }
          }).catch(err => {
          if (err) {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'none'
            })
          }
        })
      },
      emailLogin () {
        if (this.email === '') {
          wx.showToast({
            title: '邮箱不能为空',
            icon: 'none'
          })
          return
        }
        if (this.password2 === '') {
          wx.showToast({
            title: '密码不能为空',
            icon: 'none'
          })
          return
        }
        this.$fly.get(`/login/email?email=${this.email}&password=${this.password2}`)
          .then(res => {
            if (res.data) {
              let user = res.data.profile
              wx.setStorageSync('user', JSON.stringify(user))
              wx.setStorageSync('userId', user.userId)
              this.$store.state.user = user
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              })
              wx.switchTab({
                url: '../me/index'
              })
            }

          }).catch(err => {
          console.log(err)
          if (err) {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'none'
            })
          }
        })
      },
      register () {
        wx.navigateTo({
          url: '../register/index'
        })
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
  .login {
    .desc {
      margin-top: 40rpx;
    }

    .btn {
      display: flex;
      justify-content: space-around;
      margin-top: 100rpx;
    }
  }
</style>

