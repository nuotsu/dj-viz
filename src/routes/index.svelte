<main>
	<DJ/>

	<details open>
		<summary>🎛</summary>

		<Controls/>
		<Presets/>
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
	}

	details:not([open]) summary:not(:is(:hover, :focus)) {
		opacity: 0;
	}
</style>

<script>
	import DJ from '$lib/dj/DJ.svelte'
	import Controls from '$lib/controls/Controls.svelte'
	import Presets from '$lib/Presets.svelte'
	import Mixers from '$lib/mixers/Mixers.svelte'
</script>
