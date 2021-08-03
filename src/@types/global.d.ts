
/**
 * @description 字段定义
 */

interface SearchEngine {
  // 唯一标识
  key: string;
  // 搜索引擎的图标
  icon: string;
  // 搜索引擎地址（带有关键词查询参数）
  link: string;
  // 搜索引擎名称
  name: string;
  // 搜索建议
  suggestion?: {
    bindSuggestionHandler: Function;
    getSuggestions: Function;
    unbindSuggestionHandler: Function
  };
}

/**
 * @description 单个链接定义
 */
interface Website {
  // 链接图标
  icon: string;
  // 链接访问地址
  url: string;
  // 网站名称
  name: string;
  // 网址说明
  description: string;
}

/**
 * @description 链接分类定义
 */
interface Category {
  // 分类名称
  name: string;
  // 分类下的链接列表
  links: Array<Website>;
}

