<HotKey {key} callback={() => select.focus()} />

<label>
	<select bind:this={select} on:change={onChange}>
		<option value={generateValues()} default selected>default</option>

		{#each Object.entries(presets) as [name, value]}
			<option value={generateValues(value)}>{name}</option>
		{/each}
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
	import HotKey from '$lib/inputs/HotKey.svelte'
	import mixers from '$$/mixers/mixers'

	export let key, presets, defaults

	let select

	const generateValues = values => JSON.stringify({
		...defaults,
		...values
	})

	function onChange({ target }) {
		for (let [name, value] of Object.entries(JSON.parse(target.value))) {
			mixers[name].set(value)
		}
	}
</script>
