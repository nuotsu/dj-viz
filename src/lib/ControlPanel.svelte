<svelte:window on:keydown={onKeydown} />

<details {open}>
	<summary>🎛</summary>

	<slot></slot>
</details>

<style>
	details {
		position: sticky;
		z-index: 1;
		bottom: 0;
	}

	summary {
		position: fixed;
		left: 0;
		bottom: 0;
		padding: 0.5rem;
	}

	details:not([open]) summary:not(:is(:hover, :focus)) {
		opacity: 0;
	}
</style>

<script>
	let open = true

	function onKeydown({ key }) {
		if (key === '~') open = !open
	}
</script>
