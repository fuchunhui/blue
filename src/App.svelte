<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import { routes } from './router/index.js';
  import Header from './views/Header.svelte';
  import Side from './views/Side.svelte';
</script>

<main class="flex-center flex-col h-full text-base">
  <Header />
  <div class="flex w-full h-full">
    <Side />
    <Router {routes} />
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media (min-width: 480px) {}
</style>
