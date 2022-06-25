<svelte:window on:keydown={shortcut} />

<label>
	<input bind:checked={$invert} type="checkbox" />
	invert
</label>

<style>
	label {
		display: flex;
		align-items: center;
	}
</style>

<script>
	function shortcut({ key }) {
		if (key === 'i') $invert = !$invert
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const invert = writable(false)
</script>
