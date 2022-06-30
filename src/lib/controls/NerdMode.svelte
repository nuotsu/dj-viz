<svelte:window on:keydown={onKeydown} />

<button
	class:off={!$nerdMode}
	class="focus-visible:focus"
	on:click={() => { $nerdMode = !$nerdMode }}
>
	🤓
</button>

<script context="module">
	import { writable } from 'svelte/store'

	export const nerdMode = writable(false)

	function onKeydown({ key }) {
		if (key === 'n') nerdMode.update(n => !n)
	}
</script>
