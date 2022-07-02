<HotKey key="~" callback={() => { open = !open }} />

<details {open}>
	<summary>🎛</summary>

	<div>
		<slot></slot>
	</div>
</details>

<style>
	details {
		position: sticky;
		z-index: 1;
		bottom: 0;
	}

	summary {
		position: fixed;
		z-index: 1;
		left: 0;
		bottom: 0;
		padding: 0.5rem;
		outline: none;

		@apply transition-all focus:glow;
	}

	details:not([open]) summary:not(:is(:hover, :focus)) {
		opacity: 0;
	}

	details[open] div {
		padding-bottom: 1ch;
		border-top: 1px solid #fff2;
		background-color: #5554;
		backdrop-filter: blur(5px);
		animation: appear 0.2s ease-in-out forwards;
	}

	@keyframes appear {
		from {
			transform: translateY(100%);
		}
	}
</style>

<script>
	import { dev } from '$app/env'
	import HotKey from './inputs/HotKey.svelte'

	let open = dev
</script>
