<Select {key} on:change={onChange}>
	<option value={generateValues()} default selected>default</option>

	{#each Object.entries(presets) as [name, value]}
		<option value={generateValues(value)}>{name}</option>
	{/each}
</Select>

<script>
	import Select from '$$/inputs/Select.svelte'
	import mixers from '$$/mixers/mixers'

	export let key, presets, defaults

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
