<label>
	<select on:change={onChange}>
		<option value={JSON.stringify(DEFAULTS)} default selected>
			default
		</option>

		{#each Object.entries(presets) as [name, value]}
			<option value={JSON.stringify({ ...DEFAULTS, ...value })}>
				{name}
			</option>
		{/each}
	</select>
</label>

<style>
	label {
		display: block;
		text-align: center;
	}

	select {
		background-color: transparent
	}
</style>

<script>
	import mixers, { DEFAULTS } from '$lib/mixers'

	function onChange({ target }) {
		for (let [name, value] of Object.entries(JSON.parse(target.value))) {
			mixers[name].set(value)
		}
	}

	/** @type {import('../app').Preset} */
	let presets = {
		lite: { spokes: 768, spread: 4, speed: 0.5, },
		clock: { spokes: 240, spread: 20, width: 3, speed: 0.1, min: 0, max: 24, invert: true, },
		moire: { spokes: 124, spread: 1, offset: 100, width: 0.5, min: 0, }
	}
</script>
