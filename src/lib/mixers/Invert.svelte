<Toggle
	title="invert"
	shortcut="i"
	bind:checked={$invert}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_INVERT = false
	export const invert = writable(DEFAULT_INVERT)
</script>
