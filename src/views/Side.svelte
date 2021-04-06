<script lang="ts">
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

<div>
  {#each menus as { label, value }, i}
    <a class="p-6" target="_blank" href="https://www.youtube.com/watch?v={label}">
      {i + 1}: {value}
    </a>
  {/each}
</div>

<style>

</style>