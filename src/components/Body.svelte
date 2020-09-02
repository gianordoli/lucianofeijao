<script>
  import * as transformedDoc from '../../data/transformed-doc.json';  
  import Image from '../components/Image.svelte'
  
  export let pageName;
  const page = transformedDoc[pageName];
</script>

{#each page as {type, value}}
  {#if type === 'image'}
    <Image {...value} />
  {/if}
{/each}

<style>

</style>
