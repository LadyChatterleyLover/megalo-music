<template>
  <div class="home">
    <div class="content">
      <div class="flex" v-if="albums.length === 0">无结果</div>
      <div v-else>
        <div v-for="(item, index) in albums" :key="item.id" class="item" @click="goDetail(item)">
          <div class="img">
            <img :src="item.blurPicUrl" alt="">
          </div>
          <div class="desc">
            <div class="name" v-html="item.name"></div>
            <div class="time">
              <div v-for="(item1, index1) in item.artists" :key="index1">
                <div v-html="item1.name"></div>
              </div>
              <div class="publish">
                {{item.publishTime}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // import util from '../../utils'
  export default {
    name: "Album",
    components: {},
    props: {
      value: {
        type: String
      },
      moreAlbums: {
        type: Array,
      }
    },
    data() {
      return {
        albums: [],
        showLoading: true
      }
    },
    methods: {
      goDetail(item) {
        this.$store.state.albumId = item.id
        // this.$router.push('/albumPlay')
      }
    },
    mounted() {
      this.$fly.get(`/search?keywords=${this.value}&type=10&limit=10`)
        .then(res => {
          // 156 346 560 0000
          this.albums = res.data.result.albums
          this.albums.map(item => {
            item.publishTime = this.$moment(item.publishTime).format('YYYY-MM-DD')
            let replaceReg = new RegExp(this.value, 'g')
          })
        })
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {
      moreAlbums (val) {
        if (val.length > 0) {
          this.showLoading = false
          val.map(item => {
            this.albums.push(item)
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
    margin: 20rpx;

    .img {
      width: 100rpx;
      height: 100rpx;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8rpx;
      }
    }

    .desc {
      margin-left: 20rpx;
      font-size: 24rpx;

      .name {

        display: flex;
      }

      .time {
        display: flex;
        align-items: center;
        color: #ccc;

        .publish {
          margin-left: 10rpx;
        }
      }
    }
  }

</style>
