<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import { routes } from './router/index.js';
  import Side from './views/Side.svelte';

  const menus = routes.map(({name}) => {
    const title = name === '/' ? 'home' : name;
    return {
      label: title,
      value: title
    };
  });
</script>

<main>
  <h1>Hello Typescript!</h1>
  <div>
    <Side list={menus}/>
    <Router {routes} />
  </div>
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
