<input type="range" hidden
	bind:value={$disc.value}
	min={0} max={360}
/>

<script context="module">
	import { writable } from 'svelte/store'

	const isSpinning = writable(false)

	export const disc = writable({
		value: 0,
		active: false,
	})

	export function wheel(e, disc) {
		e.preventDefault()

		if (!!Math.abs(e.deltaY)) {
			disc.active = true
		}

		disc.value += (e.deltaY / 4)

		clearTimeout(isSpinning)

		isSpinning = setTimeout(() => {
			disc.active = false
		}, 100)
	}
</script>
