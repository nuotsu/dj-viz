<Knob title="offset" shortcut="-"
	bind:value={$offset}
	min={1} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
/>

<script context="module">
	import Knob from '../../inputs/Knob.svelte'
	import { SPOKES_MAX } from './Spokes.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_OFFSET = 1
	export const offset = writable(DEFAULT_OFFSET)
</script>
