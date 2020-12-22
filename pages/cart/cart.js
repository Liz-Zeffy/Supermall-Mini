// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    isSelectAll:false,
    totalPrice:0,
    totalCounter:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartList:app.globalData.cartList
    })

    app.addCartCallback = () => {
      this.setData({
        cartList:app.globalData.cartList
      })
      this._changeData()
    }
    
    app.changeGoodsState = (index, goods) => {
      // // 1.修改某一项的选中状态
      // this.setData({
      //   [`cartList[${index}]`]: goods
      // })

      // // 2.修改全部选中的状态
      // const selectAll = !this.data.cartList.find(item => !item.checked)
      // this.setData({
      //   isSelectAll: selectAll
      // })
      const flag = !this.data.cartList.find(item => !item.checked);
      this.setData({
        isSelectAll:flag
      })

      this._changeData()
    }


  },
  onShow() {
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })

    this._changeData()
  },

  subClick(e){
   const goods = e.detail.goods;
   if(goods.count > 1){
    goods.count--;
   } 
   
   this._changeCount(goods)
  
  },

  addClick(e){
    const goods = e.detail.goods;
    goods.count++;
    this._changeCount(goods)
  },

  checkClick(e){
    const goods = e.detail.goods;
    goods.checked = !goods.checked
    this._changeCount(goods)
    
  },

  _changeCount(goods){
    const newList = this.data.cartList.map(item => item.iid == goods.iid ? goods : item);
    app.globalData.cartList = newList;
    this.setData({
      cartList:app.globalData.cartList
    })
    console.log(app.globalData.cartList)
  },

  _changeData(){
    let totalPrice = 0;
    let totalCounter = 0;
    for (let item of this.data.cartList){
      if (item.checked){
        totalCounter++;
        totalPrice += item.price * item.count
      }
    }

    this.setData({
      totalCounter: totalCounter,
      totalPrice: totalPrice
    })
      
    },

    selectAllClick(){
      if (this.data.isSelectAll) { // 目前全部选中
        this.data.cartList.forEach(item => {
          item.checked = false
        })
        this.setData({
          cartList: this.data.cartList,
          isSelectAll: false
        })

      } else { // 某些没选中
        this.data.cartList.forEach(item => {
          item.checked = true
        })
        this.setData({
          cartList: this.data.cartList,
          isSelectAll: true
        })
      }

      this._changeData()
    }

})