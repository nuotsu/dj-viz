<Hex label="osc" bind:value={$timeDomainColor} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const timeDomainColor = writable('#ffffff')
</script>
