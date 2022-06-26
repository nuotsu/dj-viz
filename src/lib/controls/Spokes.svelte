<svelte:window on:keydown={shortcut} />

<Knob title="📊"
	bind:ref={input_spokes}
	bind:value={$spokes}
	min={1} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
/>

<Knob title="offset"
	bind:ref={input_offset}
	bind:value={$offset}
	min={0} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
/>

<script context="module">
	import Knob from './Knob.svelte'
	import { writable } from 'svelte/store'

	let input_spokes, input_offset

	function shortcut({ key }) {
		if (key === '\\') input_spokes.focus()
		if (key === '|') input_offset.focus()
	}

	export const SPOKES_MAX = 1024
	export const spokes = writable(SPOKES_MAX)
	export const offset = writable(0)
</script>
