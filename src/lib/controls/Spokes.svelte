<svelte:window on:keydown={shortcut} />

<label id="spokes">
	📊({$spokes})

	<input type="range"
		bind:this={input_spokes}
		bind:value={$spokes}
		min={1} max={SPOKES_MAX}
	/>
</label>

<label id="offset">
	<input type="range"
		bind:this={input_offset}
		bind:value={$offset}
		min={0} max={SPOKES_MAX}
	/>
	offset({$offset})
</label>

<style>
	#spokes {
		display: block;
	}

	input {
		accent-color: forestgreen;
	}

	#spokes input {
		width: 100%;
	}

	#offset {
		display: flex;
		align-items: center;
	}
</style>

<script>
	let input_spokes, input_offset

	function shortcut({ key }) {
		if (key === '\\') input_spokes.focus()
		if (key === '|') input_offset.focus()
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const SPOKES_MAX = 1024
	export const spokes = writable(SPOKES_MAX)
	export const offset = writable(0)
</script>
