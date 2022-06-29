<label>
	<input type="color" hidden bind:value>

	<hex style:color={value}>{value}</hex>

	{label}
</label>

<style>
	label:active hex {
		text-decoration: underline;
		text-decoration-style: dashed;
	}
</style>

<script>
	export let label, value
</script>
