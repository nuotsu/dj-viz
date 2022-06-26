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

					<FrequencyDJ stream={audioStream} />
				</Turntable>

				<TimeDomainDJ stream={audioStream} />
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
		min-height: 100vh;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: space-around;
		overflow: hidden;
	}
</style>

<script>
	import Camera, { camera } from '$lib/Camera.svelte'
	import Sound, { sound } from '$lib/Sound.svelte'
	import Fullscreen from '$/lib/Fullscreen.svelte'

	import Turntable from '$/lib/controls/Turntable.svelte'
	import CameraDJ from '$lib/CameraDJ.svelte'
	import FrequencyDJ from '$lib/FrequencyDJ.svelte'
	import TimeDomainDJ from '$lib/TimeDomainDJ.svelte'

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
