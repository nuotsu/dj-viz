<main>
	<section>
		{#if $sound}
			{#await getMedia({ audio: true }) then audioStream}
				<AudioAnalyzer stream={audioStream} />

				<TimeDomainDJ />

				<Turntable>
					{#if $camera}
						{#await getMedia({ video: true }) then videoStream}
							<CameraDJ stream={videoStream} />
						{:catch}🙅‍♂️{/await}
					{/if}

					<FrequencyDJ />
				</Turntable>
			{:catch}🙅‍♂️{/await}
		{/if}
	</section>

	<nav>
		<Sound/>
		<Camera/>
		<Fullscreen/>
	</nav>

	<Controls/>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr auto auto;
		gap: 0.5rem;
		min-height: 100vh;
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	section {
		position: relative;
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

	import AudioAnalyzer from '$lib/AudioAnalyzer.svelte'
	import Turntable from '$/lib/controls/Turntable.svelte'
	import CameraDJ from '$lib/CameraDJ.svelte'
	import FrequencyDJ from '$lib/FrequencyDJ.svelte'
	import TimeDomainDJ from '$lib/TimeDomainDJ.svelte'

	import Controls from '$lib/controls/Controls.svelte'

	async function getMedia(constraints) {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia(constraints)
		}
	}
</script>
