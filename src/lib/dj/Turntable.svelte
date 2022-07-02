<label
	style:--disc="{$discValue}deg"
	on:mousedown={() => $discActive = true}
	on:mouseup={() => $discActive = false}
	on:wheel={onWheel}
>
	{#if $record}
		<RecordDJ />
	{/if}

	<input type="range" hidden
		bind:value={$discValue}
		min={0} max={360}
	/>

	<slot></slot>
</label>

<style>
	label {
		cursor: grab;
		position: relative;
		z-index: 1;
		display: grid;
		width: var(--disc-size);
		aspect-ratio: 1;
		border-radius: 100%;
		overflow: hidden;
		transform: rotate(var(--disc));
		will-change: transform;
	}

	label:active {
		cursor: grabbing;
	}

	@screen md {
		label {
			background-color: #000d;
			box-shadow: 0 0 8em 8em #000d;
		}
	}

	label > :global(*) {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
</style>

<script context="module">
	import { record } from '$lib/controls/Record.svelte'
	import RecordDJ from './RecordDJ.svelte'
	import { writable } from 'svelte/store'

	export const discValue = writable(0)
	export const discActive = writable(false)

	let spin

	function onWheel(e) {
		e.preventDefault()

		if (spin) clearTimeout(spin)

		spin = setTimeout(() => {
			discActive.set(false)
		}, 100)

		if (!!Math.abs(e.deltaY)) {
			discActive.set(true)
		}

		discValue.update(value => value -= (e.deltaY / 4))
	}
</script>
