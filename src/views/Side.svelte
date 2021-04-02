<script lang="ts">
  interface SideMenu {
    label: string;
    value: string;
  }
  export let list: Array<SideMenu>;
</script>

<div>
  {#each list as { label, value }, i}
    <a class="p-6" target="_blank" href="https://www.youtube.com/watch?v={label}">
      {i + 1}: {value}
    </a>
  {/each}
</div>

<style>

</style>