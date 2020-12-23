// pages/cart/childComps/cart-list-item.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{}
    },
    index:{
      type:Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    subClick(e){
      const thisitem= e.currentTarget.dataset.item;
      const index = e.currentTarget.dataset.index;
      const goods = app.globalData.cartList.find(item => item.iid == thisitem.iid)
      if(goods.count > 1){
        goods.count--;
       } 
      console.log(app.globalData.cartList)
      app.changeGoodsState(goods,index)
    },
    addClick(e){
      const thisitem = e.currentTarget.dataset.item;
      const index = e.currentTarget.dataset.index;
      const goods = app.globalData.cartList.find(item => item.iid == thisitem.iid)
      goods.count++;
      console.log(app.globalData.cartList)
      app.changeGoodsState(goods,index);

    },

    checkClick(e){
      const thisitem = e.currentTarget.dataset.item;
      const index = e.currentTarget.dataset.index;
      const goods = app.globalData.cartList.find(item => item.iid == thisitem.iid)
      goods.checked = !goods.checked;

      app.changeGoodsState(goods,index);

    }
  }
})
