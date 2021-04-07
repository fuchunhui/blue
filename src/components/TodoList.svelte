<div class="p-10">
  {#each list as {name, done}, index}
    <label class="block h-8">
      <input type=checkbox bind:checked={done} disabled>
      {index + 1}. {name}.
    </label>
  {/each}
</div>

<script>
  const list = [
    {
      name: '添加待办列表功能',
      done: true
    },
    {
      name: '点击左侧菜单，路由url显示错误',
      done: false
    },
    {
      name: '组件内容优化，移除无效的style内容，全部替换为TailwindCSS',
      done: true
    },
    {
      name: '控制台warning内容，提示"was created with unknown prop currentRoute"',
      done: false
    }
  ];
</script>