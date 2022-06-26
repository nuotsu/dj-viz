<Knob title="width" shortcut="w"
	bind:value={$width}
	min={0.5} max={5} step={0.5}
/>

<script context="module">
	import { writable } from 'svelte/store'
	import Knob from '../inputs/Knob.svelte'

	export const width = writable(1)
</script>
