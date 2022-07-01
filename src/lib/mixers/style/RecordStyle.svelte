<Toggle
	label="💿"
	shortcut="d"
	value={recordStyle}
/>

<script context="module">
	import Toggle from '$lib/inputs/Toggle.svelte'
	import { writable } from 'svelte/store'

	export const recordStyle = writable(true)
</script>
