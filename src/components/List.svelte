<script>
  export let value;
</script>

<ul>
{#each value as item}
  <li><span>{item.title}</span><span>{item.info}</span></li>
{/each}
</ul>

<style>

  ul {
    margin-bottom: calc(var(--layout-padding)*2);
  }

  li {
    padding: 0 1em;    
    margin-bottom: 0.5em;        
  }

  li span:first-child {
    text-indent: -1em;
  }

  li span:first-child:before {
    content: "–";
    margin-right: 0.5em;
  }

  li > span {
    display: block;
  }

  li > span:last-child {
    font-style: italic;
  }

</style>