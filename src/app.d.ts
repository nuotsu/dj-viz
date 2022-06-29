/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export interface Preset {
	[key: string]: {
		spokes?: number
		spread?: number
		offset?: number
		width?: number
		speed?: number
		min?: number
		max?: number
		invert?: boolean
		mirror?: boolean
		opacity?: number
		saturation?: number
	}
}
