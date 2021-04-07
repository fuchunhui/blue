<script>
	let count = 1;

	// the `$:` means 're-run whenever these values change'
	$: doubled = count * 2;
	$: quadrupled = doubled * 2; // new word, good.

	function handleClick() {
		count += 1;
	}
</script>

<div class="px-8 py-4 flex">
	<button class="w-40 h-32 bg-blue-300 rounded-lg" on:dblclick={handleClick}>
		dbl Count: {count}
	</button>
	<div class="episodes">
		<p class="episodes-label">doubled</p>
		<p class="episodes-text">{count} * 2 = {doubled}</p>
	</div>
	<div class="episodes">
		<p class="episodes-label">Quadrupled</p>
		<p class="episodes-text">{doubled} * 2 = {quadrupled}</p>
	</div>
</div>
