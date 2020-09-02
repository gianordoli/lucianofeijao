<script>
  import 'lazysizes';  
  
  export let src;
  export let srcset;
  export let caption;
</script>

<div class="image-container big">
  <img alt="" data-sizes="auto" data-src="{src}" data-srcset="{srcset}" class="lazyload" />
  <p>{caption}</p>
</div>

<style>
	.image-container {
		width: 100%;
		/* max-width: 400px; */
		margin: 0 0 1em 0;
	}

	.image-container.big {
		grid-column-start: 1;
		grid-column-end: span 5;
	}

	.image-container.big:nth-child(even) {
		grid-column-start: 6;
	}	  
</style>
