<Bars />

<script>
	import { onMount } from 'svelte'
	import Bars, { bars } from './Bars.svelte'
	import { discValue, discActive } from './controls/Turntable.svelte'
	import { spokes, offset } from './controls/Spokes.svelte'
	import { speed } from './controls/Speed.svelte'

	export let analyzer

	let frame

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!analyzer) return

		const dataArray = new Uint8Array(analyzer.frequencyBinCount)
		analyzer.getByteFrequencyData(dataArray)

		$bars = Array.from(dataArray).slice($offset, $spokes + $offset)

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
