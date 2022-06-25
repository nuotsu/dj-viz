<svelte:window on:keydown={shortcut} />

<label>
	<input type="range"
		bind:this={input}
		bind:value={$speed}
		on:keydown={focused}
		min={0} max={10} step={0.05}
	/>

	⏱({$speed})
</label>

<style>
	label {
		display: flex;
		align-items: center;
	}

	input {
		accent-color: lightgray;
	}
</style>

<script>
	let input

	const nums = Array.from(Array(10).keys()).map(String)

	function shortcut({ key }) {
		if (key == 't') input.focus()
	}

	function focused({ key }) {
		if (nums.includes(key)) $speed = Number(key)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const speed = writable(1)
</script>
