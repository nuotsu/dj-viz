<Toggle
	title="mirror"
	shortcut="x"
	bind:checked={$mirror}
	disabled={!$sound || !$camera}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { writable } from 'svelte/store'
	import { sound } from '$lib/Sound.svelte'
	import { camera } from '$lib/Camera.svelte'

	export const mirror = writable(false)
</script>
