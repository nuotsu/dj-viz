<canvas bind:this={elem} />

<script>
	let elem

	$: canvas = elem
</script>

<script context="module">
	export let canvas
</script>
