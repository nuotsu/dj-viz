<label>
	📊({value})

	<input type="range"
		min={1}
		max={SPOKES_MAX}
		bind:value
	/>
</label>

<style>
	input {
		accent-color: forestgreen;
		width: 100%;
	}
</style>

<script>
	export let value
</script>

<script context="module">
	export const SPOKES_MAX = 1024
</script>
