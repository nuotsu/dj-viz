<label>
	<input type="color" hidden bind:value>

	<hex style:color={value}>{value}</hex>

	{label}
</label>

<script>
	export let label, value
</script>
