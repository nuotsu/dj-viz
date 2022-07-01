<Knob title={$flip ? 'outer' : 'inner'}
	bind:value={$min}
	min={0} max={100}
	key="["
/>

<Knob title={$flip ? 'inner' : 'outer'}
	bind:value={$max}
	min={1} max={100}
	key="]"
	invalid={$max <= $min}
/>

<script>
	$: if ($max <= $min) {
		$max = $min
	}
</script>

<script context="module">
	import Knob from '../../inputs/Knob.svelte'
	import { flip } from './Flip.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_MIN = 50
	export const DEFAULT_MAX = 100

	export const min = writable(DEFAULT_MIN)
	export const max = writable(DEFAULT_MAX)
</script>
