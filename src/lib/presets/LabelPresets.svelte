<Preset {presets} {defaults} key="π" />

<script>
	import Preset from './Preset.svelte'
	import { LABEL_PRESETS, COLOR_PRESETS } from '$$/mixers/mixers'
	import { fonts } from '$lib/mixers/record/LabelFont.svelte'

	let defaults = {
		...LABEL_PRESETS,
		...COLOR_PRESETS,
	}

	let presets = {
		'Shohei Ohtani': {
			recordLabel: 'OHTANI\n    17',
			labelFont: fonts['compact'],
			labelSize: 3.6,
			labelBG: '#ffffff',
			labelFG: '#c7103f',
			frequencyColor: '#8b0027',
			timeDomainColor: '#156ec5',
		},
		'Stranger Things': {
			recordLabel: 'STRANGER\n   THINGS',
			labelFont: fonts['serif'],
			labelSize: 1.4,
			labelBG: '#000000',
			labelFG: '#aa1816',
			frequencyColor: '#aa1816',
			timeDomainColor: '#aa1816',
		},
		Stüssy: {
			recordLabel: 'sTüssy',
			labelFont: fonts['handwritten'],
			labelSize: 1.9,
			labelBG: '#ffffff',
			labelFG: '#000000',
		},
		Supreme: {
			recordLabel: '\n\nSupreme',
			labelFont: fonts['sans-serif'],
			labelSize: 1.7,
			labelBG: '#ed1c24',
			labelFG: '#ffffff',
		},
		'SV.LTE Supra': {
			recordLabel: 'SV.LTE\nSUPRA',
			labelFont: fonts['compact'],
			labelSize: 3.3,
			labelBG: '#000000',
			labelFG: '#e9bd4b',
			frequencyColor: '#e9bd4b',
			timeDomainColor: '#e9bd4b',
		},
	}
</script>
