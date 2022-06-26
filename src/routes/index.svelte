<main>
	<nav>
		<Sound/>
		<Camera/>
		<Fullscreen/>
	</nav>

	<section>
		{#if $sound}
			{#await getMedia({ audio: true }) then audioStream}
				<Turntable>
					{#if $camera}
						{#await getMedia({ video: true }) then videoStream}
							<CameraDJ stream={videoStream} />
						{:catch}🙅‍♂️{/await}
					{/if}

					<SoundDJ stream={audioStream} />
				</Turntable>
			{:catch}🙅‍♂️{/await}
		{/if}
	</section>

	<nav>
		<Spokes/>
		<Width/>
		<Speed/>
		<Radii/>
		<Invert/>
		<Mirror/>
	</nav>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100vh;
	}

	section {
		display: grid;
		place-content: center;
		overflow: hidden;
	}
</style>

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
