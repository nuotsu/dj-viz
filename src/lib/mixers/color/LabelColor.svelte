<Hex label="label" bind:value={$labelColor} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_LABEL_COLOR = '#ff0000'
	export const labelColor = writable(DEFAULT_LABEL_COLOR)
</script>
