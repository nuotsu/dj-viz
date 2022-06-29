<Bars />

<script>
	import { onMount } from 'svelte'
	import { analyzer } from './AudioAnalyzer.svelte'
	import Bars, { bars } from './Bars.svelte'
	import { discValue, discActive } from './Turntable.svelte'
	import { spokes } from '$lib/mixers/Spokes.svelte'
	import { offset } from '$lib/mixers/Offset.svelte'
	import { speed } from '$lib/mixers/Speed.svelte'

	let frame
	let { round: r } = Math

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!$analyzer) return

		const dataArray = new Uint8Array($analyzer.frequencyBinCount)
		$analyzer.getByteFrequencyData(dataArray)

		$bars = Array.from(dataArray).slice(r($offset), r($spokes + $offset))

		if (!$discActive) {
			if ($discValue >= 360) {
				$discValue %= 360
			} else if ($discValue < 0) {
				$discValue = ($discValue % 360) + 360
			}

			$discValue += $speed
		}
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
