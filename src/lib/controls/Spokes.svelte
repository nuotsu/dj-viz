<Knob title="📊" shortcut="\"
	bind:value={$spokes}
	min={1} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
/>

<Knob title="offset" shortcut="|"
	bind:value={$offset}
	min={0} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const SPOKES_MAX = 1024
	export const spokes = writable(SPOKES_MAX)
	export const offset = writable(0)
</script>
