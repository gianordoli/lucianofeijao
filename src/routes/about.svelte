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

  .bio :global(p) {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>