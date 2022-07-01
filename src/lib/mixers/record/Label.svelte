<label>
	<input type="text"
		placeholder="label"
		bind:value={$recordLabel}
	/>
</label>

<script context="module">
	import { writable } from 'svelte/store'

	export const recordLabel = writable('')
</script>
