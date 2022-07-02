<Knob label="contrast" key="c"
	bind:value={$contrast}
	min={1} max={20}
/>

<script context="module">
	import Knob from '$$/inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_CONTRAST = 1
	export const contrast = writable(DEFAULT_CONTRAST)
</script>
