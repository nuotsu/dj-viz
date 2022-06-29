<button
	class:off={!fullscreen}
	class="focus-visible:focus"
	on:click={onClick}
>
	📺
</button>

<script>
	let fullscreen = false

	function onClick() {
		fullscreen = !document.fullscreenElement

		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
		} else {
			document.exitFullscreen()
		}
	}
</script>
