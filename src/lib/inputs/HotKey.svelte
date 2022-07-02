<svelte:window on:keydown={e => onKeydown(e, toggle, callback)} />

<script>
	export let key, toggle, callback

	function onKeydown(e, toggle, callback) {
		const focusedOnTextField = (
			document.activeElement.tagName === 'INPUT' &&
			document.activeElement.type === 'text'
		)

		const focusedOnTextarea = document.activeElement.tagName === 'TEXTAREA'

		if (e.key === 'Escape') {
			document.activeElement.blur()
		}

		if (!key || e.key !== key || focusedOnTextField || focusedOnTextarea) {
			return
		}

		!!callback
			? callback()
			: toggle.update(value => !value)
	}
</script>
