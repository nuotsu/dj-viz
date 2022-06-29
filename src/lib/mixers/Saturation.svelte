<Knob title="saturation"
	bind:value={$saturation}
	min={0} max={5}
	disabled={!$camera}
/>

<script context="module">
	import Knob from '$lib/inputs/Knob.svelte'
	import { camera } from '$lib/controls/Camera.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_SATURATION = 0
	export const saturation = writable(DEFAULT_SATURATION)
</script>
