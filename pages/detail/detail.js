import {getDetail,
        GoodBaseInfo,
        GoodShopInfo} from "../../network/detail"

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    topImages:'',
    baseInfo:{},
    shopInfo:{},
    commentInfo:{},
    goodsInfo:{}
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
      console.log(data);
  
      const baseInfo = new GoodBaseInfo (data.columns,data.itemInfo,data.shopInfo);
            const lastcolumns = baseInfo.services.pop().name;     
            baseInfo.columns.splice(-1);
            baseInfo.columns.push(lastcolumns);

      const shopInfo = new GoodShopInfo (data.shopInfo);
      const commentInfo = data.rate;
      const goodsInfo = data.detailInfo;
      this.setData({
        topImages:data.itemInfo.topImages,
        baseInfo:baseInfo,
        shopInfo:shopInfo,
        commentInfo:commentInfo,
        goodsInfo:goodsInfo
      });
    })
  }
 



})