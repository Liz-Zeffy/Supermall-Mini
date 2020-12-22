// pages/cart/childComps/cart-bottom-bar/cart-bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected:{
      type:Boolean,
      value:false
    },
    price:{
      type:Number,
      value:0
    },
    counter:{
      type:Number,
      value:0
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
    selectAllClick(){
      this.triggerEvent('selectAllClick')
    }
  }
})
