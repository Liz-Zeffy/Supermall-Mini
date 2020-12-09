import {request} from "./request"

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHoemDetail(type,page) {
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}

