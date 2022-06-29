<figure style:scale="{$mirror ? -1 : 1} 1">
	<video autoplay
		use:srcObject={stream}
		style:opacity={$opacity}
		style:filter="saturate({$saturation})"
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
	import { mirror } from '$lib/mixers/Mirror.svelte'
	import { opacity } from '$lib/mixers/Opacity.svelte'
	import { saturation } from '$lib/mixers/Saturation.svelte'

	export let stream

	function srcObject(node, stream) {
		node.srcObject = stream
	}
</script>
