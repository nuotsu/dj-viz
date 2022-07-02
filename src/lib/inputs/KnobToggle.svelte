<HotKey {key} toggle={value} />

<label>
	<input type="checkbox" hidden bind:checked={$value} />

	<toggle>
		{#if !$nerdMode}
			<output>{key}</output>
		{/if}
	</toggle>

	{label}
</label>

<style>
	label {
		user-select: none;
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
		inset: 0.75em;
		border-radius: 100%;
		background-color: currentColor;

		@apply glow-sm;
	}

	output {
		mix-blend-mode: difference;
	}
</style>

<script>
	import HotKey from './HotKey.svelte'
	import { nerdMode } from '$$/controls/NerdMode.svelte'

	export let label, key, value
</script>
