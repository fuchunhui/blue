<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import { routes } from './router/index';
  import Header from './views/Header.svelte';
  import Side from './views/Side.svelte';
</script>

<main class="flex-center flex-col h-full text-base min-h-480">
  <Header />
  <div class="flex w-full h-full overflow-hidden">
    <Side />
    <div class="w-full h-full overflow-auto bg-blue-100 dark:bg-red-100">
      <Router {routes} />
    </div>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media (min-width: 480px) {}
</style>
