<label>
	<input type="range"
		min={0}
		max={360}
		bind:value
		on:mousedown
		on:mouseup
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
