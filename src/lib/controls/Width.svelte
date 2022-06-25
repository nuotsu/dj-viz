<label>
	<input type="range"
		bind:value={$width}
		min={0.5} max={5} step={0.5}
	/>

	width({$width})
</label>

<style>
	input {
		accent-color: gray;
	}
</style>

<script context="module">
	import { writable } from 'svelte/store'

	export const width = writable(1)
</script>
