<Preset {presets} key="p" />

<script>
	import Preset from './Preset.svelte'

	/** @type {import('$/app').Preset} */
	let presets = {
		lite: { spokes: 768, spread: 4, speed: 0.5, },
		clock: { spokes: 240, spread: 20, width: 3, speed: 0.1, min: 0, max: 24, flip: true, },
		moire: { spokes: 124, spread: 1, offset: 100, width: 0.5, min: 0, }
	}
</script>
