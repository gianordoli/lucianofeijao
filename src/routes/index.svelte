<script>
  import { work } from '../../data/transformed-doc.json';  
  import Body from '../components/Body.svelte'
</script>

<svelte:head>
	<title>Luciano Feijão</title>
</svelte:head>

<div class="page-work">
  <Body page={work} />
</div>

<style>

  /* .parent {
    position: relative;
    width: 100%;
    height: 100vh;  
  }

  .container {
    position: absolute;  
    width: 100%;
    height: 100%;
    clip: rect(0, auto, auto, 0);
  }

  .container > :global(.image-container) {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: var(--main-padding);
  }

  .container > :global(.image-container > img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  } */

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
