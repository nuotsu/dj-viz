import { recordLabel, DEFAULT_LABEL } from './record/Label.svelte'
import { labelFont, DEFAULT_LABEL_FONT } from './record/LabelFont.svelte'
import { labelSize, DEFAULT_LABEL_SIZE } from './record/LabelSize.svelte'
import { labelBG, DEFAULT_LABEL_BG } from './color/LabelBG.svelte'
import { labelFG, DEFAULT_LABEL_FG } from './color/LabelFG.svelte'
import { frequencyColor, DEFAULT_FREQUENCY_COLOR } from './color/FrequencyColor.svelte'
import { timeDomainColor, DEFAULT_TIME_DOMAIN_COLOR } from './color/TimeDomainColor.svelte'
import { spokes, DEFAULT_SPOKES } from './sound/Spokes.svelte'
import { spread, DEFAULT_SPREAD } from './sound/Spread.svelte'
import { offset, DEFAULT_OFFSET } from './sound/Offset.svelte'
import { width, DEFAULT_WIDTH } from './sound/Width.svelte'
import { speed, DEFAULT_SPEED } from './sound/Speed.svelte'
import { min, max, DEFAULT_MIN, DEFAULT_MAX } from './sound/Radii.svelte'
import { flip, DEFAULT_FLIP } from './sound/Flip.svelte'
import { opacity, DEFAULT_OPACITY } from './camera/Opacity.svelte'
import { saturation, DEFAULT_SATURATION } from './camera/Saturation.svelte'
import { hueRotate, DEFAULT_HUE_ROTATE } from './camera/HueRotate.svelte'
import { invert, DEFAULT_INVERT } from './camera/Invert.svelte'
import { mirror, DEFAULT_MIRROR } from './camera/Mirror.svelte'

const LABEL_PRESETS = {
	recordLabel: DEFAULT_LABEL,
	labelFont: DEFAULT_LABEL_FONT,
	labelSize: DEFAULT_LABEL_SIZE,
}

const COLOR_PRESETS = {
	labelBG: DEFAULT_LABEL_BG,
	labelFG: DEFAULT_LABEL_FG,
	frequencyColor: DEFAULT_FREQUENCY_COLOR,
	timeDomainColor: DEFAULT_TIME_DOMAIN_COLOR,
}

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
	hueRotate: DEFAULT_HUE_ROTATE,
	invert: DEFAULT_INVERT,
	mirror: DEFAULT_MIRROR,
}

export {
	LABEL_PRESETS,
	COLOR_PRESETS,
	SOUND_DEFAULTS,
	CAMERA_DEFAULTS,
}

export default {
	recordLabel,
	labelFont,
	labelSize,
	labelBG,
	labelFG,
	frequencyColor,
	timeDomainColor,
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
	hueRotate,
	invert,
	mirror,
}
