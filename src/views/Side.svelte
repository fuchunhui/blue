<script lang="ts">
  import { Navigate } from 'svelte-router-spa'
  // interface SideMenu {
  //   label: string;
  //   value: string;
  // }
  import { routes } from '../router/index.js';
  // export let list: Array<SideMenu>;

  const menus = routes.map(({name}) => {
    const title = name === '/' ? 'home' : name;
    return {
      label: title,
      value: title
    };
  });
</script>

<div class="w-40 h-full bg-blue-200">
  {#each menus as { label, value }, i}
    <a class="p-6" href="{value}">
      {i + 1}: {label}
    </a>
    <!-- <Navigate to="counter">{label}</Navigate> -->
  {/each}
</div>

<style>

</style>