<Knob title="speed" shortcut="t"
	bind:value={$speed}
	on:keydown={keydown}
	min={0} max={10} step={0.05}
	factor={0.02}
	disabled={!$sound}
/>

<script context="module">
	import Knob from '../inputs/Knob.svelte'
	import { sound } from '$lib/Sound.svelte'
	import { writable } from 'svelte/store'

	const nums = Array.from(Array(10).keys()).map(String)

	function keydown({ key }) {
		if (nums.includes(key)) speed.set(Number(key))
	}

	export const speed = writable(1)
</script>
