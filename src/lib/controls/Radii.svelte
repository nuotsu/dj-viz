<svelte:window on:keydown={shortcut} />

<label>
	<input type="range"
		bind:this={rmin}
		bind:value={$min}
		min={0} max={99}
	/>
	{$invert ? 'outer' : 'inner'}
</label>

<label>
	<input type="range"
		bind:this={rmax}
		bind:value={$max}
		min={1} max={100}
	/>
	{$invert ? 'inner' : 'outer'}
</label>

<style>
	label {
		display: flex;
		align-self: start;
	}

	input {
		accent-color: orange;
	}
</style>

<script>
	import { invert } from './Invert.svelte'

	let rmin, rmax

	function shortcut({ key }) {
		if (key == '[') rmin.focus()
		if (key == ']') rmax.focus()
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const min = writable(50)
	export const max = writable(100)
</script>
