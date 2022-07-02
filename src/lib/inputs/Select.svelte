<HotKey {key} callback={() => select.focus()} />

<label>
	<select bind:this={select} bind:value on:change>
		<slot></slot>
	</select>
</label>

<style>
	label {
		display: block;
		text-align: center;
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

	export let key, value

	let select
</script>
