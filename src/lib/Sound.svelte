<button
	title="Sound {$sound ? 'on' : 'off'}"
	on:click={() => { $sound = !$sound }}
>
	🎧
</button>

<script context="module">
	import { dev } from '$app/env'
	import { writable } from 'svelte/store'

	export const sound = writable(dev)
</script>
