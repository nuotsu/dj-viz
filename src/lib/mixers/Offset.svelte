<Knob title="offset" shortcut="|"
	bind:value={$offset}
	min={0} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { writable } from 'svelte/store'
	import { SPOKES_MAX } from './Spokes.svelte'

	export const DEFAULT_OFFSET = 0
	export const offset = writable(DEFAULT_OFFSET)
</script>
