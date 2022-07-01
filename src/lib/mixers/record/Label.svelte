<label>
	<textarea
		class="focus:focus"
		placeholder="label"
		bind:value={$recordLabel}
		rows={4}
	/>
</label>

<style>
	textarea {
		resize: none;
	}
</style>

<script context="module">
	import { writable } from 'svelte/store'

	export const recordLabel = writable('')
</script>
