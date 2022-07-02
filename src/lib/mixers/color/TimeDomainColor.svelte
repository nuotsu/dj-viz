<Hex label="osc" bind:value={$timeDomainColor} />

<script context="module">
	import Hex from '$$/inputs/Hex.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_TIME_DOMAIN_COLOR = '#ffffff'
	export const timeDomainColor = writable(DEFAULT_TIME_DOMAIN_COLOR)
</script>
