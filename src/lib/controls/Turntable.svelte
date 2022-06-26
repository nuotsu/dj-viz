<input type="range" hidden
	bind:value={$discValue}
	min={0} max={360}
/>

<script context="module">
	import { writable } from 'svelte/store'

	export const discValue = writable(0)
	export const discActive = writable(false)

	let spin

	export function wheel(e) {
		e.preventDefault()

		if (spin) clearTimeout(spin)

		spin = setTimeout(() => {
			discActive.set(false)
		}, 100)

		if (!!Math.abs(e.deltaY)) {
			discActive.set(true)
		}

		discValue.update(value => value += (e.deltaY / 4))
	}
</script>
