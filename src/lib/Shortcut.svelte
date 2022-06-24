<svelte:window on:keydown={keydown} />

<input bind:checked type="checkbox" hidden />

<script>
	export let key, checked

	function keydown(e) {
		if (e.key === key) {
			checked = !checked
		}
	}
</script>
