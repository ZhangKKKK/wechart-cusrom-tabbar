Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#015C61",
    list: [
    {
      pagePath: "/pages/tab-map/index",
      iconPath: "/image/tab-map.png",
      selectedIconPath: "/image/tab-map-active.png",
      text: "地图"
    }, 
    {
      pagePath: "/pages/tab-code/index",
      iconPath: "/image/tab-code.png",
      selectedIconPath: "/image/tab-code.png",
      text: "扫码",
      isSpecial: true
    }, 
    {
      pagePath: "/pages/tab-my/index",
      iconPath: "/image/tab-my.png",
      selectedIconPath: "/image/tab-my-active.png",
      text: "我的"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      if (!data.click) {
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      } else {
        wx.scanCode({
          onlyFromCamera: true,
          success (res) {
            console.log(res)
          },
          fail (err) {
            console.log(err)
            wx.showToast({
              title: '扫码失败',
              icon: 'loading',
              duration: 1500
           })
          }
        })
      }
    }
  }
})