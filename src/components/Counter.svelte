<script>
	let count = 0;
</script>

<div class="p-10">
	<input class="text-indent-3" type=number bind:value={count}>
	<button class="ml-3" on:click="{() => count += 1}">count</button>
</div>
