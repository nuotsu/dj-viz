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
		'💩': {
			recordLabel: '💩',
			labelBG: '#6a431f',
			labelSize: 5.0,
			frequencyColor: '#6a431f',
			timeDomainColor: '#6a431f',
		},
		'Q-ting Star': {
			recordLabel: 'Q-ting\n         Star⭐️',
			labelSize: 1.2,
			labelBG: '#d84be0',
			labelFG: '#e7e67e',
			frequencyColor: '#e7e67e',
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
		'Starbucks': {
			recordLabel: 'STARBUCKS\n\n   COFFEE',
			labelFont: fonts['sans-serif'],
			labelBG: '#017352',
			labelFG: '#ffffff',
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
			recordLabel: `Supreme\tSupreme\tSupreme\neme\tSupreme\tSupreme\tSu\n\tSupreme\tSupreme\tSupre`,
			labelFont: fonts['sans-serif'],
			labelSize: 0.9,
			labelBG: '#ed1c24',
			labelFG: '#ffffff',
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
