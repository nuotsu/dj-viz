<Knob title="opacity" shortcut="o"
	bind:value={$opacity}
	min={0.1} max={1} step={0.1}
	disabled={!$sound || !$camera}
/>

<script context="module">
	import Knob from '$lib/inputs/Knob.svelte'
	import { sound } from '$lib/controls/Sound.svelte'
	import { camera } from '$lib/controls/Camera.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_OPACITY = 0.4
	export const opacity = writable(DEFAULT_OPACITY)
</script>
