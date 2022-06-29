<Knob title="width" shortcut="w"
	bind:value={$width}
	min={0.5} max={5} step={0.5}
/>

<script context="module">
	import Knob from '../../inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_WIDTH = 1
	export const width = writable(DEFAULT_WIDTH)
</script>
