<template>
  <div>
    <div class="content">
      <div class="flex" v-if="users.length === 0">无结果</div>
      <div v-else >
        <div class="item" v-for="(item, index) in users" :key="index" @click="goDetail(item)">
          <div class="img">
            <img :src="item.avatarUrl" alt="">
          </div>
          <div class="desc">
            <div class="name" v-html="item.nickname"></div>
            <div v-if="item.signature !== ''" class="signature">
              {{item.signature}}
            </div>
          </div>
          <div class="btn">
            <van-button round type="danger" size="mini">+ 关注</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Users",
    components: {},
    props: {
      value: {
        type: String
      },
      moreUsers: {
        type: Array
      }
    },
    data() {
      return {
        users: [],
        showLoading: true
      }
    },
    methods: {
      goDetail(item) {
        console.log(item)
        this.$store.state.userId = item.userId
        this.$router.push('/userPlay')
      }
    },
    mounted() {
      this.$fly.get(`/search?keywords=${this.value}&type=1002&limit=10`)
        .then(res => {
          this.users = res.data.result.userprofiles
          this.users.map(item => {
            let replaceReg = new RegExp(this.value, 'g')
            let replaceString = '<span class="search-text">' + this.value + '</span>'
            item.nickname = item.nickname.replace(replaceReg, replaceString)
          })
        })
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {
      moreUsers (val) {
        if (val.length > 0) {
          this.showLoading = false
          val.map(item => {
            this.users.push(item)
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
      margin-left: 20rpx;
      width: 630rpx;
      .name {
        font-size: 28rpx;
      }
      .signature {
        color: #ccc;
      }
    }
    .btn {
      position: absolute;
      right: 40rpx;
    }
  }
</style>
