{#await getMedia()}
	Asking...
{:then stream}
	<AudioCanvas {stream} />
{:catch err}
	Denied! {console.error(err)}
{/await}

<script>
	import AudioCanvas from '$/lib/AudioCanvas.svelte'

	const constraints = {
		audio: true,
	}

	async function getMedia() {
		if (!('navigator' in window)) return null

		return navigator.mediaDevices.getUserMedia(constraints)
	}
</script>
