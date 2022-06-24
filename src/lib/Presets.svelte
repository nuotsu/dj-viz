<select bind:value>
	{#each Object.keys(presets) as name}
		<option value={name}>{name}</option>
	{/each}
</select>

<script>
	import {SPOKES_MAX} from './Spokes.svelte'

	export let value
</script>

<script context="module">
	export const presets = {
		default: {
			spokes: SPOKES_MAX,
			offset: 0,
			speed: 1,
			min: 50,
			max: 100,
			invert: false,
		},
		viz: {
			spokes: 100,
			offset: 0,
			speed: 1,
			min: 50,
			max: 100,
			invert: false,
		},
		clock: {
			spokes: 12,
			offset: 0,
			speed: 0,
			min: 0,
			max: 100,
			invert: true,
		},
	}
</script>
