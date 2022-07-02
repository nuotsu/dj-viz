<Preset {presets} key="π" />

<script>
	import Preset from './Preset.svelte'
	import { fonts } from '$lib/mixers/record/LabelFont.svelte'

	/** @type {import('$/app').Preset} */
	let presets = {
		'💩': {
			recordLabel: '💩',
			labelBG: '#6a431f',
			labelSize: 5.0,
			frequencyColor: '#6a431f',
			timeDomainColor: '#6a431f',
			speed: 10,
		},
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
		'zoom': {
			recordLabel: '\n\nzoom',
			labelFont: fonts['sans-serif'],
			labelSize: 1.7,
			labelBG: '#2c88f7',
			labelFG: '#ffffff',
			timeDomainColor: '#2c88f7',
		},
	}
</script>
