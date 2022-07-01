<Control label="💿" key="D" value={record} />

<script context="module">
	import Control from './Control.svelte'
	import { writable } from 'svelte/store'

	export const record = writable(true)
</script>
