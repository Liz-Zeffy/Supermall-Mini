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
      const goods = e.currentTarget.dataset.item;
      this.triggerEvent('subClick',{goods});
      app.changeGoodsState()
    },
    addClick(e){
      const goods = e.currentTarget.dataset.item;
      this.triggerEvent('addClick',{goods});
      app.changeGoodsState()
    },

    checkClick(e){
      const goods = e.currentTarget.dataset.item;
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('checkClick',{goods});
      app.changeGoodsState(index, goods);

    }
  }
})
