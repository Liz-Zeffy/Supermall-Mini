
import {getDetail,
        GoodBaseInfo,
        GoodShopInfo,
        getRecommend} from "../../network/detail"

const TOP_DISTENCE = 1000
const app = getApp();
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
    goodsInfo:{},
    parameterInfo:{},
    recommend:[],
    showBackTop:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.iid = options.iid;
    this._getDetail();
    this._getRecommend()
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
      const parameterInfo = data.itemParams;
      this.setData({
        topImages:data.itemInfo.topImages,
        baseInfo:baseInfo,
        shopInfo:shopInfo,
        commentInfo:commentInfo,
        goodsInfo:goodsInfo,
        parameterInfo:parameterInfo
      });
    })
  },

  _getRecommend(){
    getRecommend().then(res => {
      const recommends = res.data.data.list;
      // console.log(recommends);
      this.setData({
        recommend:recommends
      })
    })
  },

  onPageScroll(option) {
    const scrollTop = option.scrollTop;
    const flag = scrollTop >= TOP_DISTENCE;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop:flag
      })
    }
  },

  onAddCart(){
    const obj = {};
    obj.iid = this.data.iid;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice

    app.addToCart(obj).then(res => {
      wx.showToast({
        title: res,
        duration:800
      })
    })

  }

})