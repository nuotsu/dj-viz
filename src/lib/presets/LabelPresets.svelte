<Preset {presets} {defaults} key="P" />

<script>
	import Preset from './Preset.svelte'
	import { LABEL_DEFAULTS, COLOR_DEFAULTS } from '$lib/mixers/mixers'
	import { fonts } from '$lib/mixers/record/LabelFont.svelte'

	const defaults = {
		...LABEL_DEFAULTS,
		...COLOR_DEFAULTS,
	}

	/** @type {import('$/app').Preset} */
	let presets = {
		'DJ ViZ': {
			recordLabel: 'DJ\nViZ',
			labelSize: 2,
			labelBG: '#170d2d',
			labelFG: '#ede4bd',
			frequencyColor: '#ede4bd',
			timeDomainColor: '#ede4bd',
		},
		'Q-ting Star': {
			recordLabel: 'Q-ting\n         Star⭐️',
			labelSize: 1.2,
			labelBG: '#d84be0',
			labelFG: '#e7e67e',
			frequencyColor: '#e7e67e',
		},
		'💩': {
			recordLabel: '💩',
			labelBG: '#6a431f',
			labelSize: 5.0,
			frequencyColor: '#6a431f',
			timeDomainColor: '#6a431f',
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
		'SV.LTE Supra': {
			recordLabel: 'SV.LTE\nSUPRA',
			labelFont: fonts['compact'],
			labelSize: 3.4,
			labelBG: '#000000',
			labelFG: '#e9bd4b',
			frequencyColor: '#e9bd4b',
			timeDomainColor: '#e9bd4b',
		},
		'not Starbucks': {
			recordLabel: 'ZEROFUCKS\n\n   COFFEE',
			labelFont: fonts['sans-serif'],
			labelBG: '#017352',
			labelFG: '#ffffff',
		},
		'not Stranger Things': {
			recordLabel: 'STRONGER\n   THONGS',
			labelFont: fonts['serif'],
			labelSize: 1.4,
			labelBG: '#000000',
			labelFG: '#aa1816',
			frequencyColor: '#aa1816',
			timeDomainColor: '#aa1816',
		},
		'not Stüssy': {
			recordLabel: 'sTässi',
			labelFont: fonts['handwritten'],
			labelSize: 1.9,
			labelBG: '#ffffff',
			labelFG: '#000000',
		},
		'not Supreme': {
			recordLabel: `Shucreme\tShucreme\tShucreme\neme\tShucreme\tShucreme\tShu\n\tShucreme\tShucreme\tShucre`,
			labelFont: fonts['sans-serif'],
			labelSize: 0.9,
			labelBG: '#ed1c24',
			labelFG: '#ffffff',
		},
		'not zoom': {
			recordLabel: '\n\nzoon',
			labelFont: fonts['sans-serif'],
			labelSize: 1.7,
			labelBG: '#2c88f7',
			labelFG: '#ffffff',
			timeDomainColor: '#2c88f7',
		},
	}
</script>
