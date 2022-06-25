<video bind:this={video} autoplay>
	<track kind="captions" />
</video>

<script>
	export let stream

	let video

	$: if (video && video.srcObject !== stream) {
		video.srcObject = stream
	}
</script>
