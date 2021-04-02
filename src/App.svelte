<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import { routes } from './router/index.js';

  console.log(routes);
</script>

<main>
  <h1>Hello Typescript!</h1>

  <Router {routes} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
