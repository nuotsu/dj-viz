<audio bind:this={audio} controls autoplay />

<Frequency />

<script>
	import { onMount } from 'svelte'
	import Frequency, { canvas } from './Frequency.svelte'

	export let stream

	let audio
	let analyzer
	let frame

	$: if (audio && audio?.srcObject !== stream) {
		audio.srcObject = stream

		let audioCtx = new AudioContext()
		analyzer = audioCtx.createAnalyser()
		let source = audioCtx.createMediaElementSource(audio)

		source.connect(analyzer)
		analyzer.connect(audioCtx.destination)
	}

	function loop() {
		frame = requestAnimationFrame(loop)

		if (!analyzer || !canvas) return

		const ctx = canvas.getContext('2d')

		let bar_x
		let bar_width
		let bar_height
		let bar_num = 100

		let bufferLength = analyzer.frequencyBinCount
		let dataArray = new Uint8Array(bufferLength)
		analyzer?.getByteFrequencyData(dataArray)

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = '#000'

		for (let i = 0; i < bar_num; i++) {
			bar_x = i * 3
			bar_width = 2
			bar_height = -(dataArray[i] / 2)
			ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
		}
	}

	onMount(() => {
		loop()

		return () => cancelAnimationFrame(frame)
	})
</script>
