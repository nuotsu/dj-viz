<Hex label="disc" bind:value={$discColor} />

<script context="module">
	import Hex from '$lib/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const discColor = writable('#ffffff')
</script>
