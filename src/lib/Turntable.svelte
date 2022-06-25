<label
	on:mousedown={() => $disc.active = true}
	on:mouseup={() => $disc.active = false}
	on:wheel={wheel}
>
	<slot></slot>

	<input type="range" min={0} max={360} bind:value={$disc.value} />
</label>

<style>
	label {
		display: inline-block;
		border: 3px dashed red;
	}

	input {
		accent-color: #000;
	}
</style>

<script>
	function wheel(e) {
		e.preventDefault()

		console.log(e.deltaY)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const disc = writable({
		value: 0,
		active: false,
	})
</script>
