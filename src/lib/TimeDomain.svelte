<canvas bind:this={canvas} />

<script>
	import { onMount } from 'svelte'

	export let analyzer

	let canvas, frame

	function loop() {
		frame = requestAnimationFrame(loop)

		if (!analyzer || !canvas) return

		const ctx = canvas.getContext('2d')

		const dataArray = new Uint8Array(analyzer.frequencyBinCount)
		analyzer.getByteTimeDomainData(dataArray)

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = '#000'

		for (let i = 0; i < 100; i++) {
			ctx.fillRect(i * 3, canvas.height - (dataArray[i] / 2), 2, 2)
		}
	}

	onMount(() => {
		loop()

		return () => cancelAnimationFrame(frame)
	})
</script>
