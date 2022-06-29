<Knob title="spread" shortcut="s"
	bind:value={$spread}
	min={1} max={20}
	factor={0.08}
	toFixed={0}
	disabled={!$sound}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { sound } from '$lib/controls/Sound.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_SPREAD = 2
	export const spread = writable(DEFAULT_SPREAD)
</script>
