<Oscillator/>

<script>
	import { onMount } from 'svelte'
	import { analyzer } from './AudioAnalyzer.svelte'
	import Oscillator, { oscillations } from './Oscillator.svelte'

	let frame

	function jam() {
		frame = requestAnimationFrame(jam)

		const dataArray = new Uint8Array($analyzer.frequencyBinCount)
		$analyzer.getByteTimeDomainData(dataArray)

		$oscillations = Array.from(dataArray).slice(0, 512)
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
