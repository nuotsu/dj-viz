<Toggle
	title="mirror"
	shortcut="x"
	bind:checked={$mirror}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { writable } from 'svelte/store'

	export const mirror = writable(false)
</script>
