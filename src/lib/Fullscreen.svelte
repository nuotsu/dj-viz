<button title="Fullscreen" on:click={onClick}>
	📺
	{#if fullscreen}❎{/if}
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
