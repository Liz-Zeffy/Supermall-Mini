import {request} from "./request"

export function getDetail (iid){
  return request({
    url:"/detail",
    data:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:"/recommend"
  })
}

export class GoodBaseInfo {
  constructor (columns,itemInfo,shopInfo){
    this.title = itemInfo.title,
    this.price = itemInfo.price,
    this.oldPrice = itemInfo.highPrice,
    this.discount = [itemInfo.discountDesc, itemInfo.discountBgColor],
    this.columns = columns;
    this.services = shopInfo.services
  }
}

export class GoodShopInfo {
  constructor (shopInfo) {
    this.logoURL = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.cGoods = shopInfo.cGoods,
    this.cSells = shopInfo.cSells,
    this.score = shopInfo.score
  }
}