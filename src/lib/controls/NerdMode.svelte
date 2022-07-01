<HotKey key="N" toggle={nerdMode} />

<button
	class:off={!$nerdMode}
	class="focus-visible:focus"
	on:click={() => { $nerdMode = !$nerdMode }}
>
	🤓
</button>

<script context="module">
	import HotKey from '$lib/inputs/HotKey.svelte'
	import { writable } from 'svelte/store'

	export const nerdMode = writable(false)
</script>
