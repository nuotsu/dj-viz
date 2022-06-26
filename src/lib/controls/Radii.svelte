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

<script>
	import { invert } from './Invert.svelte'
	import Knob from '../inputs/Knob.svelte'
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const min = writable(50)
	export const max = writable(100)
</script>
