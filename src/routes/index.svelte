<button on:click={() => { enabled = !enabled }}>
	{enabled ? 'stop' : 'start'}
</button>

{#if enabled}
	{#await getMedia()}
		<p>Asking...</p>
	{:then stream}
		<AudioCanvas {stream} />
	{:catch err}
		<p>Denied! {console.error(err)}</p>
	{/await}
{/if}

<script>
	import AudioCanvas from '$/lib/AudioCanvas.svelte'

	let enabled = true

	async function getMedia() {
		if (!('navigator' in window)) return null

		return navigator.mediaDevices.getUserMedia({ audio: true })
	}
</script>
