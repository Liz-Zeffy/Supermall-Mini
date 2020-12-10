// pages/home/childComps/z-recommends/z-recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageLoad:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad(){
      if(!this.data.imageLoad) {
        this.triggerEvent('imageLoaded');
        this.data.imageLoad = true;
      }
    }
  }
})
