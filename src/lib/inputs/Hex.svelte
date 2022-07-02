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
		text-decoration: underline;
		text-decoration-style: dashed;
	}

	hex {
		display: grid;
		grid-template-columns: repeat(7, 1ch);
	}

	char {
		margin: auto;
	}
</style>

<script>
	export let label, value
</script>
