<Knob label="speed" key="t"
	bind:value={$speed}
	on:keydown={onKeydown}
	min={0} max={10} step={0.05}
	factor={0.02}
/>

<script context="module">
	import Knob from '../../inputs/Knob.svelte'
	import { writable } from 'svelte/store'

	const nums = Array.from(Array(10).keys()).map(String)

	function onKeydown({ key }) {
		if (nums.includes(key)) speed.set(Number(key))
	}

	export const DEFAULT_SPEED = 1
	export const speed = writable(DEFAULT_SPEED)
</script>
