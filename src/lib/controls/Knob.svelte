<script>
	export let title, value, ref, min, max, step, factor, toFixed = 1

	function wheel(e) {
		e.preventDefault()

		let delta = e.deltaY * (factor || (max - min) * 0.005)
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

<label on:wheel={wheel} on:keydown>
	<input type="range"
		bind:this={ref}
		bind:value={value}
		{min} {max} {step}
	/>

	<knob style:--progress={(value - min) / (max - min)}>
		<indicator />

		<output class="center">{value?.toFixed(toFixed)}</output>
	</knob>

	<span>{title}</span>
</label>

<style>
	label {
		display: inline-block;
		text-align: center;
	}

	input {
		position: absolute;
		clip: rect(0,0,0,0);
	}

	label:focus-within knob {
		outline: 1px dashed;
		outline-offset: 1px;
	}

	knob {
		position: relative;
		display: block;
		aspect-ratio: 1;
		border: 1px solid;
		border-radius: 100%;
		overflow: hidden;
	}

	indicator {
		--size: 4em;
		display: block;
		aspect-ratio: 1;
		width: var(--size);
	}

	indicator::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		translate: -50% 0;
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
</style>
