<label
	on:mousedown
	on:mouseup
>
	<slot></slot>

	<input type="range"
		min={0}
		max={360}
		bind:value
	/>
</label>

<style>
	input {
		accent-color: #000;
	}
</style>

<script>
	export let value
</script>

<script context="module">
	export let disc = {
		value: 0,
		active: false,
	}

	export function stopTurntable() { disc.active = true }
	export function resumeTurntable() { disc.active = false }
</script>
