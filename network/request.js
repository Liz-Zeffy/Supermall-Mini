export function request (options) {
  return new Promise((resolve,reject) => {
    wx.request({
      url:'http://152.136.185.210:8000/api/w6' + options.url,
      method:options.method || 'get',
      data:options.data || {},
      success:resolve,
      fail:reject
    })
  })
}

