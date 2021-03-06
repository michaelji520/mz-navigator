/**
 * @description 本文件保存导航信息元数据
 */

export const SEARCH_ENGINES: Array<SearchEngine> = [
  {
    key: 'baidu',
    icon: require('./assets/icons/baidu.ico').default,
    link: 'https://www.baidu.com/s?wd=',
    name: '百度',
    suggestion: {
      bindSuggestionHandler: (callback) => {
        window.baidu = {
          sug: (params) => callback(params.s || [])
        };
      },
      unbindSuggestionHandler: () => {window.baidu = undefined},
      getSuggestions: (keyword) => {
        const src = `//unionsug.baidu.com/su?wd=${keyword}&cb=window.baidu.sug&t=${new Date().getTime()}`;
        const sug = document.createElement('script');
        // @ts-ignore
        sug.onload = function (e) {e.currentTarget.remove()};
        // @ts-ignore
        sug.onerror = function (e) {e.currentTarget.remove()};
        sug.src = src;
        document.body.appendChild(sug);
      }
    },
  },
  {
    key: 'sougou',
    icon: require('./assets/icons/sougou.ico').default,
    link: 'https://www.sogou.com/web?query=',
    name: '搜狗',
    suggestion: {
      bindSuggestionHandler: (callback) => {
        window.sogou = {
          sug: (params) => callback(params[1] || [])
        };
      },
      unbindSuggestionHandler: () => {window.sogou = undefined},
      getSuggestions: (keyword) => {
        const src = `//www.sogou.com/suggnew/ajajjson?key=${keyword}&cb=window.suggestionHandler&t=${new Date().getTime()}`;
        const sug = document.createElement('script');
        // @ts-ignore
        sug.onload = function (e) {e.currentTarget.remove()};
        // @ts-ignore
        sug.onerror = function (e) {e.currentTarget.remove()};
        sug.src = src;
        document.body.appendChild(sug);
      }
    },
  },
  {
    key: 'bing',
    icon: require('./assets/icons/sougou.ico').default,
    link: 'https://cn.bing.com/search?q=',
    name: '必应',
    suggestion: {
      bindSuggestionHandler: (callback) => {
        window.bing = {
          sug: (params) => {
            const results = params.AS && params.AS.Results &&  params.AS.Results[0].Suggests;
            callback(results && results.map(i => i.Txt) || []);
          }
        };
      },
      unbindSuggestionHandler: () => {window.bing = undefined},
      getSuggestions: (keyword) => {
        const src = `//api.bing.com/qsonhs.aspx?type=cb&q=${keyword}&cb=window.bing.sug&t=${new Date().getTime()}`;
        const sug = document.createElement('script');
        // @ts-ignore
        sug.onload = function (e) {e.currentTarget.remove()};
        // @ts-ignore
        sug.onerror = function (e) {e.currentTarget.remove()};
        sug.src = src;
        document.body.appendChild(sug);
      }
    },
  },
  {
    key: 'google',
    icon: require('./assets/icons/google.png').default,
    link: 'https://www.google.com/search?q=',
    name: '谷歌',
    suggestion: {
      bindSuggestionHandler: (callback) => {
        window.google = {
          sug: (params) => {
            const results = params && params[1] || []
            callback(results);
          }
        };
      },
      unbindSuggestionHandler: () => {window.google = undefined},
      getSuggestions: (keyword) => {
        const src = `//suggestqueries.google.com/complete/search?client=chrome&q=${keyword}&jsonp=window.google.sug&t=${new Date().getTime()}`;
        const sug = document.createElement('script');
        // @ts-ignore
        sug.onload = function (e) {e.currentTarget.remove()};
        // @ts-ignore
        sug.onerror = function (e) {e.currentTarget.remove()};
        sug.src = src;
        document.body.appendChild(sug);
      }

    },
  }
];

