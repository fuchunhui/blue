<script>
  import notFound from '../assets/404.gif'
  import iamsorry from '../assets/404-2.jpeg'
	
  const showImg = Math.random() > 0.3;
  const source = Math.random() > 0.5 ? notFound : iamsorry;
</script>

<div class="not-found">
  {#if showImg}
    <picture class="not-found-img">
      <img src={source} alt="你的网页被风吹走了" />
    </picture>
  {:else}
    <p>文案提示内容</p>
  {/if}
</div>

<style>

</style>
