<fieldset {disabled}>
	<legend>
		{name}
		<slot name="legend"></slot>
	</legend>

	<div class:vertical style:gap>
		<slot></slot>
	</div>
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1ch;
		padding: 0 1ch 1ch;
		border: 1px solid #fff2;

		@apply transition-opacity;
	}

	fieldset[disabled] {
		pointer-events: none;
		opacity: 0.2;
	}

	legend {
		display: flex;
		gap: 0.5ch;
		margin-bottom: 0.5ch;
	}

	div {
		display: flex;
		flex-wrap: wrap;

		@apply <md:justify-center;
	}

	.vertical {
		display: flex;
		flex-direction: column;
	}
</style>

<script>
	export let name, vertical, disabled, gap = '0.5ch'
</script>
