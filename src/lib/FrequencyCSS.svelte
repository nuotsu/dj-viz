<Turntable>
	<figure style:--disc="{$disc.value}deg">
		{#each bars as bar, i}
			<div
				style:--dir={$invert ? 'bottom' : 'top'}
				style:--min="{$min}%"
				style:--percentage="{(bar / 256 * ($max - $min)) + $min}%"
				style:--angle="{i / bars.length}turn"
			/>
		{/each}
	</figure>
</Turntable>

<Spokes/>
<Speed/>
<Radii/>
<Invert/>

<style>
	figure {
		pointer-events: none;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		place-content: start center;
		aspect-ratio: 1;
		width: 300px;
		transform: rotate(var(--disc));
	}

	div {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
		position: relative;
		width: 1px;
		background: linear-gradient(to var(--dir),
			transparent,
			transparent var(--min),
			currentColor var(--min),
			currentColor var(--percentage),
			transparent var(--percentage)
		);
		transform-origin: bottom;
		transform: rotate(var(--angle));
	}

	label {
		display: flex;
		align-items: center;
	}
</style>

<script>
	import { onMount } from 'svelte'
	import Turntable, { disc } from './Turntable.svelte'
	import Spokes, { spokes, offset } from './controls/Spokes.svelte'
	import Speed, { speed } from './controls/Speed.svelte'
	import Radii, { min, max } from './controls/Radii.svelte'
	import Invert, { invert } from './controls/Invert.svelte'

	export let analyzer

	let bars = [], frame

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!analyzer) return

		const dataArray = new Uint8Array(analyzer.frequencyBinCount)
		analyzer.getByteFrequencyData(dataArray)

		bars = Array.from(dataArray).slice($offset, $spokes + $offset)

		if (!$disc.active) {
			if ($disc.value >= 360) {
				$disc.value = 0
			} else {
				$disc.value += $speed
			}
		}
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
