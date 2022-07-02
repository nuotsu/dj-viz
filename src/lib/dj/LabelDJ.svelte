<!-- svelte-ignore a11y-structure -->

<figcaption
	style:background-color={$labelBG}
	style:color={$labelFG}
	style:font-size="{$labelSize}em"
>
	<pre style:font-family={$labelFont}>{@html $recordLabel.replace(/\n/g,'<br>')}</pre>
</figcaption>

<style>
	figcaption {
		display: grid;
		place-content: center;
		aspect-ratio: 1;
		width: calc(var(--disc-size) / 3);
		padding: 1em;
		border-radius: 100%;
		opacity: 0.8;
		overflow: hidden;
	}

	figcaption::before {
		content: '';
		display: block;
		aspect-ratio: 1;
		width: calc(var(--disc-size) / 3 / 10);
		box-shadow: 0 0 0 1px #fff8;
		border-radius: 100%;
		background: #000;

		@apply center;
	}
</style>

<script>
	import { recordLabel } from '$lib/mixers/record/Label.svelte'
	import { labelBG } from '$lib/mixers/color/LabelBG.svelte'
	import { labelFG } from '$lib/mixers/color/LabelFG.svelte'
	import { labelFont } from '$lib/mixers/record/LabelFont.svelte'
	import { labelSize } from '$lib/mixers/record/LabelSize.svelte'
</script>
