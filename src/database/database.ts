/**
 * @description 本文件保存导航信息元数据
 */

import type { link } from "node:fs";


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
