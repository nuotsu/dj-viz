<Control label="💿" key="D" value={record} />

<script context="module">
	import Control from './Control.svelte'
	import { writable } from 'svelte/store'
	import { dev } from '$app/env'

	export const record = writable(dev)
</script>
