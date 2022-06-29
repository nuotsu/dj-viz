<Knob title="spokes" shortcut="\"
	bind:value={$spokes}
	min={1} max={SPOKES_MAX}
	factor={0.2}
	toFixed={0}
	disabled={!$sound}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { sound } from '$lib/controls/Sound.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_SPOKES = 1024
	export const SPOKES_MAX = 1024
	export const spokes = writable(SPOKES_MAX)
</script>
