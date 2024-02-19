<script>
	import { createEventDispatcher } from 'svelte'
	import {yes, no} from '../config/svg'

	export let value = 'default';

	const dispatch = createEventDispatcher()

	const sumbit = () => {
		console.log(`sumbit, ${value}`);
		dispatch('sumbit', {
			value
		});
	}
	const cancel = () => {
		console.log(`cancel, ${value}`);
		dispatch('cancel');
	}
</script>

<div class="p-10 flex">
	<input bind:value={value} placeholder="请输入" class="w-80 h-8 rounded text-indent-3 text-gray-700">

	<div class="svg-btn" on:click={sumbit} on:keyup={sumbit} role="button" tabindex="-1">
		{@html yes}
	</div>
	<div class="svg-btn" on:click={cancel} on:keyup={cancel} role="button" tabindex="-1">
		{@html no}
	</div>
</div>
