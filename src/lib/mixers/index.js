import { spokes, DEFAULT_SPOKES } from './Spokes.svelte'
import { spread, DEFAULT_SPREAD } from './Spread.svelte'
import { offset, DEFAULT_OFFSET } from './Offset.svelte'
import { width, DEFAULT_WIDTH } from './Width.svelte'
import { speed, DEFAULT_SPEED } from './Speed.svelte'
import { min, max, DEFAULT_MIN, DEFAULT_MAX } from './Radii.svelte'
import { invert, DEFAULT_INVERT } from './Invert.svelte'
import { mirror, DEFAULT_MIRROR } from './Mirror.svelte'
import { opacity, DEFAULT_OPACITY } from './Opacity.svelte'
import { saturation, DEFAULT_SATURATION } from './Saturation.svelte'

const DEFAULTS = {
	spokes: DEFAULT_SPOKES,
	spread: DEFAULT_SPREAD,
	offset: DEFAULT_OFFSET,
	width: DEFAULT_WIDTH,
	speed: DEFAULT_SPEED,
	min: DEFAULT_MIN,
	max: DEFAULT_MAX,
	invert: DEFAULT_INVERT,
	mirror: DEFAULT_MIRROR,
	opacity: DEFAULT_OPACITY,
	saturation: DEFAULT_SATURATION,
}

export { DEFAULTS }

export default {
	spokes,
	spread,
	offset,
	width,
	speed,
	min,
	max,
	invert,
	mirror,
	opacity,
	saturation,
}
