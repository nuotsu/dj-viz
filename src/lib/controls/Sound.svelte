<Control label="🎧" key="S" value={sound} />

<script context="module">
	import Control from './Control.svelte'
	import { dev } from '$app/env'
	import { writable } from 'svelte/store'

	export const sound = writable(dev)
</script>
