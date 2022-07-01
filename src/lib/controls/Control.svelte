<HotKey {key} toggle={value} />

<label class:off={!$value}>
	<input type="checkbox" hidden bind:checked={$value} />

	{label}
</label>

<script>
	import HotKey from '$lib/inputs/HotKey.svelte'

	export let label, key, value
</script>
