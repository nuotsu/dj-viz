<audio bind:this={audio} autoplay />

<Frequency {analyzer} />
<TimeDomain {analyzer} />

<script>
	import Frequency from './Frequency.svelte'
	import TimeDomain from './TimeDomain.svelte'

	export let stream

	let audio, analyzer

	$: if (audio && audio?.srcObject !== stream) {
		audio.srcObject = stream

		let audioCtx = new AudioContext()

		analyzer = audioCtx.createAnalyser()
		analyzer.connect(audioCtx.destination)

		audioCtx
			.createMediaElementSource(audio)
			.connect(analyzer)
	}
</script>
