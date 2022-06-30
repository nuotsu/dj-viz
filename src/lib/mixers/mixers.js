import { spokes, DEFAULT_SPOKES } from './sound/Spokes.svelte'
import { spread, DEFAULT_SPREAD } from './sound/Spread.svelte'
import { offset, DEFAULT_OFFSET } from './sound/Offset.svelte'
import { width, DEFAULT_WIDTH } from './sound/Width.svelte'
import { speed, DEFAULT_SPEED } from './sound/Speed.svelte'
import { min, max, DEFAULT_MIN, DEFAULT_MAX } from './sound/Radii.svelte'
import { flip, DEFAULT_FLIP } from './sound/Flip.svelte'
import { opacity, DEFAULT_OPACITY } from './camera/Opacity.svelte'
import { saturation, DEFAULT_SATURATION } from './camera/Saturation.svelte'
import { invert, DEFAULT_INVERT } from './camera/Invert.svelte'
import { mirror, DEFAULT_MIRROR } from './camera/Mirror.svelte'

const SOUND_DEFAULTS = {
	spokes: DEFAULT_SPOKES,
	spread: DEFAULT_SPREAD,
	offset: DEFAULT_OFFSET,
	width: DEFAULT_WIDTH,
	speed: DEFAULT_SPEED,
	min: DEFAULT_MIN,
	max: DEFAULT_MAX,
	flip: DEFAULT_FLIP,
}

const CAMERA_DEFAULTS = {
	opacity: DEFAULT_OPACITY,
	saturation: DEFAULT_SATURATION,
	invert: DEFAULT_INVERT,
	mirror: DEFAULT_MIRROR,
}

export {
	SOUND_DEFAULTS,
	CAMERA_DEFAULTS,
}

export default {
	spokes,
	spread,
	offset,
	width,
	speed,
	min,
	max,
	flip,
	opacity,
	saturation,
	invert,
	mirror,
}
