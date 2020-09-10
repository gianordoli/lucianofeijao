<script>
  import Image from '../components/Image.svelte';
  import Text from '../components/Text.svelte';
  import Subhed from '../components/Subhed.svelte';
  import List from '../components/List.svelte';
  import Container from '../components/Container.svelte';
  
  export let page;

  let currContainer = null;
  let i = page.length;
  while (i > 0) {
    i --;
    const item = page[i];
    if (currContainer !== null) {
      if (item.type === 'start' && item.value === currContainer.value.className) {
        currContainer.value.items.reverse();        
        page.splice(i, currContainer.value.items.length + 2, currContainer);
        currContainer = null;
      } else {
        currContainer.value.items.push(item);
      }
    }
    if (item.type === 'end') {
      currContainer = {
        type: 'container',
        value: {
          className: item.value,
          items: [],
        }
      }
    }    
  }
  
</script>

{#each page as {type, value}}
  {#if type === 'image'}
    <Image {...value} />
  {:else if type === 'text'}
    <Text {value} />
  {:else if type === 'subhed'}
    <Subhed {value} />
  {:else if type === 'list'}
    <List {value} />
  {:else if type === 'container'}
    <Container {...value} />
  {/if}
{/each}