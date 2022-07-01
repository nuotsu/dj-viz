<svelte:window on:keydown={onKeydown} />

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

	label:focus-within select {
		@apply focus;
	}
</style>

<script>
	import mixers from '$$/mixers/mixers'

	export let shortcut, presets, defaults

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

	function onKeydown({ key }) {
		if (key == shortcut) select.focus()
	}
</script>
