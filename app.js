
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  addToCart(obj){
    return new Promise ((resolve,rejects) => {
      const oldInfo = this.globalData.cartList.find((item) => item.iid === obj.iid);
      if(oldInfo) {
        oldInfo.count += (1);
        resolve("当前数量加1")
      }else{
        obj.count = 1;
        obj.checked = false;
        this.globalData.cartList.push(obj);
        resolve("加入购物车成功")
      }    

      if(this.addCartCallback) {
        this.addCartCallback()
      }

    })


    
  },



  globalData: {
    userInfo: null,
    cartList:[]
  }
})