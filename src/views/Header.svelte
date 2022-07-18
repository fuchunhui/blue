<header
  class="w-full h-16 flex-center flex-shrink-0 flex-basis-64 bg-gradient-to-r from-green-400 to-blue-500"
  style="--color: {color}">
  <h1>Hello Vite, Svelte, TailwindCSS, {customName}</h1>
</header>

<script lang="ts">
  const customName = 'Now!';
  const color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()}`
</script>

<style>
  h1 {
    color: var(--color);
  }
</style>
