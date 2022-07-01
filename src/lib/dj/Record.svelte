<figure>
	{#if $recordLabel}
		<RecordLabel/>
	{/if}
</figure>

<style>
	figure {
		--reflection: #fff2;
		display: grid;
		place-content: center;
		border-radius: 100%;
		border: 1px solid #fff1;
	}

	figure::before,
	figure::after {
		content: '';
		position: absolute;
		inset: 0;
		mix-blend-mode: soft-light;
	}

	figure::before {
		background-image: repeating-radial-gradient(
			transparent,
			transparent 5%,
			#0004 calc(5% + 1px)
		);
	}

	figure::after {
		background-image: repeating-conic-gradient(
			from 45deg,
			transparent,
			transparent,
			var(--reflection) 88deg,
			var(--reflection) 92deg,
			transparent,
			transparent 180deg
		);
	}

	@screen md {
		figure {
			--reflection: #fff;
		}
	}
</style>

<script>
	import { recordLabel } from '$lib/mixers/record/Label.svelte'
	import RecordLabel from './Label.svelte'
</script>
