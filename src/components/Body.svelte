<script>
  import * as transformedDoc from '../../data/transformed-doc.json';  
  import Image from '../components/Image.svelte';
  import Text from '../components/Text.svelte'
  
  export let pageName;
  const page = transformedDoc[pageName];
</script>

{#each page as {type, value}}
  {#if type === 'image'}
    <Image {...value} />
  {:else if type === 'text'}
    <Text {value} />
  {/if}
{/each}