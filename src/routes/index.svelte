<script>
  import Body from '../components/Body.svelte'
</script>

<svelte:head>
	<title>Luciano Feijão</title>
</svelte:head>

<div class="grid">
  <Body pageName={'work'} />
</div>

<style>
	
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 20px;
	}
</style>