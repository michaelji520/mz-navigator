<div class="header">
  <nav class="top-bar">
    <img class="logo" src={LOGO} alt="LOGO">
    <span class="name">小猪导航</span>
    <span class="datetime">{datetime}</span>
    <span class="daily-sentence">{sentence}</span>
  </nav>
  <div class="daily-words"></div>
  <div class="search-bar">
    <ul class="search-list">
      {#each SEARCH_ENGINES as engine, i}
      <li on:click={(e) => handleSearchEngineClick(e, i)} class={i === current ? 'active' : ''}>{engine.name}</li>
      {/each}
    </ul>
    <div class="keyword-bar">
      <input bind:value={keyword} on:keydown={handleInputKeyDown} on:input={handleTextInput} type="text" name="keyword" class="keyword" placeholder="请输入搜索内容" autocomplete="off">
      <span class="icon-wrapper">
        <svg class="search-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="576" data-spm-anchor-id="a313x.7781069.1998910419.i1"><path d="M192 448c0-141.152 114.848-256 256-256s256 114.848 256 256-114.848 256-256 256-256-114.848-256-256z m710.624 409.376l-206.88-206.88A318.784 318.784 0 0 0 768 448c0-176.736-143.264-320-320-320S128 271.264 128 448s143.264 320 320 320a318.784 318.784 0 0 0 202.496-72.256l206.88 206.88 45.248-45.248z" p-id="577"></path></svg>
      </span>
      <ul class="option-list">
        {#each suggestions as sug, i}
        <li on:click={(e) => handleSuggestionOptionClick(e, i)}>{sug}</li>
        {/each}
      </ul>
    </div>
  </div>

</div>

<script lang="ts">
  import {SEARCH_ENGINES} from '../../database/database';
  import LOGO from './assets/logo_pig_small.png';
  import Flyio from 'flyio';

  const date: Date = new Date();
  const week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const datetime = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${week[date.getDay()]}`;
  let keyword = '';
  let sentence: string = '';
  let suggestions = [];

  let current = 0;

  bindSuggestionHandler();
  // 获取每日一言
  Flyio.get('https://v1.hitokoto.cn').then((res) => {
    const data = res && res.data || {};
    sentence = data.hitokoto && data.from ? `${data.hitokoto}  ——${data.from}` : '';
  });

  const openNewTab = (current: number, list: Array<SearchEngine>) => {
    if (!Number.isInteger(current) || current < 0) current = 0;
    window.open(`${list[current].link}${keyword}`,'_blank');
  }

  const handleTextInput = () => {
    if (!keyword) return suggestions = [];
    SEARCH_ENGINES[current].suggestion.getSuggestions(keyword);
  }

  const handleInputKeyDown = (e) => {
    if (e.keyCode === 13) openNewTab(current, SEARCH_ENGINES);
  }

  const handleSearchEngineClick = (e, idx) => {
    const prev = SEARCH_ENGINES[current];
    prev.suggestion && prev.suggestion.unbindSuggestionHandler();
    current = idx;
    bindSuggestionHandler();
    suggestions = [];
  }

  function bindSuggestionHandler() {
    const enging = SEARCH_ENGINES[current];
    enging.suggestion && enging.suggestion.bindSuggestionHandler((params) => {
      suggestions = params;
    });

  }

  const handleSuggestionOptionClick = (e, i) => {
    keyword = suggestions[i];
    suggestions = [];
    openNewTab(current, SEARCH_ENGINES);
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
      .datetime, .daily-sentence {
        font-size: 14px;
        line-height: 16px;
        color: #DDDDDD;
      }
      .daily-sentence {
        font-size: 14px;
        margin: 0 0 0 auto;
      }
    }
    .search-bar {
      width: 56%;
      margin: 80px auto 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .search-list {
        display: flex;
        li {
          font-size: 14px;
          padding: 8px 20px;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px 4px 0 0;
          color: #CCCCCC;
          &.active {
            color: #333333;
            background-color: rgba(255, 255, 255, 0.8);
          }
        }
      }
      .keyword-bar {
        position: relative;
        display: flex;
        align-items: center;
      }
      .keyword {
        font-size: 14px;
        flex: 1;
        height: 42px;
        outline: none;
        border: 0;
        border-radius: 0 0 0 4px;
        padding: 8px 0 8px 12px;
        background-color: rgba(255, 255, 255, 0.8);
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 42px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 0 4px 4px 0;
      }
      .search-icon {
        width: 24px;
        height: 24px;
        fill: #444444;
      }
      .option-list {
        position: absolute;
        font-size: 14px;
        line-height: 30px;
        top: 100%;
        background: #EEEEEE;
        border-radius: 4px;
        width: 100%;
        box-shadow: 0px 0px 1px 0px #AAAAAA;
        color: #333333;
        li {
          cursor: pointer;
          padding: 0 12px;
          &:hover {
            background-color: royalblue;
            color: #FFFFFF;
          }
        }
      }
    }
  }
</style>
