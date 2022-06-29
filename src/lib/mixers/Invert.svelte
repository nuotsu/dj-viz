<Toggle
	title="invert"
	shortcut="i"
	bind:checked={$invert}
	disabled={!$sound}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { sound } from '$lib/Sound.svelte'
	import { writable } from 'svelte/store'

	export const invert = writable(false)
</script>
