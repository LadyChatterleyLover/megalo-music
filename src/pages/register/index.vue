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
  <div>
    <div class="content">
      <van-cell-group>
        <van-field
          type="tel"
          left-icon="phone-o"
          :value="phone"
          label="手机号"
          required
          clearable
          placeholder="请输入手机号"
          @blur="onBlur1"
        ></van-field>
        <van-field
          type="password"
          :value="password"
          label="密码"
          left-icon="photo-o"
          required
          clearable
          placeholder="请输入密码"
          @blur="onBlur2"
        ></van-field>
        <van-field
          :value="captcha"
          label="验证码"
          left-icon="label-o"
          required
          clearable
          placeholder="请输入验证码"
          @blur="onBlur3"
        >
          <van-button type="primary" slot="button" size="small" @click="send">
            {{sendValue}}
          </van-button>
        </van-field>
        <van-field
          :value="nickname"
          center
          label="昵称"
          left-icon="user-o"
          required
          clearable
          placeholder="请输入昵称"
          @blur="onBlur4"
        ></van-field>
      </van-cell-group>
      <div class="btn">
        <van-button type="danger" @click="$router.push('/login')">前往登录</van-button>
        <van-button type="warning"  @click="register">立即注册</van-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Register",
    components: {},
    props: {},
    data() {
      return {
        phone: '',
        password: '',
        captcha: '',
        nickname: '',
        sendValue: '发送验证码',
        time: 30,
        timer: null
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
        this.captcha = e.detail.value
      },
      onBlur4 (e) {
        this.nickname = e.detail.value
      },
      register () {
        this.$fly.get(`/captch/verify?phone=${this.phone}&captcha=${this.captcha}`)
          .then(res => {
            if (res.code === 200) {
              this.$fly.get(`/captch/register?phone=${this.phone}&password=${this.password}&captcha=${this.captcha}&nickname=${this.nickname}`)
                .then(res => {
                  if (res.code === 200) {
                    wx.navigateTo({
                      url: '../login/index'
                    })
                    wx.showToast({
                      title: '注册成功',
                      icon: 'success'
                    })
                  }
                }).catch(err => {
                if (err) {
                  wx.showToast({
                    title: '注册失败,请稍后再试',
                    icon: 'none'
                  })
                }
              })
            }
          }).catch(err => {
          if (err) {
            wx.showToast({
              title: '验证码错误',
              icon: 'none'
            })
          }
        })
      },
      send () {
        if (this.timer) clearInterval(this.timer)
        if (this.phone === '') {
          wx.showToast({
            title: '手机号不能为空',
            icon: 'none'
          })
          return
        } else {
          this.timer = setInterval(() => {
            this.time --
            this.sendValue = this.time + 's'
            if (this.time === 0) {
              this.sendValue = '重新发送'
              clearInterval(this.timer)
            }
          }, 1000)
          if (this.sendValue === '重新发送') {
            if (this.timer) clearInterval(this.timer)
            this.time = 30
            this.timer = setInterval(() => {
              this.time --
              this.sendValue = this.time + 's'
              if (this.time === 0) {
                this.sendValue = '重新发送'
                clearInterval(this.timer)
              }
            }, 1000)
          }
          this.$fly.get(`/captcha/sent?phone=${this.phone}`).then(res => {
            if (res.code === 200) {
              wx.showToast({
                title: '短信验证码发送成功',
                icon: 'success'
              })
            }
          }).catch(err => {
            console.log(err)
          })
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
    margin-top: 40rpx;
  }
  .btn {
    display: flex;
    justify-content: space-around;
    margin-top: 100rpx;
  }
</style>
