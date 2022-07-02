<label>
	<textarea
		style:background-color={$labelColor}
		style:color={$labelColor === '#ffffff' ? '#000' : '#fff'}
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
	import { labelColor } from './LabelColor.svelte'
	import { labelFont } from './LabelFont.svelte'
	import { writable } from 'svelte/store'

	export const recordLabel = writable('')
</script>
