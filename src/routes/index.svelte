<nav>
	<Sound/>
	<Camera/>
	<Fullscreen/>
</nav>

<section id="visualizers"
	style:--disc="{$disc.value}deg"
	on:mousedown={() => $disc.active = true}
	on:mouseup={() => $disc.active = false}
	on:wheel={e => wheel(e, $disc)}
>
	{#if $camera}
		{#await getMedia({ video: true })}
			Asking...
		{:then stream}
			<CameraDJ {stream} />
		{:catch}
			🙅‍♂️
		{/await}
	{/if}

	{#if $sound}
		{#await getMedia({ audio: true })}
			Asking...
		{:then stream}
			<SoundDJ {stream} />
		{:catch}
			🙅‍♂️
		{/await}
	{/if}
</section>

<Controls/>

<style>
	#visualizers {
		display: grid;
		width: 300px;
		aspect-ratio: 1;
		border-radius: 100%;
		overflow: hidden;
		transform: rotate(var(--disc));
		will-change: transform;
	}

	#visualizers > :global(*) {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
</style>

<script>
	import Camera, { camera } from '$lib/Camera.svelte'
	import Sound, { sound } from '$lib/Sound.svelte'
	import Fullscreen from '$/lib/Fullscreen.svelte'

	import SoundDJ from '$/lib/SoundDJ.svelte'
	import CameraDJ from '$lib/CameraDJ.svelte'

	import { disc, wheel } from '$/lib/controls/Turntable.svelte'
import Controls from '$lib/controls/Controls.svelte';

	async function getMedia(constraints) {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia(constraints)
		}
	}
</script>
