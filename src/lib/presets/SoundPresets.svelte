<Preset {presets} defaults={SOUND_DEFAULTS} key="p" />

<script>
	import Preset from './Preset.svelte'
	import { SOUND_DEFAULTS } from '$$/mixers/mixers'

	/** @type {import('$/app').Preset} */
	let presets = {
		lite: {
			speed: 0.5,
			spokes: 768,
			spread: 4,
		},
		'sound bars': {
			speed: 0.4,
			spokes: 334,
			width: 2.4,
			min: 73.8,
		},
		clock: {
			speed: 0.1,
			spokes: 240,
			spread: 20,
			width: 3,
			min: 0,
			max: 24,
			flip: true,
		},
		moire: {
			spokes: 124,
			spread: 1,
			offset: 100,
			width: 0.5,
			min: 0,
		},
		'Q-ting Star': {
			spokes: 60,
			offset: 1,
			width: 1.6,
			min: 33
		},
	}
</script>
