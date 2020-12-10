// components/z-back-top/z-back-top.js
Component({
  methods: {
    backTop() {
      wx.pageScrollTo({
        duration: 0,
        scrollTop:0
      })
    }
  }
})
