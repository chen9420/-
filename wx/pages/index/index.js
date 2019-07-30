//index.js
//获取应用实例
const app = getApp() 
console.log(app.data.a)
Page({
  data:{
    num:0,
    n:'手动'
  },
  click(){
    wx.reLaunch({
      url: '../hehe/hehe'
    })
  },
  change(ev){
    let {value}=ev.detail;
    this.setData({val:value})
    // console.log(ev)
  },
  getval(){
    let {n,val}=this.data;
    n = val;
    // console.log(n)
    this.setData({n})
  }
})

