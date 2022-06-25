<audio bind:this={audio} autoplay />

<Turntable>
	<Platter {analyzer} />
</Turntable>

<script>
	import Turntable from './Turntable.svelte'
	import Platter from './Platter.svelte'

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
