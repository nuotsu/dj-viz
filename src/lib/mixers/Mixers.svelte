<nav>
	<fieldset id="color" disabled={!$sound}>
		<legend>🎨</legend>
		<FrequencyColor/>
		<TimeDomainColor/>
	</fieldset>

	<fieldset disabled={!$sound}>
		<legend>🎧<SoundPresets/></legend>
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
		<Opacity/>
		<Saturation/>
		<Mirror/>
	</fieldset>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1ch;
	}

	fieldset {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1ch;
		padding: 0 1ch;
		border: 1px solid #fff2;
	}

	fieldset[disabled] {
		pointer-events: none;
		opacity: 0.2;
	}

	legend {
		display: flex;
		gap: 0.5ch;
		margin-bottom: 0.5ch;
	}
</style>

<script>
	import { camera } from '$$/controls/Camera.svelte'
	import { sound } from '$$/controls/Sound.svelte'

	import FrequencyColor from './color/FrequencyColor.svelte'
	import TimeDomainColor from './color/TimeDomainColor.svelte'

	import SoundPresets from '$$/presets/SoundPresets.svelte'
	import Spokes from './sound/Spokes.svelte'
	import Spread from './sound/Spread.svelte'
	import Offset from './sound/Offset.svelte'
	import Width from './sound/Width.svelte'
	import Speed from './sound/Speed.svelte'
	import Radii from './sound/Radii.svelte'
	import Invert from './sound/Invert.svelte'

	import Mirror from './camera/Mirror.svelte'
	import Opacity from './camera/Opacity.svelte'
	import Saturation from './camera/Saturation.svelte'
</script>
