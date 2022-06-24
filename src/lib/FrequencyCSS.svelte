<figure
	style:--disc="{disc.value}deg"
>
	{#each bars as bar, i}
		<div
			style:--dir={invert ? 'bottom' : 'top'}
			style:--min="{min}%"
			style:--percentage="{(bar / 256 * (max - min)) + min}%"
			style:--angle="{i / bars.length}turn"
		/>
	{/each}
</figure>

<Turntable {...disc}
	bind:value={disc.value}
	on:mousedown={() => disc.active = true}
	on:mouseup={() => disc.active = false}
/>

<label>
	<input bind:checked={invert} type="checkbox" />
	invert
</label>

<label>
	<input bind:value={threshold} type="range" min={0} max={1} step={0.01} />
	{threshold}
</label>

<label>
	<input bind:value={min} type="range" min={0} max={99} />
	{min}
</label>

<label>
	<input bind:value={max} type="range" min={1} max={100} />
	{max}
</label>

<style>
	figure {
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
			#000 var(--min),
			#000 var(--percentage),
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
	import Turntable from './Turntable.svelte'

	export let analyzer

	let bars = [], frame
	let invert = false
	let disc = { value: 0, active: false }
	let threshold = 0.5
	let min = 50
	let max = 100

	function loop() {
		frame = requestAnimationFrame(loop)

		if (!analyzer) return

		const dataArray = new Uint8Array(analyzer.frequencyBinCount)
		analyzer.getByteFrequencyData(dataArray)

		bars = Array.from(dataArray).slice(0, dataArray.length * threshold)

		if (!disc.active) {
			if (disc.value >= 360) {
				disc.value = 0
			} else {
				disc.value++
			}
		}
	}

	onMount(() => {
		loop()
		return () => cancelAnimationFrame(frame)
	})
</script>
