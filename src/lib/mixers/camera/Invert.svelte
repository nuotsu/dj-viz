<KnobToggle
	label="invert"
	shortcut="i"
	bind:checked={$invert}
/>

<script context="module">
	import KnobToggle from '$lib/inputs/KnobToggle.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_INVERT = false
	export const invert = writable(DEFAULT_INVERT)
</script>
