<Hex label="Hz" bind:value={$frequencyColor} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_FREQUENCY_COLOR = '#ffffff'
	export const frequencyColor = writable(DEFAULT_FREQUENCY_COLOR)
</script>
