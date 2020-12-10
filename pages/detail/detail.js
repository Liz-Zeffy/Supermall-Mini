import {getDetail} from "../../network/detail"

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    topimages:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.iid = options.iid;

    this._getDetail()
  
  },

  _getDetail(){
    getDetail(this.data.iid).then (res => {
      const data = res.data.result;
      console.log(data)
      this.setData({
        topimages:data.itemInfo.topImages
      })
    })
  }
 



})