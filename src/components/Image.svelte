<script>
  import 'lazysizes';  
  
  export let id;
  export let classes;
  export let src;
  export let srcset;
  export let caption;
</script>

<div {id} class="image-container {classes ? classes : ''}">
  <img alt="" data-sizes="auto" data-src="{src}" data-srcset="{srcset}" class="lazyload" />
  <p class="caption">{caption}</p>
</div>

<style>

	img {
    width: 100%;
    height: auto;
	}

  @media screen and (min-width: 740px) {

    .caption {
			opacity: 0;
			transition: opacity 0.25s ease-out;
		}		

    .image-container:hover .caption {
      opacity: 1;
    }
  }
</style>
