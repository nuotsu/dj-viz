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
		@apply transition-all;
	}

	label:focus-within select {
		background-color: #fff2;
		outline: none;

		@apply glow-sm;
	}
</style>

<script>
	import HotKey from './HotKey.svelte'

	export let label, key, value

	let select
</script>
