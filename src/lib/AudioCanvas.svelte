<audio bind:this={audio} controls />

<canvas bind:this={canvas} />

<script>
	export let stream

	import { onMount } from 'svelte'

	let audio
	let frame
	let analyzer
	let bufferLength
	let dataArray

	let canvas
	let ctx
	let bar_x
	let bar_width
	let bar_height
	let bar_num = 100

	$: if (canvas && audio?.srcObject !== stream) {
		audio.srcObject = stream

		let audioCtx = new AudioContext()
		analyzer = audioCtx.createAnalyser()
		let source = audioCtx.createMediaElementSource(audio)

		source.connect(analyzer)
		analyzer.connect(audioCtx.destination)

		ctx = canvas.getContext('2d')
	}

	function loop() {
		frame = requestAnimationFrame(loop)

		bufferLength = analyzer?.frequencyBinCount
		dataArray = new Uint8Array(bufferLength)
		analyzer?.getByteFrequencyData(dataArray)

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = '#f00'

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
