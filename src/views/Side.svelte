<script lang="ts">
  import { routes } from '../router/index.js';

  const menus = routes.map(({name}) => {
    const title = name === '/' ? 'home' : name;
    return {
      label: title,
      value: name
    };
  });
</script>

<div class="w-40 h-full bg-blue-200">
  {#each menus as { label, value }, i}
    <div class="h-10.5 flex-center">
      <a href="{value}">
        {label}
      </a>
    </div>
  {/each}
</div>
