<section>
	{#if $sound}
		{#await getMedia({ audio: true }) then audioStream}
			<AudioAnalyzer stream={audioStream} />
			<TimeDomainDJ />
		{:catch}🙅‍♂️{/await}
	{/if}

	<Turntable>
		{#if $camera}
			{#await getMedia({ video: true }) then videoStream}
				<CameraDJ stream={videoStream} />
			{:catch}🙅‍♂️{/await}
		{/if}

		<FrequencyDJ />
	</Turntable>
</section>

<style>
	section {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-around;
		overflow: hidden;
	}
</style>

<script>
	import { camera } from '$$/controls/Camera.svelte'
	import { sound } from '$$/controls/Sound.svelte'

	import AudioAnalyzer from './AudioAnalyzer.svelte'
	import Turntable from './Turntable.svelte'
	import CameraDJ from './CameraDJ.svelte'
	import FrequencyDJ from './FrequencyDJ.svelte'
	import TimeDomainDJ from './TimeDomainDJ.svelte'

	async function getMedia(constraints) {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia(constraints)
		}
	}
</script>
