<Knob title="⏱" shortcut="t"
	bind:value={$speed}
	on:keydown={keydown}
	min={0} max={10} step={0.05}
	factor={0.02}
/>

<script>
	const nums = Array.from(Array(10).keys()).map(String)

	function keydown({ key }) {
		if (nums.includes(key)) $speed = Number(key)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'
	import Knob from '../inputs/Knob.svelte'

	export const speed = writable(1)
</script>
