<Control label="📹" key="C" value={camera} />

<script context="module">
	import Control from './Control.svelte'
	import { writable } from 'svelte/store'

	export const camera = writable(false)
</script>
