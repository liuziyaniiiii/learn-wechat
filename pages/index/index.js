// pages/index/index.js
Page({

  /**
   * 页面的初始数据,页面中使用的数据都需要问data要
   */
  data: {
    message:'初始化',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---index onload()')
    // this.setData({
    //   message:'修改后的数据',
    // })
    // 再用户授权之后的情况下,获取用户信息
    wx.getUserInfo({
      success:(res)=>{
        // console.log(res)
        this.setData({
          userInfo:res.userInfo
        })
      },
      fail:()=>{
        console.log('获取用户信息失败')
      }
    })
  },

  // handleParent(){
  //   console.log('parent')
  // },
  // handleChild(){
  //   console.log('child')
  // },
  toLogs(){
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },

  // 获取用户授权信息的回调
  handleUserInfo(res){
    if(res.detail.userInfo){
      // console.log(res)
      this.setData({
        userInfo:res.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('---onShow页面显示--')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('---onHide页面隐藏---')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('---onUnload页面卸载---')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})