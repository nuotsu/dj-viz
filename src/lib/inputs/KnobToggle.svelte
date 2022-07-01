<svelte:window on:keydown={onKeydown} />

<label>
	<input type="checkbox" hidden bind:checked />

	<toggle>
		{#if !$nerdMode}
			<output>{shortcut}</output>
		{/if}
	</toggle>

	{label}
</label>

<style>
	label {
		display: inline-block;
		text-align: center;
	}

	toggle {
		position: relative;
		display: grid;
		place-content: center;
		aspect-ratio: 1;
		width: var(--input-size);
		border: 1px solid;
		border-radius: 100%;
		overflow: hidden;
		padding: 15%;
	}

	input:checked + toggle::before {
		content: '';
		position: absolute;
		inset: 0.5em;
		border-radius: 100%;
		background-color: currentColor;
	}

	output {
		mix-blend-mode: difference;
	}
</style>

<script>
	import { nerdMode } from '$$/controls/NerdMode.svelte'

	export let label, shortcut, checked

	function onKeydown({ key }) {
		if (key === shortcut) checked = !checked
	}
</script>
