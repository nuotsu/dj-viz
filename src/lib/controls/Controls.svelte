<nav>
	<Sound/>
	<Camera/>
	<Fullscreen/>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		font-size: 2rem;
	}

	nav :global(.off) {
		opacity: 0.5;
		filter: grayscale();
	}
</style>

<script>
	import Camera from './Camera.svelte'
	import Sound from './Sound.svelte'
	import Fullscreen from './Fullscreen.svelte'
</script>
