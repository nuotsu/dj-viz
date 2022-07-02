<Knob label="saturation" key="s"
	bind:value={$saturation}
	min={0} max={5}
/>

<script context="module">
	import Knob from '$$/inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_SATURATION = 0
	export const saturation = writable(DEFAULT_SATURATION)
</script>
