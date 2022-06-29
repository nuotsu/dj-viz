<button
	class:off={!$camera} class="focus-visible:focus"
	title="Camera {$camera ? 'on' : 'off'}"
	on:click={() => { $camera = !$camera }}
>
	📹
</button>

<script context="module">
	import { writable } from 'svelte/store'

	export const camera = writable(false)
</script>
