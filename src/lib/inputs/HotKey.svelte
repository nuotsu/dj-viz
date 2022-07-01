<svelte:window on:keydown={e => onKeydown(e, { toggle, callback })} />

<script>
	export let key, toggle, callback

	function onKeydown(e, { toggle, callback }) {
		const focusedOnTextField = (
			document.activeElement.tagName === 'INPUT' &&
			document.activeElement.type === 'text'
		)

		if (!key || e.key !== key || focusedOnTextField) return

		callback() || toggle.update(value => !value)
	}
</script>
