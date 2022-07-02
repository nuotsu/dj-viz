<label>
	<textarea
		style:background-color={$labelColor}
		style:color={$labelColor === '#ffffff' ? '#000' : '#fff'}
		class="focus:focus"
		placeholder="label"
		bind:value={$recordLabel}
		rows={3}
		spellcheck="false"
	/>
</label>

<style>
	textarea {
		width: 10em;
		resize: none;
		border-radius: 0.25em;
		padding: 0.25em;
		text-align: center;

		@apply font-handwritten;
	}

	textarea::placeholder {
		color: #fff6;
	}
</style>

<script context="module">
	import { labelColor } from './LabelColor.svelte'
	import { writable } from 'svelte/store'

	export const recordLabel = writable('')
</script>
