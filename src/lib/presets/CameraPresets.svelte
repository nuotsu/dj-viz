<Preset {presets} defaults={CAMERA_DEFAULTS} key="P" />

<script>
	import Preset from './Preset.svelte'
	import { CAMERA_DEFAULTS } from '$lib/mixers/mixers'

	/** @type {import('$/app').Preset} */
	let presets = {
		webcam: { opacity: 1, saturation: 1, },
	}
</script>
