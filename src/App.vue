
<script>
export default {
  onLaunch (options) {
    if (!wx.getStorageSync('searchArr')) {
      let arr = []
      wx.setStorageSync('searchArr', JSON.stringify(arr));
    }
  },
  onShow (options) {

  },
  onHide () {

  },
  onError (msg) {

  },
  globalData () {
    return {

    }
  }
}
</script>
