<script>
  import { about } from '../../data/transformed-doc.json';    
  import Body from '../components/Body.svelte'
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="page-about">
  <Body page={about} />
</div>

<style>

  .page-about {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;    
  }

  .page-about :global(.bio) {
    padding-bottom: var(--layout-padding);
    margin-bottom: calc(var(--layout-padding)*2);
    border-bottom: var(--layout-stroke-width) solid var(--color-black);
  }

  @media screen and (min-width: 740px) {

    .page-about {
      margin-top: calc(var(--layout-padding) * 2.5);
    }    

    .page-about :global(.teaching, .solo-exhibitions) {
      width: 50%;
      display: inline-block;
      vertical-align: top;
    }

    .page-about :global(.group-exhibitions ul) {
      columns: 2;
      column-gap: 0;
    }
  }

  @media screen and (min-width: 1240px) {

    .page-about {
      margin-top: 0;
    }
  }
</style>