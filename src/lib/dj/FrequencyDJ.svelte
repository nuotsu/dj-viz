<Bars />

<script>
	import { onMount } from 'svelte'
	import { analyzer } from './AudioAnalyzer.svelte'
	import Bars, { bars } from './Bars.svelte'
	import { discValue, discActive } from './Turntable.svelte'
	import { spokes } from '$$/mixers/sound/Spokes.svelte'
	import { offset } from '$$/mixers/sound/Offset.svelte'
	import { speed } from '$$/mixers/sound/Speed.svelte'

	let frame
	let { round: r } = Math

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!$discActive) {
			if ($discValue >= 360) {
				$discValue %= 360
			} else if ($discValue < 0) {
				$discValue = ($discValue % 360) + 360
			}

			$discValue += $speed
		}

		if (!$analyzer) return

		const dataArray = new Uint8Array($analyzer.frequencyBinCount)
		$analyzer.getByteFrequencyData(dataArray)

		$bars = Array.from(dataArray).slice(r($offset), r($spokes + $offset))
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
