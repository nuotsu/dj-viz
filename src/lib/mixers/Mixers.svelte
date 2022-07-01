<nav>
	<InputSet name="💿" disabled={!$sound}>
		<Label/>
	</InputSet>

	<InputSet name="🎨" vertical disabled={!$sound}>
		<FrequencyColor/>
		<TimeDomainColor/>
	</InputSet>

	<InputSet name="🎧" disabled={!$sound}>
		<SoundPresets slot="preset" />
		<Spokes/>
		<Spread/>
		<Offset/>
		<Width/>
		<Speed/>
		<Radii/>
		<Flip/>
	</InputSet>

	<InputSet name="📹" disabled={!$camera}>
		<CameraPresets slot="preset" />
		<Opacity/>
		<Saturation/>
		<Invert/>
		<Mirror/>
	</InputSet>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1ch;
	}
</style>

<script>
	import { camera } from '$$/controls/Camera.svelte'
	import { sound } from '$$/controls/Sound.svelte'
	import InputSet from '$$/inputs/InputSet.svelte'

	import Label from './record/Label.svelte'
	import FrequencyColor from './color/FrequencyColor.svelte'
	import TimeDomainColor from './color/TimeDomainColor.svelte'

	import SoundPresets from '$$/presets/SoundPresets.svelte'
	import Spokes from './sound/Spokes.svelte'
	import Spread from './sound/Spread.svelte'
	import Offset from './sound/Offset.svelte'
	import Width from './sound/Width.svelte'
	import Speed from './sound/Speed.svelte'
	import Radii from './sound/Radii.svelte'
	import Flip from './sound/Flip.svelte'

	import CameraPresets from '$$/presets/CameraPresets.svelte'
	import Opacity from './camera/Opacity.svelte'
	import Saturation from './camera/Saturation.svelte'
	import Invert from './camera/Invert.svelte'
	import Mirror from './camera/Mirror.svelte'
</script>
