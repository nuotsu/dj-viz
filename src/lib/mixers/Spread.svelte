<Knob title="spread" shortcut="="
	bind:value={$spread}
	min={1} max={20}
	factor={0.08}
	toFixed={0}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_SPREAD = 2
	export const spread = writable(DEFAULT_SPREAD)
</script>
