// pages/tab-map/index.js
const app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,
    headHeight: 0,
    mapHeight: 0,
    latitude: 31.24579,
    longitude: 121.49392,
    markers: [{
      id: 1,
      latitude: 31.24579,
      longitude: 121.49392,
      label: {
        content: '最快到达',
        anchorX: 0,
        anchorY: -40,
        color: '#F54336',
        fontSize: 13,
        textAlign: 'center'
      },
      iconPath: '/image/map-dot.png',
      width: '37rpx',
      height: '48rpx'
    },
    {
      id: 2,
      latitude: 31.243814,
      longitude: 121.512317,
      label: {
        content: '3km内价格最低',
        anchorX: 0,
        anchorY: -40,
        color: '#F54336',
        fontSize: 13,
        textAlign: 'center'
      },
      iconPath: '/image/map-dot1.png',
      width: '37rpx',
      height: '48rpx'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const systemInfo = wx.getSystemInfoSync()
    this.setData({
      mapHeight: (systemInfo.windowHeight - 59 - 100 - 44 - app.globalData.statusBarHeight) * 2
    })
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
    this.includePoints()
  },

  //坐标点出现在一个视野范围
  includePoints: function () {
    var that = this;
    that.mapCtx.includePoints({
      padding: [100, 80, 100, 80],
      points: that.data.markers.map(item => ({longitude: item.longitude, latitude: item.latitude}))  //放入所有坐标轴的数组   并引用此方法
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.getCurrentTabbar(0,this);
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