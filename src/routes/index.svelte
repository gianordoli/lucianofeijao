<script>
  import * as transformedDoc from '../../data/transformed-doc.json';
  import Image from '../components/Image.svelte';
  
  const pageName = 'work';
  const page = transformedDoc[pageName];
</script>

<svelte:head>
	<title>Luciano Feijão</title>
</svelte:head>

{#each page as {type, value}}
  {#if type === 'image'}
    <div class="parent">
      <div class="container">
        <Image {...value} />
      </div>
    </div>
  {/if}
{/each}

<style>

  .parent {
    position: relative;
    width: 100%;
    height: 100vh;  
    /* border: 1px solid black; */
  }

  .container {
    position: absolute;  
    width: 100%;
    height: 100%;
    /* background-color: #FACADA; */
    clip: rect(0, auto, auto, 0);
  }

  .container > :global(.image-container) {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .container > :global(.image-container > img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* .child {
    position: fixed;
    width: 630px;
    height: calc(100vh - 100px);
    border: 4px solid hsl(180, 45%, 40%);
    color: hsl(180, 45%, 40%);
    top: 50px;
    left: 50px;
    font-family: Helvetica, Arial, Sans;
    padding: 20px;
  }   */
	
	/* .grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 20px;
	} */
</style>
