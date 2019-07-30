Page({
  data: {
    hd: false,
    items: [{
        id: '0',
        name: 'USA',
        value: '美国',
        checked: true
      },
      {
        id: '1',
        name: 'CHN',
        value: '中国',
        checked: true
      },
      {
        id: '2',
        name: 'BRA',
        value: '巴西',
        checked: false
      },
      {
        id: '3',
        name: 'JPN',
        value: '日本',
        checked: true
      },
      {
        id: '4',
        name: 'ENG',
        value: '英国',
        checked: false
      },
      {
        id: '5',
        name: 'TUR',
        value: '法国',
        checked: false
      },
    ]
  },
  checkboxChange: function(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  click2(){
    wx.reLaunch({
      url: '../hehe/hehe'
    })
  },
  click(ev) {
    let {
      items
    } = this.data;
    const id = ev.target.dataset.index
    items[id].checked = !items[id].checked

    this.setData({
      hd:items.every(item=>item.checked)
    })
    // console.log(this.data.items)
  },
  all() {
    // console.log(this.data.hd);
    let {
      hd,
      items
    } = this.data;
    hd = !hd
    items.forEach(item=>item.checked=hd)
    this.setData({
      hd,
      items
    })
  }
})