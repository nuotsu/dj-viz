<Hex label="Record label" bind:value={$labelColor} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const labelColor = writable('#ff0000')
</script>
