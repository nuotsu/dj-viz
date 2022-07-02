<nav>
	<InputSet name="💿" gap="1ch" disabled={!$record}>
		<LabelPresets slot="legend" />
		<div>
			<LabelFont />
			<Label/>
		</div>
		<LabelSize/>
	</InputSet>

	<InputSet name="🎨" gap="0 0.5ch" vertical disabled={!$record && !$sound}>
		<LabelBG/>
		<LabelFG/>
		<FrequencyColor/>
		<TimeDomainColor/>
	</InputSet>

	<InputSet name="🎧" disabled={!$record && !$sound}>
		<SoundPresets slot="legend" />
		<Spokes/>
		<Spread/>
		<Offset/>
		<Width/>
		<Speed/>
		<Radii/>
		<Flip/>
	</InputSet>

	<InputSet name="📹" disabled={!$camera}>
		<CameraPresets slot="legend" />
		<Opacity/>
		<Saturation/>
		<HueRotate/>
		<Contrast/>
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
	import { record } from '$$/controls/Record.svelte'
	import { sound } from '$$/controls/Sound.svelte'
	import { camera } from '$$/controls/Camera.svelte'
	import InputSet from '$$/inputs/InputSet.svelte'

	import LabelPresets from '$$/presets/LabelPresets.svelte'
	import Label from './record/Label.svelte'
	import LabelBG from './color/LabelBG.svelte'
	import LabelFG from './color/LabelFG.svelte'
	import LabelFont from './record/LabelFont.svelte'
	import LabelSize from './record/LabelSize.svelte'

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
	import HueRotate from './camera/HueRotate.svelte'
	import Contrast from './camera/Contrast.svelte'
	import Invert from './camera/Invert.svelte'
	import Mirror from './camera/Mirror.svelte'
</script>
