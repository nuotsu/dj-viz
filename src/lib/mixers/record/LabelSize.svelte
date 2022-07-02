<Knob label="size" key="z"
	bind:value={$labelSize}
	min={0.1} max={5} step={0.1}
/>

<script context="module">
	import Knob from '$$/inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_LABEL_SIZE = 1
	export const labelSize = writable(DEFAULT_LABEL_SIZE)
</script>
