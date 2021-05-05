<a class="website-card" href={website.url} target="_blank">
  <img class="logo" src={website.icon} alt="logo">
  <div class="info">
    <div class="name">{website.name}</div>
    <div class="desc" title={website.description}>{website.description}</div>
  </div>
</a>

<script lang="ts">
  export let website: Website;

</script>

<style lang="less">
  .website-card {
    display: flex;
    align-items: center;
    width: 280px;
    padding: 15px 20px;
    margin: 0 20px 20px 0;
    background: #FFFFFF;
    cursor: pointer;
    box-shadow: 0 1px 5px rgb(180 195 255 / 30%);
    border: 1px solid transparent;
    border-radius: 2px;
    transition: border .3s;
    flex-shrink: 0;
    &:hover {
      border: 1px solid #3464e0;
    }
    .logo {
      width: 24px;
      height: 24px;
      margin: 0 10px 0 0;
    }
    .info {
      width: calc(100% - 40px);
      line-height: 20px;
      .name {
        font-size: 14px;
        color: #333333;
      }
      .desc {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        color: #999999;
      }
    }

  }
</style>