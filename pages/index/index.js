//index.js
const back = wx.getBackgroundAudioManager();
const app = getApp()


Page({
  
  data: {
    tmp:{}
  },
  showtravelcontent:function(){
    wx.navigateTo({
      url: '/pages/travelcontent/travelcontent',
    })
  },
  /**
   * 加载时
   */
  onLoad: function () {
    //播放音乐
    this.backmusic();
  },
  backmusic: function () {
    //  音乐播放函数
    player();
    function player() {
      back.title = "A Little Story";   // 必须要有一个title
      back.src = "https://dl.stream.qqmusic.qq.com/C400004L5Djz2Niv2s.m4a?guid=1633874806&vkey=51558FE967CEE99C10C56E34F13F41D2FAF153430D0D4833CE45E8FD5EA060B205CB230390AAB9145675FA99EE1C25B330DE9C7CE376C84F&uin=2484152300&fromtag=66"; 
      back.onEnded(() => {
        player();  // 音乐循环播放
      })
    }
  },
})