<Knob label="hue" key="h"
	bind:value={$hueRotate}
	min={0} max={1} step={0.1}
/>

<script context="module">
	import Knob from '$$/inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_HUE_ROTATE = 0
	export const hueRotate = writable(DEFAULT_HUE_ROTATE)
</script>
