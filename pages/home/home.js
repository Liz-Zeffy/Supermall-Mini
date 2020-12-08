// pages/home/home.js
import {getHomeMultidata} from "../../network/home"

Page({
  data:{
    banners:'',
    recommends:'',
    title:['新款','流行','精选']
  },

   // 生命周期函数--监听页面加载
  onLoad: function (options) {
    getHomeMultidata().then(res => {
      console.log(res);
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners:banners,
        recommends:recommends
      })
    })
  }
})
