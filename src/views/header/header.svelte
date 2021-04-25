<div class="header">
  <nav class="top-bar">
    <img class="logo" src={LOGO} alt="LOGO">
    <span class="name">小猪导航</span>
    <span class="datetime">{datetime}</span>
  </nav>
  <div class="search-bar">
    <div class="daily-words"></div>
    <div class="search-row">
      <input bind:value={keyword} on:keydown={handleInputKeyDown} type="text" name="keyword" class="keyword" placeholder="请输入搜索内容">
    </div>
  </div>

</div>

<script lang="ts">
  import {SEARCH_ENGINES} from '../../database/database';
  import LOGO from './assets/logo_pig_small.png';

  const date: Date = new Date();
  const week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const datetime = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${week[date.getDay()]}`;
  let keyword = '';

  let current = 0;

  const openNewTab = (current: number, list: Array<SearchEngine>) => {
    if (!Number.isInteger(current) || current < 0) current = 0;
    window.open(`${list[current].link}${keyword}`,'_blank');
  }

  const handleInputKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      console.log('enter');
      openNewTab(current, SEARCH_ENGINES);
    }
  }



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
        height: 36px;
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
    .search-bar {
      margin-top: 80px;
      .search-row {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .keyword {
        height: 36px;
        width: 64%;
        outline: none;
        border: 0;
        border-radius: 4px;
        padding: 8px 12px;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
</style>