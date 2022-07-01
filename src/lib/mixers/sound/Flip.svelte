<KnobToggle label="flip" key="f" value={flip} />

<script context="module">
	import KnobToggle from '$lib/inputs/KnobToggle.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_FLIP = false
	export const flip = writable(DEFAULT_FLIP)
</script>
