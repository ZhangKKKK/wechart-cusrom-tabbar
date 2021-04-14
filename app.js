// app.js
App({
  onLaunch() {

    wx.getSystemInfo({
      success: (res) => {
          this.globalData.statusBarHeight = res.statusBarHeight;
      }
  })
  },

  

  globalData: {
    userInfo: null,
    statusBarHeight: 0
  },


  //设置tabbar的选中
  getCurrentTabbar(selected, that) {
    if (typeof that.getTabBar === 'function' &&
        that.getTabBar()) {
        that.getTabBar().setData({
            selected: selected
        })
    }
},
})
