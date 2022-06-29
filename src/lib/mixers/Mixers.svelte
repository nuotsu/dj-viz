<nav>
	<fieldset disabled={!$sound}>
		<legend>🎧</legend>
		<Spokes/>
		<Spread/>
		<Offset/>
		<Width/>
		<Speed/>
		<Radii/>
		<Invert/>
	</fieldset>

	<fieldset disabled={!$camera}>
		<legend>📹</legend>
		<Mirror/>
		<Opacity/>
		<Saturation/>
	</fieldset>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	fieldset {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		padding: 0 0.5rem;
		border: 1px solid #fff2;
	}

	fieldset[disabled] {
		pointer-events: none;
		opacity: 0.2;
	}
</style>

<script>
	import { camera } from '$lib/controls/Camera.svelte'
	import { sound } from '$lib/controls/Sound.svelte'

	import Spokes from './Spokes.svelte'
	import Spread from './Spread.svelte'
	import Offset from './Offset.svelte'
	import Width from './Width.svelte'
	import Speed from './Speed.svelte'
	import Radii from './Radii.svelte'
	import Invert from './Invert.svelte'
	import Mirror from './Mirror.svelte'
	import Opacity from './Opacity.svelte'
	import Saturation from './Saturation.svelte'
</script>
