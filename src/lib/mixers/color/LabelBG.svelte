<Hex label="BG" bind:value={$labelBG} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_LABEL_BG = '#ff0000'
	export const labelBG = writable(DEFAULT_LABEL_BG)
</script>
