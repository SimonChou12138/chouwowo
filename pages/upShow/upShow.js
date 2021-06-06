// pages/upShow/upShow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"广州一日游",
    imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0605%252Facccc22ej00qu709901igc001hc0140m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625549546&t=cb025576f3c17a9d07471de4a7cf23f8",
    content:" 　　广州，简称穗，中国第三大城市，地处广东中南部，珠江三角洲中北缘，是中国的南大门，中国国家中心城市，国际大都市，国家三大综合性门户城市之一，世界著名的港口城市，国家的经济、金融、贸易、航运和会展中心，中国南方的政治、军事、文化、科教中心，国家综合交通枢纽，社会经济文化辐射力直指东南亚。\n 　　广州有着两千多年的历史，是中国历史文化名城，历史最悠久的对外通商口岸，海上丝绸之路的起点之一，。广州是岭南文化的代表、广府文化的兴盛之地。作为中国对外贸易的窗口，广州外国人士众多，被称为“第三世界首都”，是全国华侨最多的大城市，与北京、上海并称“北上广”。",
    time:"2020-06-06",
    second_title:"白云山",
    second_content:" 　　白云山，是新“羊城八景”之首，位于广州市的东北部，为南粤名山之一，自古就有“羊城第一秀”之称。白云山峰峦重叠，溪涧纵横，登高可俯览全市，遥望珠江。每当雨后天晴或暮春时节，山间白云缭绕，蔚为奇观，白云山之名由此得来。\n 　　门票：5元；索道上山单程25元/人次（含白云山门票），下山单程15元/人次。\n 　　开放时间：6:30 －17:30 \n 　　交通：可乘搭 24 路、63路、240 路、285 路、旅游 3 线等线路在云台花园站下车，也可乘搭46 路、60路、127 路、175 路、179 路、199 路、223 路、241 路、257 路、540路、B18 路、旅游1 线等线路在白云索道站下车。\n 　　游玩时间：2-3小时左右",
    second_imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20170626%2F1498457040_21617_1.jpg&refer=http%3A%2F%2Fimage.cnpp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625550812&t=10010e40cde2099385387b92b965895e",
    form: {
      title: '',
      content:'',
      time: '',
      address: '',
      second_content: '',
      second_title: '',
    },
    imgList:[],
  },
 
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content = this.handleImage(this.data.content);
    let data = JSON.parse(options.form);
    let list = JSON.parse(options.imgList);
    this.setData({
        content:content,
        form:data,
        imageUrl:list
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

   
  handleImage(content) {
    var newStr = content.replace(/class="[\s\S]*?"/g, "")
      .replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/ig, '<img$1')
      .replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/ig, '<img$1')
      .replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<img$1')
      .replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/ig, '<img$1')
      .replace(/<div([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<div$1')
      .replace(/<img([\s\w"-=\/\.:;]+)/ig, '<img$1 style="max-width:100%;height:auto;display:block;margin:10px 0;"');
    return newStr;
  },
})