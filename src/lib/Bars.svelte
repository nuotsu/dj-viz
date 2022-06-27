<figure
	style:--width="{$width}px"
	style:--dir={$invert ? 'bottom' : 'top'}
	style:--min="{$min}%"
	>
	{#each $bars as bar, i}
		{#if i % Math.round($spread) === 0}
			<bar
				style:--percentage="{(bar / 256 * ($max - $min)) + $min}%"
				style:--angle="{i / $bars.length}turn"
			/>
		{/if}
	{/each}
</figure>

<style>
	figure {
		pointer-events: none;
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		place-content: start center;
		aspect-ratio: 1;
	}

	bar {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
		position: relative;
		width: var(--width);
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
</style>

<script context="module">
	import { spokes } from './controls/Spokes.svelte'
	import { spread } from './controls/Spread.svelte'
	import { width } from './controls/Width.svelte'
	import { min, max } from './controls/Radii.svelte'
	import { invert } from './controls/Invert.svelte'
	import { writable } from 'svelte/store'

	export const bars = writable([])
</script>
