<label>
	<input type="color" hidden bind:value>

	<span>{label}</span>

	<hex style:color={value}>
		{#each value as char}
			<char>{char}</char>
		{/each}
	</hex>
</label>

<style>
	label {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1ch;
	}

	label:active hex {
		@apply focus;
	}

	hex {
		display: grid;
		grid-template-columns: repeat(7, 1ch);
		border-radius: 0.25em;

		@apply glow;
	}

	char {
		margin: auto;
	}
</style>

<script>
	export let label, value
</script>
