<label on:wheel={e => wheel(e, factor)}>
	<input type="range" hidden
		bind:this={ref}
		bind:value={value}
		{min} {max}
	/>

	<knob style:--progress={(value - min) / (max - min)}>
		<indicator />
		<output class="center">{value}</output>
	</knob>

	<span>{title}</span>
</label>

<style>
	label {
		display: inline-block;
		text-align: center;
	}

	knob {
		position: relative;
		display: block;
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

<script>
	export let title, value, factor = 1, ref, min, max

	function wheel(e, factor) {
		e.preventDefault()

		let delta = e.deltaY * factor
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
