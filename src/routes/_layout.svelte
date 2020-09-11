<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
    box-sizing: border-box;
    padding: calc(var(--layout-padding) + var(--layout-stroke-width));    
  }
  
  main:after {
    content: "";
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;  
    border: calc(var(--layout-padding)/2) solid white;
    box-shadow: inset 0px 0px 0px 4px black;
    z-index: 100;
    pointer-events: none;
  }

  @media screen and (min-width: 740px) {

    main {
      padding: calc(var(--layout-padding)*2);
    }

    main:after { 
      border: var(--layout-padding) solid white;
    }
  }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>