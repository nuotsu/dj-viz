<canvas bind:this={canvas} />

<style>
	canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		filter: blur(5px);
	}
</style>

<script>
	import { onMount } from 'svelte'
	import { analyzer } from './AudioAnalyzer.svelte'
	import { timeDomainColor } from '$$/mixers/color/TimeDomainColor.svelte'

	let canvas, frame

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!$analyzer || !canvas) return

		const ctx = canvas.getContext('2d')

		var bufferLength = $analyzer.frequencyBinCount
		var dataArray = new Uint8Array(bufferLength)
		$analyzer.getByteTimeDomainData(dataArray)

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = '#000'
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		ctx.lineWidth = 1
		ctx.strokeStyle = $timeDomainColor
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
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
