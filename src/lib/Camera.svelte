<button on:click={() => { $camera = !$camera }}>
	🤳
</button>

<script context="module">
	import { writable } from 'svelte/store'

	export const camera = writable(true)
</script>
