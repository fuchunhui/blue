<script>
	import ConfirmInput from '../toolkits/ConfirmInput.svelte'

	let value = 'hello input.'

	const sumbit = event => {
		value = event.detail.value;
	}
	const cancel = () => {
		alert('oh, nooo....');
		value = 'For man is man and master of his fate.'
	}
</script>

<ConfirmInput value={value} on:sumbit={sumbit} on:cancel={cancel}/>
<div class="pl-10">{value}</div>
