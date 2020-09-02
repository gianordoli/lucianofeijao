<script>
	import 'lazysizes';
	import { work } from '../../data/transformed-doc.json';
</script>

<svelte:head>
	<title>Luciano Feijão</title>
</svelte:head>

<div class="grid">
{#each work as { type, value }}
	<img alt="" data-sizes="auto" data-src="{value.src}" data-srcset="{value.srcset}" class="big lazyload"/>
{/each}
</div>

<style>
	
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 20px;
	}

	img {
		width: 100%;
		/* max-width: 400px; */
		margin: 0 0 1em 0;
	}

	img.big {
		grid-column-start: 1;
		grid-column-end: span 5;
	}

	img.big:nth-child(even) {
		grid-column-start: 6;
	}	
</style>