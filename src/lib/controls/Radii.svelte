<svelte:window on:keydown={shortcut} />

<Knob title={$invert ? 'outer' : 'inner'}
	bind:ref={rmin}
	bind:value={$min}
	min={0} max={99}
/>

<Knob title={$invert ? 'inner' : 'outer'}
	bind:ref={rmax}
	bind:value={$max}
	min={1} max={100}
/>

<script>
	import { invert } from './Invert.svelte'
	import Knob from './Knob.svelte'

	let rmin, rmax

	function shortcut({ key }) {
		if (key == '[') rmin.focus()
		if (key == ']') rmax.focus()
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const min = writable(50)
	export const max = writable(100)
</script>
