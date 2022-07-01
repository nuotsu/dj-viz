<main>
	<DJ/>

	<ControlPanel>
		<Controls/>
		<Mixers/>
	</ControlPanel>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr auto auto;
		gap: 0 0.5rem;
		min-height: 100vh;
	}
</style>

<script>
	import DJ from '$$/dj/DJ.svelte'
	import Controls from '$$/controls/Controls.svelte'
	import Mixers from '$$/mixers/Mixers.svelte'
	import ControlPanel from '$lib/ControlPanel.svelte'
</script>
