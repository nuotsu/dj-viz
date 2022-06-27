<svelte:window on:keydown={!disabled && keydown} />

<label class:disabled>
	<input type="checkbox" bind:checked hidden {disabled} />

	<toggle/>

	{title}
</label>

<style>
	label {
		display: inline-block;
		text-align: center;
	}

	label.disabled {
		opacity: 0.2;
	}

	toggle {
		display: block;
		aspect-ratio: 1;
		width: var(--input-size);
		border: 1px solid;
		border-radius: 100%;
		overflow: hidden;
		padding: 15%;
	}

	input:checked + toggle::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		background-color: currentColor;
	}
</style>

<script>
	export let title, shortcut, checked, disabled

	function keydown({ key }) {
		if (key === shortcut) checked = !checked
	}
</script>
