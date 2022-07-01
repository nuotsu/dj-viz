<Control label="🤓" key="N" value={nerdMode} />

<script context="module">
	import Control from './Control.svelte'
	import { writable } from 'svelte/store'

	export const nerdMode = writable(false)
</script>
