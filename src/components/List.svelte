<script>
  export let value;
</script>

<ul>
{#each value as item}
  <li><span>{item.title}</span><span>{item.info}</span></li>
{/each}
</ul>