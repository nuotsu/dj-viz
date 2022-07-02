<HotKey {key} toggle={value} />

<label class:off={!$value}>
	<input type="checkbox" hidden bind:checked={$value} />

	{label}
</label>

<style>
	label {
		user-select: none;

		@apply transition-all;
	}
</style>

<script>
	import HotKey from '$lib/inputs/HotKey.svelte'

	export let label, key, value
</script>
