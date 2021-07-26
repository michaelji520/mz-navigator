<div class="content">
  <ul class="category-list">
    {#each WEBSITES as category}
      <li class="category">
        <div class="name">{category.name}</div>
        <div class="website-list">
          {#each category.links as website}
            <WebsiteCard website={website}></WebsiteCard>
          {/each}
        </div>
      </li>
    {/each}
  </ul>

</div>

<script lang="ts">
  import {WEBSITES} from '../../database/database';
  import WebsiteCard from './components/website-card.svelte';

</script>

<style lang="less">
  .content {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 40px;
    .category-list {
      display: flex;
      flex-direction: column;
    }
    .category {
      margin: 0 0 20px 0;
      .name {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0 20px 0;
      }
    }
    .website-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
