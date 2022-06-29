<main>
	<DJ/>

	<details open>
		<summary>🎛</summary>

		<Controls/>
		<Mixers/>
	</details>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr auto auto;
		gap: 0 0.5rem;
		min-height: 100vh;
	}

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
	import DJ from '$$/dj/DJ.svelte'
	import Controls from '$$/controls/Controls.svelte'
	import Mixers from '$$/mixers/Mixers.svelte'
</script>
