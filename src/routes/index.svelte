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

  @media screen and (min-width: 740px) {

    .page-work {
      display: flex;
      flex-direction: row;
      align-items: top;
      flex-wrap: wrap;
      justify-content: center;
    }

    .page-work :global(.image-container) {
      width: 80%;
      margin: 0 10% 10%;
      /* border: 1px solid black; */
    }  

    .page-work :global(.image-container.small) {
      width: 35%;
      margin: 0 5% 10%;
    }

    .page-work :global(.image-container.medium) {
      width: 55%;
      margin: 0 22.5% 10%;    
    }

    .page-work :global(.image-container#cover) {
      width: calc(440/686 * (100vh - var(--layout-padding)*4));
    }  
  }

</style>
