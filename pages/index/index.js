Page({
  data: {
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    // 指示点
    indicatorDots:true,
    autoplay: true,
    interval: 1000,
    duration: 500, 
    todyTitle: "今日新闻",
    //首页的加载的内容
    DataState:[]
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      data: {},
      headers: {
         "Conten-Type":"application.json"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data.top_stories)
        that.setData({
             imgUrls:res.data.top_stories,
             DataState:res.data.stories
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
  
})
