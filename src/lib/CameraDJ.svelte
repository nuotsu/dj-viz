<figure style:scale="{$mirror ? -1 : 1} 1">
	<video autoplay
		bind:this={video}
		style:opacity={$opacity}
	>
		<track kind="captions" />
	</video>
</figure>

<style>
	figure {
		pointer-events: none;
		position: relative;
		aspect-ratio: 1;
		width: 100%;
		height: 100%;
		filter: grayscale();
		background-color: #000;
	}

	video {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		object-fit: cover;
	}
</style>

<script>
	import { mirror } from './controls/Mirror.svelte'
	import { opacity } from './controls/Opacity.svelte'

	export let stream

	let video

	$: if (video && video.srcObject !== stream) {
		video.srcObject = stream
	}
</script>
