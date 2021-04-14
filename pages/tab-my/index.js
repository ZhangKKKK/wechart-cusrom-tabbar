// pages/tab-my/index.js
const app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,
    headHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ffffff'
    })
    this.setData({
      navHeight: app.globalData.statusBarHeight,
      headHeight: (app.globalData.statusBarHeight + 161 + 44) * 2
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.getCurrentTabbar(1,this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})