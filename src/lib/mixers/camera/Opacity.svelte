<Knob title="opacity" key="o"
	bind:value={$opacity}
	min={0.1} max={1} step={0.1}
/>

<script context="module">
	import Knob from '$$/inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_OPACITY = 0.4
	export const opacity = writable(DEFAULT_OPACITY)
</script>
