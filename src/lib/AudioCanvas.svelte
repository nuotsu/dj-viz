<audio bind:this={audio} controls autoplay />

<Frequency {analyzer} />

<script>
	import Frequency from './Frequency.svelte'

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
