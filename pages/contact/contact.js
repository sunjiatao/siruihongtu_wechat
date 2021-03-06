// pages/website/website.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '联系',
    base_data: {}
  },
  //二级菜单隐藏
  menu() {
    var menu = this.data.hidden_menu
    this.setData({
      hidden_menu: !menu
    })
  },
  //设置模板的数据内容
  set_base_data() {
    var data = {
      header: {
        img: '/pages/image/contact.jpg',
        title: '联系我们',
        en_title: 'contact us'  
      },
      content: [{
        img: '/pages/image/website/website1.png',
        title: '品牌官网',
        decript: '根据您提出建站需求和网站要求，双方行提出建站需求和网站要求，双方行'
      }, {
        img: '/pages/image/website/website2.png',
        title: '集团官网',
        decript: '建站需求和网站要求，双方行建站需求和网站要求，双方行阿达'
      }, {
        img: '/pages/image/website/website3.png',
        title: '营销型网站',
        decript: 'APP设计开发APP设计开发APP设计开发APP设计开发APP设计开发'
      }, {
        img: '/pages/image/website/website4.png',
        title: '响应式网站',
        decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }, {
        img: '/pages/image/website/website5.png',
        title: 'H5网站',
        decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }, {
        img: '/pages/image/website/website6.png',
        title: '在线购物平台',
        decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }],
      footer: {
        img: '/pages/image/service/phone-bottom.jpg',
        title: '网站建设流程',
        en_title: 'WEBSITE CONSTRUCTION PROCESS'
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