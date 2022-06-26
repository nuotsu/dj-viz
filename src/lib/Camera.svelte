<button on:click={() => { $camera = !$camera }}>
	🤳
</button>

<script context="module">
	import { dev } from '$app/env'
	import { writable } from 'svelte/store'

	export const camera = writable(dev)
</script>
