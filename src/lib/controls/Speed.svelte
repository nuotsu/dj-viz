<svelte:window on:keydown={shortcut} />

<Knob title="⏱"
	bind:ref={input}
	bind:value={$speed}
	on:keydown={focused}
	min={0} max={10} step={0.05}
/>

<script>
	let input

	const nums = Array.from(Array(10).keys()).map(String)

	function shortcut({ key }) {
		if (key == 't') input.focus()
	}

	function focused({ key }) {
		if (nums.includes(key)) $speed = Number(key)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'
	import Knob from './Knob.svelte'

	export const speed = writable(1)
</script>
