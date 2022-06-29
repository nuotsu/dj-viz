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

	<Controls/>
	<Mixers/>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr auto auto;
		gap: 0.5rem;
		min-height: 100vh;
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
	import { camera } from '$lib/Camera.svelte'
	import { sound } from '$lib/Sound.svelte'

	import AudioAnalyzer from '$lib/AudioAnalyzer.svelte'
	import Turntable from '$/lib/mixers/Turntable.svelte'
	import CameraDJ from '$lib/CameraDJ.svelte'
	import FrequencyDJ from '$lib/FrequencyDJ.svelte'
	import TimeDomainDJ from '$lib/TimeDomainDJ.svelte'

	import Controls from '$lib/controls/Controls.svelte'
	import Mixers from '$lib/mixers/Mixers.svelte'

	async function getMedia(constraints) {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia(constraints)
		}
	}
</script>
