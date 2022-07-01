<!-- svelte-ignore a11y-structure -->

<figcaption style:background-color={$labelColor}>
	<pre>{@html $recordLabel.replace(/\n/g,'<br>')}</pre>
</figcaption>

<style>
	figcaption {
		display: grid;
		place-content: center;
		aspect-ratio: 1;
		width: calc(var(--disc-size) / 3);
		padding: 1em;
		border-radius: 100%;
		overflow: hidden;
		opacity: 0.8;
	}

	figcaption::before {
		content: '';
		display: block;
		aspect-ratio: 1;
		width: 1em;
		box-shadow: 0 0 0 1px #fff8;
		border-radius: 100%;
		background: #000;

		@apply center;
	}
</style>

<script>
	import { recordLabel } from '$lib/mixers/record/Label.svelte'
	import { labelColor } from '$lib/mixers/color/LabelColor.svelte'
</script>
