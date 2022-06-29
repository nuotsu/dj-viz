<Knob title="spread" shortcut="s"
	bind:value={$spread}
	min={1} max={20}
	factor={0.08}
	toFixed={0}
	disabled={!$sound}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { sound } from '$lib/Sound.svelte'
	import { writable } from 'svelte/store'

	export const spread = writable(2)
</script>
