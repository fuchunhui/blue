<div class="p-10">
  {#each list as {name, done, line}, index}
    <label class="block h-8" class:line>
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
      name: '组件内容优化，移除无效的style内容，全部替换为TailwindCSS',
      done: true
    },
    {
      name: '点击左侧菜单，路由url显示错误（svelte-router-spa与vite不兼容）',
      done: false,
      line: true
    },
    {
      name: '控制台warning内容，提示"was created with unknown prop currentRoute"（同上）',
      done: false,
      line: true
    },
    {
      name: '增加svg loader处理svg内容',
      done: false,
      line: true
    },
    {
      name: '写文章总结',
      done: true
    }
  ];
</script>
