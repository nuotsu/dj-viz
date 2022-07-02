<Preset {presets} key="P" />

<script>
	import Preset from './Preset.svelte'

	/** @type {import('$/app').Preset} */
	let presets = {
		webcam: { opacity: 1, saturation: 1, hueRotate: 0 },
	}
</script>
