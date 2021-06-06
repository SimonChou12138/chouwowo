// pages/user/user.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    attentionNum:"",
    fans:"",
  },
  /**
   * 用户授权登录
   */
  login:function(){
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          attentionNum:6,
          fans:666,
          hasUserInfo: true
        })
      }
    })
  }
})