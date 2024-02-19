<script>
  import notFound from '../assets/404.gif'
  import iamsorry from '../assets/404-2.jpeg'
  import { navigateTo } from 'svelte-router-spa'

  const showImg = Math.random() > 0.3;
  const source = Math.random() > 0.5 ? notFound : iamsorry;

  const handleClick = (/** @type {string} */ type) => {
    navigateTo(type);
    alert('当前版本的路由导航失效了...');
  }
  const handleGithub = () => {
    window.open('https://github.com/fuchunhui/blue');
  };
</script>

<div class="flex justify-center items-center h-full not-found overflow-hidden">
  {#if showImg}
    <picture>
      <img class="max-w-320" src={source} alt="似乎有什么不太对..." />
    </picture>
  {:else}
    <div class="not-found-text p-10 w-full h-full flex-center flex-col">
      <p class="not-1 text-8xl text-gray-200">404</p>
      <p class="text-2xl text-gray-300 italic">Whoops! This page does not exist.</p>
      <p class="text-base text-gray-400 italic">Try a link below to help you find your way.</p>
      <div class="mt-10">
        <button class="w-32 btn-blue mr-8" on:click={() => handleClick('home')}>HOME</button>
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
