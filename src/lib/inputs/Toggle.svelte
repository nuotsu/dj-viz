<svelte:window on:keydown={e => onKeydown(e, value)} />

<label class:off={!$value}>
	<input type="checkbox" hidden bind:checked={value} />

	{label}
</label>

<script>
	export let label, shortcut, value

	function onKeydown(e, value) {
		if (e.key === shortcut) value.update(v => !v)
	}
</script>
