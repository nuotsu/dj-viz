<Knob title="opacity" shortcut="o"
	bind:value={$opacity}
	min={0.1} max={1} step={0.1}
	disabled={!$sound || !$camera}
/>

<script context="module">
	import Knob from '$lib/inputs/Knob.svelte'
	import { writable } from 'svelte/store'
	import { sound } from '$lib/Sound.svelte'
	import { camera } from '$lib/Camera.svelte'

	export const opacity = writable(0.4)
</script>
