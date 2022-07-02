<label>
	<textarea
		style:background-color={$labelBG}
		style:color={$labelFG}
		style:font-family={$labelFont}
		class="focus:focus"
		placeholder="label"
		bind:value={$recordLabel}
		rows={3}
		spellcheck="false"
	/>
</label>

<style>
	textarea {
		width: 12em;
		resize: none;
		border-radius: 0.25em;
		padding: 0.25em;
		line-height: 1.2;
	}

	textarea::placeholder {
		color: #fff6;
	}
</style>

<script context="module">
	import { labelBG } from '../color/LabelBG.svelte'
	import { labelFG } from '../color/LabelFG.svelte'
	import { labelFont } from './LabelFont.svelte'
	import { writable } from 'svelte/store'

	export const DEFAULT_LABEL = ''
	export const recordLabel = writable()
</script>
