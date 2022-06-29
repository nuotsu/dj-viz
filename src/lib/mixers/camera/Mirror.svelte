<Toggle
	title="mirror"
	shortcut="x"
	bind:checked={$mirror}
/>

<script context="module">
	import Toggle from '$$/inputs/Toggle.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_MIRROR = false
	export const mirror = writable(DEFAULT_MIRROR)
</script>
