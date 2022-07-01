<audio use:srcObject={stream} autoplay crossorigin="anonymous" />

<script>
	export let stream

	function srcObject(node, stream) {
		if (!stream) return

		node.srcObject = stream

		let audioCtx = new AudioContext()

		$analyzer = audioCtx.createAnalyser()
		$analyzer.connect(audioCtx.destination)

		audioCtx
			.createMediaElementSource(node)
			.connect($analyzer)

		return {
			update(newStream) {
				if (node.srcObject != newStream) {
					node.srcObject = newStream
				}
			}
		}
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const analyzer = writable(null)
</script>
