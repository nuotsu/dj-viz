<main>
	<DJ/>
	<Controls/>
	<Mixers/>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr auto auto;
		gap: 0.5rem;
		min-height: 100vh;
	}
</style>

<script>
	import DJ from '$lib/dj/DJ.svelte'
	import Controls from '$lib/controls/Controls.svelte'
	import Mixers from '$lib/mixers/Mixers.svelte'
</script>
