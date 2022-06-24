<Presets bind:value={preset} />

<Turntable {...disc}
	bind:value={disc.value}
	on:mousedown={stopTurntable}
	on:mouseup={resumeTurntable}
>
	<figure style:--disc="{disc.value}deg">
		{#each bars as bar, i}
			<div
				style:--dir={invert ? 'bottom' : 'top'}
				style:--min="{min}%"
				style:--percentage="{(bar / 256 * (max - min)) + min}%"
				style:--angle="{i / bars.length}turn"
			/>
		{/each}
		</figure>
</Turntable>

<Spokes bind:value={spokes} />

<label>
	<input bind:value={offset} type="range" min={0} max={SPOKES_MAX} />
	offset({offset})
</label>

<label>
	<input bind:value={speed} type="range" min={0} max={10} step={0.1} />
	⏱({speed})
</label>

<label>
	<input bind:value={min} type="range" min={0} max={99} />
	{invert ? 'outer' : 'inner'}
</label>

<label>
	<input bind:value={max} type="range" min={1} max={100} />
	{invert ? 'inner' : 'outer'}
</label>

<Shortcut key="i" bind:checked={invert} />

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
	import Presets, { presets } from './Presets.svelte'
	import Turntable, { disc, stopTurntable, resumeTurntable } from './Turntable.svelte'
	import Spokes, { SPOKES_MAX } from './Spokes.svelte'
	import Shortcut from './Shortcut.svelte'

	export let analyzer

	let preset = 'default'
	let { spokes, offset, speed, min, max, invert } = presets[preset]

	let bars = [], frame

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!analyzer) return

		const dataArray = new Uint8Array(analyzer.frequencyBinCount)
		analyzer.getByteFrequencyData(dataArray)

		bars = Array.from(dataArray).slice(offset, spokes + offset)

		if (!disc.active) {
			if (disc.value >= 360) {
				disc.value = 0
			} else {
				disc.value += speed
			}
		}
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
