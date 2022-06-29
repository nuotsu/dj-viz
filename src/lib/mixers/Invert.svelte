<Toggle
	title="invert"
	shortcut="i"
	bind:checked={$invert}
	disabled={!$sound}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { sound } from '$lib/controls/Sound.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_INVERT = false
	export const invert = writable(DEFAULT_INVERT)
</script>
