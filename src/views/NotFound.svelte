<script>
  import notFound from '../assets/404.gif'
  import iamsorry from '../assets/404-2.jpeg'
  // import { navigateTo } from 'svelte-router-spa'

  // const showImg = Math.random() > 0.3;
  const showImg =false;
  const source = Math.random() > 0.5 ? notFound : iamsorry;

  const handleClick = type => {
    const UrlMap = {
      'HOME': '/'
    };
    // navigateTo(UrlMap[type]);
    alert('当前版本的路由导航失效了...');
  }
  const handleGithub = () => {
    window.open('https://github.com/fuchunhui/blue');
  };
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
        <button class="w-32 btn-blue mr-8" on:click={() => handleClick('HOME')}>HOME</button>
        <button class="w-32 btn-blue" on:click={handleGithub}>GITHUB</button>
      </div>
    </div>
  {/if}
</div>

<style>
.not-found-text {
  background-image: url('/src/assets/404-bg.jpeg');
}
.not-1 {
  font-family: Helvetica, sans-serif, Arial;
}
</style>
