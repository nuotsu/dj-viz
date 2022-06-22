<canvas bind:this={canvas} />

<script>
	import { onMount } from 'svelte'

	export let analyzer

	let canvas, frame

	function loop() {
		frame = requestAnimationFrame(loop)

		if (!analyzer || !canvas) return

		const ctx = canvas.getContext('2d')

		analyzer.fftSize = 2048
		var bufferLength = analyzer.frequencyBinCount
		var dataArray = new Uint8Array(bufferLength)

		ctx.clearRect(0, 0, canvas.width, canvas.height)

		analyzer.getByteTimeDomainData(dataArray)

		ctx.fillStyle = '#fff'
		ctx.fillRect(0, 0, canvas.width, canvas.height)

		ctx.lineWidth = 1.5
		ctx.strokeStyle = '#000'
		ctx.beginPath()

		var sliceWidth = canvas.width * 1 / bufferLength
		var x = 0

		for(var i = 0; i < bufferLength; i++) {
			var v = dataArray[i] / 128
			var y = v * canvas.height / 2

			if (i === 0) {
				ctx.moveTo(x, y)
			} else {
				ctx.lineTo(x, y)
			}

			x += sliceWidth
		}

		ctx.lineTo(canvas.width, canvas.height / 2)
		ctx.stroke()
	}

	onMount(() => {
		loop()

		return () => cancelAnimationFrame(frame)
	})
</script>
