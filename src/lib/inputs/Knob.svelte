<HotKey {key} callback={() => input.focus()} />

<label on:wheel={onWheel} on:keydown class:invalid>
	<input type="range"
		bind:this={input}
		bind:value={value}
		on:change
		{min} {max} {step}
	/>

	<knob style:--progress={(value - min) / (max - min)}>
		<indicator/>

		<output class="center">
			{#if $nerdMode}
				{value?.toFixed(toFixed)}
			{:else}
				{key}
			{/if}
		</output>
	</knob>

	{#key label}
		<span>{label}</span>
	{/key}
</label>

<style>
	label {
		display: inline-block;
		text-align: center;
	}

	.invalid {
		@apply text-error;
	}

	input {
		position: absolute;
		clip: rect(0,0,0,0);
	}

	label:focus-within knob {
		@apply focus;
	}

	knob {
		position: relative;
		display: block;
		aspect-ratio: 1;
		width: var(--input-size);
		margin: auto;
		border: 1px solid #fff4;
		border-radius: 100%;
		overflow: hidden;
		filter: drop-shadow(0 0 1ch currentColor);
	}

	indicator {
		display: block;
		aspect-ratio: 1;
		width: 100%;
	}

	indicator::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, 0);
		width: 1px;
		height: 100%;
		rotate: calc(var(--progress) * 1turn);
		background-image: linear-gradient(to bottom,
			currentColor 20%,
			transparent 20%
		);
	}

	indicator::after {
		--p: calc(var(--progress) * 100%);
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background-image: conic-gradient(currentColor var(--p), transparent var(--p));
		mask-image: radial-gradient(circle at center,
			transparent 61%,
			currentColor 62%
		);
	}

	span {
		display: inline-block;
		animation: update 0.2s ease-in-out forwards;
	}

	@keyframes update {
		from {
			transform: scaleX(-1);
		}
	}
</style>

<script>
	import HotKey from './HotKey.svelte'
	import { nerdMode } from '$$/controls/NerdMode.svelte'

	export let label, key, value, min, max, invalid
	export let step = 1, factor = null, toFixed = 1

	let input

	function onWheel(e) {
		e.preventDefault()

		let delta = e.deltaY * ((!$nerdMode ? 0 : factor) || (max - min) * 0.0025)
		let newValue = value + delta

		if (newValue > max) {
			value = max
		} else if (newValue < min) {
			value = min
		} else {
			value += delta
		}
	}
</script>