export const WEBSITES: Array<Category> = [
  {
    name: '妞妞专用',
    links: [
      {
        icon: require('./assets/icons/xiumi.png').default,
        url: 'https://xiumi.us',
        name: '秀米',
        description: '原创模板素材，精选风格排版'
      },
      {
        icon: require('./assets/icons/weixin.ico').default,
        url: 'https://mp.weixin.qq.com/',
        name: '微信公众平台',
        description: '微信公众平台，给个人、企业和组织提供业务服务与用户管理能力的全新服务平台。'
      },
      {
        icon: require('./assets/icons/cnki.ico').default,
        name: '中国知网',
        url: 'https://www.cnki.net/',
        description: '中国知网知识发现网络平台—面向海内外读者提供中国学术文献、外文文献、学位论文、报纸、会议、年鉴、工具书等各类资源统一检索、统一导航、在线阅读和下载服务。涵盖基础科学、文史哲、工程科技、社会科学、农业、经济与管理科学、医药卫生、信息科技等十大领域。'
      },
      {
        icon: require('./assets/icons/newrank.ico').default,
        url: 'https://edit.newrank.cn',
        name: '新榜编辑器',
        description: '让你的图文编辑生动有趣'
      },
      {
        icon: require('./assets/icons/135.ico').default,
        url: 'https://www.135editor.com',
        name: '135编辑器',
        description: '微信公众号图文排版工具，好用素材多'
      },
    ]
  },
  {
    name: '图片编辑',
    links: [
      {
        icon: require('./assets/icons/docsmall.png').default,
        name: 'Docsmall',
        url: 'https://docsmall.com/image-compress',
        description: '免费在线图片压缩、GIF压缩工具、PDF压缩工具、PDF合并工具、PDF分割工具'
      },
      {
        icon: require('./assets/icons/photopea.png').default,
        name: 'Photopea',
        url: 'https://www.photopea.com',
        description: '免费的在线图像编辑器'
      },
      {
        icon: require('./assets/icons/tinypng.png').default,
        name: 'TinyPNG',
        url: 'https://tinyjpg.com',
        description: 'Compress PNG images while preserving transparency'
      },
      {
        icon: require('./assets/icons/soogif.png').default,
        name: 'SOOGIF',
        url: 'https://www.soogif.com/',
        description: 'Gif动态图片搜索引擎_在线一键制作压缩动图表情工具！'
      },
      {
        icon: require('./assets/icons/iloveimg.png').default,
        name: 'iloveimg',
        url: 'https://www.iloveimg.com/zh-cn',
        description: 'iLoveIMG是一款在线处理图片文件的网站。我们的服务完全免费，而且使用简便。网站的功能有：压缩图像文件、调整文件尺寸、裁剪文件，以及转换文件格式等！'
      }
    ]
  },
  {
    name: '实用工具',
    links: [
      {
        icon: require('./assets/icons/iLovePDF.png').default,
        name: 'iLovePDF',
        url: 'https://www.ilovepdf.com/',
        description: 'iLovePDF is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!'
      },
      {
        icon: require('./assets/icons/baimiao.ico').default,
        name: '白描OCR',
        url: 'https://web.baimiaoapp.com/',
        description: '图片转文字在线 - 图片文字提取 - 网页OCR文字识别'
      },
      {
        icon: require('./assets/icons/EasyScreenOCR.ico').default,
        name: 'EasyScreenOCR',
        url: 'https://online.easyscreenocr.com/ZH/',
        description: 'EasyScreenOCR免費提供100％免費的在線光學字符識別（OCR）服務。 您可以從圖像中提取英語，中文，日語，葡萄牙語，法語，意大利語，西班牙語，俄語，韓語文本。'
      },
      {
        icon: require('./assets/icons/beibei.jpg').default,
        name: '贝贝BiliBili',
        url: 'https://xbeibeix.com/api/bilibili/',
        description: '贝贝BiliBili - B站视频下载'
      },
    ]
  },
  {
    name: '在线视频',
    links: [
      {
        icon: require('./assets/icons/iqiyi.png').default,
        name: '爱奇艺',
        url: 'https://www.iqiyi.com/',
        description: '在线视频网站-海量正版高清视频在线观看'
      },
      {
        icon: require('./assets/icons/tencent-video.ico').default,
        name: '腾讯视频',
        url: 'https://v.qq.com/',
        description: '中国领先的在线视频媒体平台,海量高清视频在线观看'
      },
      {
        icon: require('./assets/icons/bilibili.ico').default,
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com/',
        description: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
      },
      {
        icon: require('./assets/icons/mgtv.ico').default,
        name: '芒果TV',
        url: 'https://www.mgtv.com/',
        description: '大家都在看的在线视频网站-热门综艺最新电影电视剧在线观看'
      },
      {
        icon: require('./assets/icons/youku.png').default,
        name: '优酷',
        url: 'https://www.youku.com/',
        description: '这世界很酷'
      },
      {
        icon: require('./assets/icons/video.png').default,
        name: 'VIP视频',
        url: './video.html',
        description: '我能看VIP视频呦'
      },
    ]
  },
]

/*
https://xiaomark.com/tool
https://www.soukuzhan.com/
*/
