<Select label="font" bind:value={$labelFont}>
	{#each Object.entries(fonts) as [name, value]}
		<option {value}>{name}</option>
	{/each}
</Select>

<script context="module">
	import Select from '$lib/inputs/Select.svelte'
	import { writable } from 'svelte/store'

	export const fonts = {
		'sans-serif': "'Jost', sans-serif",
		'serif': "'IM Fell French Canon', serif",
		'handwritten': "'Rock Salt', monospace",
		'compact': "'Six Caps', sans-serif",
	}

	export const DEFAULT_LABEL_FONT = fonts['handwritten']
	export const labelFont = writable(DEFAULT_LABEL_FONT)
</script>
