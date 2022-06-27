<script>
	export let title, shortcut, value, min, max, step, factor, toFixed = 1, disabled

	let input

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

	function keydown({ key }) {
		if (key === shortcut) input.focus()
	}
</script>

<svelte:window on:keydown={keydown} />

<label on:wheel={!disabled && wheel} on:keydown class:disabled>
	<input type="range"
		bind:this={input}
		bind:value={value}
		on:change
		{min} {max} {step} {disabled}
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

	label.disabled {
		opacity: 0.2;
	}

	input {
		position: absolute;
		clip: rect(0,0,0,0);
	}

	label:focus-within knob {
		outline: 1px dashed;
		outline-offset: 2px;
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
		display: block;
		aspect-ratio: 1;
		width: var(--input-size);
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
