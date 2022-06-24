<audio bind:this={audio} autoplay />

<FrequencyCSS {analyzer} />

<script>
	import FrequencyCSS from './FrequencyCSS.svelte'

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
