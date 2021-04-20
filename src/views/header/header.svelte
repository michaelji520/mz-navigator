<div class="header">
  <nav class="top-bar">
    <img class="logo" src={LOGO} alt="">
    <span class="name">小猪导航</span>
    <span class="datetime">{datetime}</span>

  </nav>

</div>

<script>
  import {SEARCH_ENGINES} from '../../database';
  import LOGO from './assets/logo_pig_small.png';

  const date = new Date();
  const week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const datetime = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${week[date.getDay()]}`;



</script>

<style lang="less">
  .header { 
    width: 100%;
    height: 400px;
    background-image: url('./assets/b5.jpg');
    background-size: cover;
    background-position: center;
    .top-bar {
      display: flex;
      align-items: center;
      height: 64px;
      padding: 8px 16px;
      .logo {
        height: 32px;
        padding: 0 8px 0 0;
      }
      .name {
        font-size: 18px;
        color: #FFFFFF;
        line-height: 18px;
        padding: 0 80px 0 0;
      }
      .datetime {
        font-size: 16px;
        line-height: 16px;
        color: #DDDDDD;
      }
    }
  }
</style>