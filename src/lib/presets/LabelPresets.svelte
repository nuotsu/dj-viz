<Preset {presets} {defaults} key="π" />

<script>
	import Preset from './Preset.svelte'
	import { LABEL_PRESETS, COLOR_PRESETS } from '$$/mixers/mixers'
	import { fonts } from '$lib/mixers/record/LabelFont.svelte'

	let defaults = {
		...LABEL_PRESETS,
		...COLOR_PRESETS,
	}

	/** @type {import('$/app').Preset} */
	let presets = {
		'Stranger Things': {
			recordLabel: 'STRANGER\n   THINGS',
			labelFont: fonts['serif'],
			labelSize: 1.7,
			labelColor: '#760d15',
			frequencyColor: '#760d15',
			timeDomainColor: '#760d15',
		},
		Supreme: {
			recordLabel: '\n\nSupreme',
			labelFont: fonts['sans-serif'],
			labelSize: 1.7,
			labelColor: '#ed1c24',
		},
	}
</script>
