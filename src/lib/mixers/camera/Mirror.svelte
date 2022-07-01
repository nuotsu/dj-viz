<KnobToggle
	label="mirror"
	shortcut="x"
	bind:checked={$mirror}
/>

<script context="module">
	import KnobToggle from '$lib/inputs/KnobToggle.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_MIRROR = false
	export const mirror = writable(DEFAULT_MIRROR)
</script>
