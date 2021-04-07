<script>
	import { createEventDispatcher } from 'svelte'
	import {yes, no} from '../config/svg.ts'

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

	<div class="svg-btn" on:click={sumbit}>
		{@html yes}
	</div>
	<div class="svg-btn" on:click={cancel}>
		{@html no}
	</div>
</div>
