/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export interface Mixer {
	// label
	recordLabel: string
	labelFont: string
	labelSize: string

	// color
	labelBG: string
	labelFG: string
	frequencyColor: string
	timeDomainColor: string

	// sound
	speed?: number
	spokes?: number
	spread?: number
	offset?: number
	width?: number
	min?: number
	max?: number
	flip?: boolean

	// camera
	opacity?: number
	saturation?: number
	hueRotate?: number
	contrast?: boolean
	invert?: boolean
	mirror?: boolean
}

export interface Preset {
	[key: string]: Mixer
}
