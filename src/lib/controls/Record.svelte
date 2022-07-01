<HotKey key="d" toggle={record} />

<button
	class:off={!$record}
	class="focus-visible:focus"
	on:click={() => { $record = !$record }}
>
	💿
</button>

<script context="module">
	import HotKey from '$lib/inputs/HotKey.svelte'
	import { writable } from 'svelte/store'

	export const record = writable(true)
</script>
