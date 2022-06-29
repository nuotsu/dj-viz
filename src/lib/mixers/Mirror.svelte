<Toggle
	title="mirror"
	shortcut="x"
	bind:checked={$mirror}
	disabled={!$sound || !$camera}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { sound } from '$lib/controls/Sound.svelte'
	import { camera } from '$lib/controls/Camera.svelte'
	import { writable } from 'svelte/store'

	export const mirror = writable(false)
</script>
