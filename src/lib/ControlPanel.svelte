<HotKey key="~" callback={() => { open = !open }} />

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
	import HotKey from './inputs/HotKey.svelte'

	let open = true
</script>
