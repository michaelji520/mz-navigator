<div class="container">
  <input bind:value={url} type="text" name="keyword" class="keyword" placeholder="请输入要观看的视频地址">
  <button on:click={handleClear}>清空</button>
  <button on:click={handleVisit}>访问</button>
</div>

<script>
  let url = '';
  const handleClear = () => {
    url = '';
  }
  const handleVisit = () => {
    window.open(`https://jx.m3u8.tv/jiexi/?url=${encodeURIComponent(url)}`,'_blank');
  }

</script>

<style lang="less">
	.container {
		margin: 0;
    input {
      width: 420px;
      font-size: 14px;
      padding: 6px 10px;
      outline: none;
      border: 1px solid #F1F1F1;
    }
	}
</style>
