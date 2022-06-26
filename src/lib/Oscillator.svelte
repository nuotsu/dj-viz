<figure style:--num={$oscillations.length}>
	{#each $oscillations as osc}
		<osc style:--percentage="{osc / 256 * 100}%"/>
	{/each}
</figure>

<style>
	figure {
		pointer-events: none;
		position: absolute;
		inset: 0;
		z-index: 0;
		display: grid;
		grid-template-columns: repeat(var(--num), 1fr);
	}

	osc {
		display: block;
		height: 100%;
		background-image: linear-gradient(to bottom,
			transparent calc(var(--percentage) - 2px),
			currentColor var(--percentage),
			transparent calc(var(--percentage) + 2px)
		);
	}
</style>

<script context="module">
	import { writable } from 'svelte/store'

	export const oscillations = writable([])
</script>
