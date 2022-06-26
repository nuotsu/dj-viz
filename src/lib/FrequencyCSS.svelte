<FrequencyViz {bars} />

<script>
	import { onMount } from 'svelte'
	import { discValue, discActive } from './controls/Turntable.svelte'
	import { spokes, offset } from './controls/Spokes.svelte'
	import { speed } from './controls/Speed.svelte'
	import FrequencyViz from './FrequencyViz.svelte'

	export let analyzer

	let bars = [], frame

	function jam() {
		frame = requestAnimationFrame(jam)

		if (!analyzer) return

		const dataArray = new Uint8Array(analyzer.frequencyBinCount)
		analyzer.getByteFrequencyData(dataArray)

		bars = Array.from(dataArray).slice($offset, $spokes + $offset)

		if (!$discActive) {
			if ($discValue >= 360) {
				$discValue = 0
			} else {
				$discValue += $speed
			}
		}
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
