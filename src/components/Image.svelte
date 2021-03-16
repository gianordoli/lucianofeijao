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

  .image-container {
    margin-bottom: calc(var(--layout-padding) * 1.5);
  }

	img {
    width: 100%;
    height: auto;
	}

  .caption {
    font-size: 0.875rem;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 740px) {

    .caption {
      margin-top: 10px;
    }

    /* .caption {
			opacity: 0;
			transition: opacity 0.25s ease-out;
		}

    .image-container:hover .caption {
      opacity: 1;
    } */
  }
</style>
