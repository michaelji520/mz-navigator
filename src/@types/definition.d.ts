/**
 * @description 模块定义
 */

declare module '*.png';
declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module '*.ico';

declare module '*.svelte' {
  import Svelte from 'svelte';
  export default Svelte;
}

declare module '*.less' {
  export default any;
}

interface Window {
  baidu: any;
  sogou: any;
  bing: any;
  google: any;
}