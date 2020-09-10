<script>
  import Body from '../components/Body.svelte'
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="bio">
  <Body pageName={'about'} />
</div>

<style>

  .bio {
    margin-top: var(--main-margin-top);
  }

  .bio :global(p),
  .bio :global(.image-container) {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .bio :global(li > span) {
    display: block;
  }

  .bio :global(li > span:last-child) {
    font-style: italic;
  }  
</style>