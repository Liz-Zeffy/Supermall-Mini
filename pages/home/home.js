// pages/home/home.js
import {getHomeMultidata, getHoemDetail} from "../../network/home"

Page({
  data:{
    banners:'',
    recommends:'',
    title:['流行','新款','精选'],
    goods:{
      'pop':{page:0, list:[]},
      'new':{page:0, list:[]},
      'sell':{page:0, list:[]}
    },
    currentType: 'pop',
  },

   // 生命周期函数--监听页面加:
  onLoad: function (options) {
    this. _getHomeMultidata();
    this. _getHoemDetail('pop');
    this. _getHoemDetail('new');
    this. _getHoemDetail('sell');
  },
  //-----------------以下是网络请求相关----------------------
  _getHomeMultidata(){
    getHomeMultidata().then(res => {
      console.log(res);
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners:banners,
        recommends:recommends
      })
    })
  },

  _getHoemDetail(type){
    const page = this.data.goods[type].page + 1;
    getHoemDetail(type,page).then(res => {
      const list = res.data.data.list;
      const goods = this.data.goods;
      goods[type].page += 1;
      goods[type].list = list;

      this.setData({
        goods
      })
    })
  },

  //--------------------就下是监听事件相关-------------------------
  titleClick(e){
    const title = ['pop','new','sell'];
    this.setData({
      currentType:title[e.detail.currentIndex]
    })
  }  
})
