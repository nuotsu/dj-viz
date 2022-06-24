<nav>
	<button on:click={() => { power = !power }}>
		🔌
	</button>

	<Fullscreen />
</nav>

{#if power}
	{#await getMedia()}
		Asking...
	{:then stream}
		<AudioCanvas {stream} />
	{:catch}
		🙅‍♂️
	{/await}
{/if}

<script>
	import { dev } from '$app/env'
	import Fullscreen from '$/lib/Fullscreen.svelte'
	import AudioCanvas from '$/lib/AudioCanvas.svelte'

	let power = dev

	async function getMedia() {
		if ('navigator' in window) {
			return navigator.mediaDevices.getUserMedia({ audio: true })
		}
	}
</script>
