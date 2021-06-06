// pages/up/up.js
import WxValidate from '../../utils/WxValidate'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2021-06-06',
    time: '12:01',
    address:"",
    latitude:"",
    longitude:"",
    form: {
      title: '',
      content:'',
      time: '',
      address: '',
      second_content: '',
      second_title: '',
    },
    imgList: [],
  },
  DateChange:function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  chooseLocation:function(){
    wx.chooseLocation({
      success: (res) => {
        console.log(res.address)
        this.setData({
          address: res.address,
          latitude:res.latitude,
          longitude:res.longitude,
        })
      }
    })
  },
  /**
   * 页面加载时
   */
  onLoad: function (options) {
    this.initValidate()//验证规则函数,初始化字段规则和字段提示信息
  },
  initValidate() {
    const rules = {
      title: {	//标题
        required: true,  
      },
      content: {	//简介
        required: true,
        minlength:5
      },
      second_title: {	//景点名称
        required: true,  
      },
      second_content: {	//景点介绍
        required: true,
        minlength:5
      },
      time: {	//时间
        required: true,  
      },
      address: {	//地址
        required: true,
      },
    }
    const messages = {	//提示信息
      title: {
        required: '请填写标题',
      },
      content: {
        required: '请填写简介',
        minlength:'不得少于5个字',
      },
      second_title: {
        required: '请填写标题',
      },
      second_content: {
        required: '请填写简介',
        minlength:'简介不得少于5个字',
      },
      time: {	
        required: '请选择时间',  
      },
      address: {
        required: '请选择地址',
      },
    }
    this.WxValidate = new WxValidate(rules, messages)
  },
  //调用验证函数
  onBindSubmit: function (e) {
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showToast(error)
      return false
    }
    wx.showToast({
      title: "发布成功",
      icon:"success",
    })
    this.setData({
      form:e.detail.value
    })
    wx.navigateTo({
      url: '/pages/upShow/upShow?form='+JSON.stringify(this.data.form)+'&imgList='+JSON.stringify(this.data.imgList),
    })
  }, 
  //报错 
  showToast(error) {
    wx.showToast({
      title: error.msg,
      icon:"error"
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 2, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

})