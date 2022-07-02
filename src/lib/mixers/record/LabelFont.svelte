<Select bind:value={$labelFont}>
	{#each Object.entries(fonts) as [name, value]}
		<option {value}>{name}</option>
	{/each}
</Select>

<script context="module">
	import Select from '$lib/inputs/Select.svelte'
	import { writable } from 'svelte/store'

	const fonts = {
		'san-serif': "'Jost', sans-serif",
		serif: "'IM Fell French Canon', serif",
		handwritten: "'Rock Salt', monospace",
		'compact': "'Six Caps', sans-serif",
	}

	export const labelFont = writable(fonts['handwritten'])
</script>
