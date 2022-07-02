<Preset {presets} defaults={CAMERA_DEFAULTS} key="π" />

<script>
	import Preset from './Preset.svelte'
	import { CAMERA_DEFAULTS } from '$$/mixers/mixers'

	/** @type {import('$/app').Preset} */
	let presets = {
		webcam: {
			opacity: 1,
			saturation: 1,
			hueRotate: 0,
			mirror: true,
		},
		psychedelic: {
			opacity: 1,
			saturation: 5,
			hueRotate: 0.1,
			contrast: 100,
		},
	}
</script>
