// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '服务',
    set_base_data: {} //页面内容的数据
  },
  //二级菜单隐藏
  menu() {
    var menu = this.data.hidden_menu
    this.setData({
      hidden_menu: !menu
    })
  },

  set_base_data() {
    var data = {
      header: {
        img: '/pages/image/phone.jpg',
        title: '移动端服务',
        en_title: 'MOBILE END SERVIC',
        detail: '根据您提出建站需求和网站要求，双方进行面对面的沟通和了解来明确建站目的及功能定位。通过和您的沟通了解, 我方出具一份详细专业网站策划方案，内有功能明细，页面设计数量，报价等。'
      },
      content: [{
        img: '/pages/image/phone/phone1.png',
        title: 'H5手机网站',
        decript: '根据您提出建站需求和网站要求，双方行提出建站需求和网站要求，双方行'
      }, {
        img: '/pages/image/phone/phone2.png',
        title: '自适应手机网站',
        decript: '建站需求和网站要求，双方行建站需求和网站要求，双方行阿达'
      }, {
        img: '/pages/image/phone/phone3.png',
        title: 'APP设计开发',
          decript: 'APP设计开发APP设计开发APP设计开发APP设计开发APP设计开发'
      }, {
        img: '/pages/image/phone/phone4.png',
          title: 'H5抽奖社交游戏开发',
          decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }],
      footer: {
        img: '/pages/image/service/phone-bottom.jpg',
        title: '移动端优势',
        en_title: 'MOBILE TERMINAL ADVANTAGE'
      },
      liucheng_img: '/pages/image/service/website-pic.jpg',
      copy: '北京思睿鸿途科技有限公司 版权所有©'
    }

    return data
  },
  onLoad() {
    //设置模板里的数据内容
    var data = this.set_base_data()
    this.setData({
      base_data: data
    })
  }
})