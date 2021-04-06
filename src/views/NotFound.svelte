<script>
  import notFound from '../assets/404.gif'
  import iamsorry from '../assets/404-2.jpeg'
  import { navigateTo, Navigate } from 'svelte-router-spa'

  // const showImg = Math.random() > 0.3;
  const showImg =false;
  const source = Math.random() > 0.5 ? notFound : iamsorry;

  const handleClick = type => {
    const UrlMap = {
      'GITHUB': 'confirm',
      'HOME': 'counter'
    };
    console.log('UrlMap[type]: ', UrlMap[type]);
    navigateTo(UrlMap[type]);
  }
</script>

<div class="flex justify-center items-center not-found">
  {#if showImg}
    <picture>
      <img src={source} alt="似乎有什么不太对..." />
    </picture>
  {:else}
    <div class="not-found-text p-10">
      <p class="not-1 text-8xl text-gray-200">404</p>
      <p class="text-2xl text-gray-300 italic">Whoops! This page does not exist.</p>
      <p class="text-base text-gray-400 italic">Try a link below to help you find your way.</p>
      <div class="mt-10">
        <p>TTTTT<Navigate to="counter"></Navigate></p>
        <button class="w-32 btn-blue mr-8" on:click={() => handleClick('HOME')}>HOME</button>
        <button class="w-32 btn-blue" on:click={() => handleClick('GITHUB')}>GITHUB</button>
        <button class="w-32 btn-blue">GITHUB<Navigate to="counter"></Navigate></button>
      </div>
    </div>
  {/if}
</div>

<style>
.not-found {
  /* TODO 测试 */
  height: 800px;
}
.not-found-text {
  width: 2000px;
  height: 700px;
  background: url(src/assets/404-bg.jpeg);
}
.not-1 {
  font-family: Helvetica, sans-serif, Arial;
}
</style>
