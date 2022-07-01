<Control label="📺" key="F" value={fullscreen} />

<script>
	import { browser } from '$app/env'

	$: if ($fullscreen) {
		browser && document.documentElement.requestFullscreen()
	} else {
		(browser && document.fullscreenElement) && document.exitFullscreen()
	}
</script>

<script context="module">
	import Control from './Control.svelte'
	import { writable } from 'svelte/store'

	export const fullscreen = writable(false)
</script>
