/**
 * @description 本文件保存导航信息元数据
 */


export const SEARCH_ENGINES: Array<SearchEngine> = [
  {
    key: 'baidu',
    icon: require('./assets/icons/baidu.ico').default,
    link: 'https://www.baidu.com/s?wd=',
    name: '百度'
  },
  {
    key: 'sougou',
    icon: require('./assets/icons/sougou.ico').default,
    link: 'https://www.sogou.com/web?query=',
    name: '搜狗'
  },
  {
    key: 'bing',
    icon: require('./assets/icons/sougou.ico').default,
    link: 'https://cn.bing.com/search?q=',
    name: '必应'
  },
  {
    key: 'google',
    icon: require('./assets/icons/google.png').default,
    link: 'https://www.google.com/search?q=',
    name: '谷歌'
  }
];

/*
图片相关


在线视频

https://www.iqiyi.com/
https://v.qq.com/
https://www.bilibili.com/
https://www.mgtv.com/
https://www.youku.com/

在线翻译

https://fanyi.baidu.com/

文件共享

https://xiaomark.com/tool
https://www.soukuzhan.com/
*/

export const WEBSITES: Array<Category> = [
  {
    name: '图文排版',
    value: 1,
    links: [
      {
        icon: require('./assets/icons/xiumi.png').default,
        url: 'https://xiumi.us',
        name: '秀米',
        description: '原创模板素材，精选风格排版'
      },
      {
        icon: require('./assets/icons/newrank.ico').default,
        url: 'https://edit.newrank.cn',
        name: '新榜编辑器',
        description: '让你的图文编辑生动有趣'
      },
      {
        icon: require('./assets/icons/135.ico'),
        url: 'https://www.135editor.com',
        name: '135编辑器',
        description: '微信公众号图文排版工具，好用素材多'
      },
    ]
  },



https://tinyjpg.com/
https://www.soogif.com/
  {
    name: '图片编辑',
    value: 2,
    links: [
      {
        icon: require('./assets/icons/docsmall.png').default,
        name: 'Docsmall',
        url: 'https://docsmall.com/image-compress',
        description: '免费在线图片压缩、GIF压缩工具、PDF压缩工具、PDF合并工具、PDF分割工具'
      },
      {
        icon: '',
        name: '',
        url: 'https://www.photopea.com',
        description: ''
      },
      {
        icon: '',
        name: '',
        url: '',
        description: ''
      },
      {
        icon: '',
        name: '',
        url: '',
        description: ''
      },
      {
        icon: '',
        name: '',
        url: '',
        description: ''
      },
    ]
  }
]
