<Toggle
	title="flip"
	shortcut="f"
	bind:checked={$flip}
/>

<script context="module">
	import Toggle from '$$/inputs/Toggle.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_FLIP = false
	export const flip = writable(DEFAULT_FLIP)
</script>
