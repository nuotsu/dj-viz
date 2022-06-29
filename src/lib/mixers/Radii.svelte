<Knob title={$invert ? 'outer' : 'inner'}
	bind:value={$min}
	min={0} max={99}
	shortcut="["
/>

<Knob title={$invert ? 'inner' : 'outer'}
	bind:value={$max}
	min={1} max={100}
	shortcut="]"
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { invert } from './Invert.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_MIN = 50
	export const DEFAULT_MAX = 100

	export const min = writable(DEFAULT_MIN)
	export const max = writable(DEFAULT_MAX)
</script>
