<Bars />

<script>
	import { onMount } from 'svelte'
	import Bars, { bars } from './Bars.svelte'
	import { disc } from './Turntable.svelte'
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

		if (!$disc.active) {
			if ($disc.value >= 360) {
				$disc.value = 0
			} else {
				$disc.value += $speed
			}
		}
	}

	onMount(() => {
		jam()
		return () => cancelAnimationFrame(frame)
	})
</script>
