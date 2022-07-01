<HotKey {key} toggle={value} />

<button
	class:off={!$value}
	class="focus-visible:focus"
	on:click={() => { $value = !$value }}
>
	{label}
</button>

<script>
	import HotKey from '$lib/inputs/HotKey.svelte'

	export let label, key, value
</script>
