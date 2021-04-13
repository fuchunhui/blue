<script>
	let promise = getRandomNumber();

	async function getRandomNumber() {
		const res = await fetch(`https://svelte.dev/tutorial/random-number`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<div class="pl-5 pt-5">
	<button class="w-60 h-10 bg-green-200 rounded-md text-lg mb-3" on:click={handleClick}>
		generate random number
	</button>
	
	{#await promise}
		<p class="pl-2">...waiting</p>
	{:then number}
		<p class="pl-2">the number is {number}.</p>
	{:catch error}
	  <p class="pl-2 text-red-600">{error.message}</p>
	{/await}
</div>
