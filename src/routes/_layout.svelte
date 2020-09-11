<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		/* max-width: 56em; */
		background-color: white;
		/* padding: 2em; */
		margin: 0 auto;
    box-sizing: border-box;
    padding: 24px;    
  }
  
  main:after {
    content: "";
    display: block;
    box-sizing: border-box;
    /* width: calc(100% - var(--main-padding)*2);
    height: calc(100% - var(--main-padding)*2); */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;  
    /* top: var(--main-padding);
    left: var(--main-padding); */
    /* border: 5px solid black; */
    /* border: 20px solid white;
    box-shadow: inset 0px 0px 0px 4px black; */
    border: 20px solid var(--color-black);
    z-index: 100;
    pointer-events: none;
  }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>