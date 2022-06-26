<audio bind:this={audio} autoplay />

<script>
	export let stream

	let audio

	$: if (audio && audio?.srcObject !== stream) {
		audio.srcObject = stream

		let audioCtx = new AudioContext()

		$analyzer = audioCtx.createAnalyser()
		$analyzer.connect(audioCtx.destination)

		audioCtx
			.createMediaElementSource(audio)
			.connect($analyzer)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const analyzer = writable(null)
</script>
