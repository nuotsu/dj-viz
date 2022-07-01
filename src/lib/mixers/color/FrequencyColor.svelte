<Hex label="disc" bind:value={$frequencyColor} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const frequencyColor = writable('#ffffff')
</script>
