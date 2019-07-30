// pages/hehe/hehe.js
Page({
  fn() {
    console.log('box')
  },
  fn2() {
    console.log('box2')
  },
  click() {
    wx.reLaunch({
      url: '../hd/hd'
    })
  }

})