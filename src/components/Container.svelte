<script>
  import Body from '../components/Body.svelte'

  export let className;
  export let items;
  // console.log(items)
</script>

<div class="{className}">
  <Body page={items} />
</div>