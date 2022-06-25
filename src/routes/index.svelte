<nav>
	<Sound/>
	<Camera/>
	<Fullscreen/>
</nav>

<main>
	<section>
		{#if $sound}
			{#await getMedia({ audio: true })}
				Asking...
			{:then stream}
				<SoundDJ {stream} />
			{:catch}
				🙅‍♂️
			{/await}
		{/if}
		{#if $camera}
			{#await getMedia({ video: true })}
				Asking...
			{:then stream}
				<CameraDJ {stream} />
			{:catch}
				🙅‍♂️
			{/await}
		{/if}
	</section>

	<section>
		<Spokes/>
		<Speed/>
		<Radii/>
		<Invert/>
	</section>
</main>

<script>
	import Sound, { sound } from '$lib/Sound.svelte'
	import Camera, { camera } from '$lib/Camera.svelte'
	import Fullscreen from '$/lib/Fullscreen.svelte'
	import SoundDJ from '$/lib/SoundDJ.svelte'
	import CameraDJ from '$lib/CameraDJ.svelte'
	import Spokes from '$/lib/controls/Spokes.svelte'
	import Speed from '$/lib/controls/Speed.svelte'
	import Radii from '$/lib/controls/Radii.svelte'
	import Invert from '$/lib/controls/Invert.svelte'

	async function getMedia(constraints) {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia(constraints)
		}
	}
</script>
