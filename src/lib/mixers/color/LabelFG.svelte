<Hex label="FG" bind:value={$labelFG} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_LABEL_FG = '#000000'
	export const labelFG = writable(DEFAULT_LABEL_FG)
</script>
