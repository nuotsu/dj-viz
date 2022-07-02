<HotKey {key} callback={() => select.focus()} />

<label>
	{#if label}{label}{/if}

	<select bind:this={select} bind:value on:change>
		<slot></slot>
	</select>
</label>

<style>
	label {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	select {
		border-radius: 0.25em;
		@apply transition-all;
	}

	label:focus-within select {
		@apply focus;
	}
</style>

<script>
	import HotKey from './HotKey.svelte'

	export let label, key, value

	let select
</script>
