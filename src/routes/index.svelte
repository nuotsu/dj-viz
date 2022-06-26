<nav>
	<Sound/>
	<Camera/>
	<Fullscreen/>
</nav>

<Turntable>
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
</Turntable>

<aside>
	<Spokes/>
	<Width/>
	<Speed/>
	<Radii/>
	<Invert/>
	<Mirror/>
</aside>

<script>
	import Camera, { camera } from '$lib/Camera.svelte'
	import Sound, { sound } from '$lib/Sound.svelte'
	import Fullscreen from '$/lib/Fullscreen.svelte'

	import SoundDJ from '$/lib/SoundDJ.svelte'
	import CameraDJ from '$lib/CameraDJ.svelte'

	import Turntable from '$/lib/controls/Turntable.svelte'

	import Spokes from '$/lib/controls/Spokes.svelte'
	import Width from '$lib/controls/Width.svelte'
	import Speed from '$/lib/controls/Speed.svelte'
	import Radii from '$/lib/controls/Radii.svelte'
	import Invert from '$/lib/controls/Invert.svelte'
	import Mirror from '$/lib/controls/Mirror.svelte'

	async function getMedia(constraints) {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia(constraints)
		}
	}
</script>
