<template>
  <div v-if="content.length > 0">
    <div class="top">
      <h3 v-if="showMore">
        {{title}}
      </h3>
      <h3 v-else>
        <div class="flex">
          <div v-for="(item, index) in title" :key="index" :class="{active: activeIndex === index}"
               @click="onClick(item, index)" class="f-item">
            {{item}}
          </div>
        </div>
      </h3>
      <div class="song">
        {{desc}}
      </div>
    </div>

    <div class="content" v-if="!showContent">
      <div v-for="(item, index) in content" :key="index" class="item" v-if="activeIndex === 0"
           >
        <div class="img" v-if="item.song">
          <img :src="item.song.album.picUrl" alt="">
        </div>
        <div class="img" v-else-if="item.coverUrl">
          <img :src="item.coverUrl" alt="">
        </div>
        <div class="img" v-else>
          <img :src="item.picUrl" alt="">
        </div>
        <div class="title t-name">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Card",
    components: {},
    data() {
      return {
        showMore: false,
        showContentOne: false,
        showContent: false,
        activeIndex: 0
      }
    },
    props: {
      title: {
        type: [String, Array],
        default: ''
      },
      desc: {
        type: String,
        default: ''
      },
      content: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      onClick(item, index) {
        this.activeIndex = index
      },
    },
    mounted() {
      if (typeof this.title === 'string') {
        this.showMore = true

      }
      if (Array.isArray(this.content[1])) {
        this.showContentOne = true
        this.content[1].length = 6
      }
      if (Array.isArray(this.content[0])) {
        this.showContent = true
        this.content[0].length = 6
      } else {
        this.showContent = false
        this.content.length = 6
      }
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
  .flex {
    display: flex;
    align-items: center;
    width: 200rpx;

    .f-item {
      margin-left: 20rpx;
      color: #ccc;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .t-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .song {
    padding: 10rpx 20rpx;
    border-radius: 28rpx;
    background: #eee;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40rpx;
    margin-top: 50rpx;
  }

  .content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;


    .item {
      width: 31%;
      height: 240rpx;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 20rpx;
      margin-left: 1.5%;
      position: relative;
      font-size: 24rpx;

      .img {
        width: 100%;
        height: 160rpx;

        img {
          width: 100%;
          height: 100%;
          border-radius: 12rpx;
        }
      }

      .title {
        margin-top: 20rpx;
      }
    }

    .icon {
      position: absolute;
      bottom: 80rpx;
    }
  }

  .active {
    font-size: 36rpx;
    color: #000 !important;
  }
</style>

