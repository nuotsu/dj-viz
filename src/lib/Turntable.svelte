<label
	on:mousedown={() => $disc.active = true}
	on:mouseup={() => $disc.active = false}
	on:wheel={wheel}
>
	<slot></slot>

	<input type="range" hidden
		bind:value={$disc.value}
		min={0} max={360}
	/>
</label>

<style>
	label {
		display: inline-block;
	}

	input {
		accent-color: #000;
	}
</style>

<script>
	let isSpinning = false

	function wheel(e) {
		e.preventDefault()

		if (!!Math.abs(e.deltaY)) {
			$disc.active = true
		}

		$disc.value += (e.deltaY / 4)

		clearTimeout(isSpinning)

		isSpinning = setTimeout(() => {
			$disc.active = false
		}, 100)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const disc = writable({
		value: 0,
		active: false,
	})
</script>
