<template>
  <div>
    <div class="flex" v-if="sheet.length === 0">无结果</div>
    <div v-else>
      <div class="item" v-for="(item, index) in sheet" :key="index" @click="goDetail(item)">
        <div class="img">
          <img :src="item.coverImgUrl" alt="">
        </div>
        <div class="desc">
          <div class="name" v-html="item.name"></div>
          <div class="d-item">
            <div class="count">
              {{item.trackCount}}首音乐
            </div>
            <div class="user">
              by{{item.creator.nickname}}
            </div>
            <div class="play">
              播放{{item.playCount}}万次
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sheet",
    components: {},
    props: {
      value: {
        type: String
      },
      moreSheets: {
        type: Array
      }
    },
    data() {
      return {
        sheet: [],
        showLoading: true
      }
    },
    methods: {
      goDetail(item) {
        this.$store.state.sheetId = item.id
        this.$router.push('/sheetPlay')
      }
    },
    mounted() {
      this.$fly.get(`/search?keywords=${this.value}&type=1000&limit=10`)
        .then(res => {
          this.sheet = res.data.result.playlists
          this.sheet.map(item => {
            item.publishTime = this.$moment(item.publishTime).format('YYYY-MM-DD')
            let replaceReg = new RegExp(this.value, 'g')
            let replaceString = '<span class="search-text">' + this.value + '</span>'
            item.name = item.name.replace(replaceReg, replaceString)
            item.playCount = item.playCount.toString().substr(0,2) + '.' + item.playCount.toString().substr(2,1)
          })
        })
    },
    created() {

    },
    computed: {},
    watch: {
      moreSheets (val) {
        if (val.length > 0) {
          this.showLoading = false
          val.map(item => {
            this.sheet.push(item)
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

    .img {
      width: 120rpx;
      height: 120rpx;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }

    .desc {
      margin-left: 20rpx;
      .name {
        font-size: 28rpx;
      }
      .d-item {
        display: flex;
        align-items: center;
        font-size: 24rpx;
        .count {
          margin-right: 20rpx;
        }
        .user {
          margin-right: 20rpx;
        }
        .play {

        }
      }
    }
  }
</style>
