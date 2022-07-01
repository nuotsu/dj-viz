<label>
	<input type="text"
		placeholder="Record label"
		bind:value={$recordLabel}
	/>
</label>

<script>
	import { writable } from 'svelte/store'

	export const recordLabel = writable('')
</script>
