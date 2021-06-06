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
    // this.backmusic();
  },
  backmusic: function () {
    //  音乐播放函数
    player();
    function player() {
      back.title = "A Little Story";   // 必须要有一个title
      back.src = "http://121.51.180.62/amobile.music.tc.qq.com/C400004L5Djz2Niv2s.m4a?guid=579928027&vkey=F0C7852628ED97A5804CC5B09BABA6E11D7F85DA94FC47870C4375D883235068C816FAAA4FED571A2AB47BF56EF969AE91373369C03DDA14&uin=&fromtag=66"; 
      back.onEnded(() => {
        player();  // 音乐循环播放
      })
    }
  },
})