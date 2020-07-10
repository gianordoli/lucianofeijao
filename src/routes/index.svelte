<script>
	import 'lazysizes';
	import images from '../../data/imagedata.json';
	import { work } from '../../data/doc.json';

	const imagesPath = 'images/';
	images.map(img => {
		const { slug, sizes, extension, hasRetina } = img;
		img.srcset = sizes.reduce((acc, curr, index, array) => {
			acc += `${imagesPath}${slug}-${curr}.${extension} ${curr}w`;
			if (hasRetina) acc += `, ${imagesPath}${slug}-${curr}_x2.${extension} ${curr * 2}w`;
			if (index < array.length - 1) acc += ',';
			return acc;
		}, '');
		img.src = `${imagesPath}${slug}-${sizes[Math.ceil(sizes.length/2)]}.${extension}`;
		return img;
	});	

	work.filter(item => item.type === 'image')
		.map(item => processImage(item));

	function getImageData(slug) {
		return images.find(i => i.slug === slug);
	}

	function processImage(item) {
		const slug = item.value.slug.substring(0, item.value.slug.indexOf('.'));
		const imageData = getImageData(slug);
		if (imageData) {
			item.value = Object.assign(item.value, imageData);
		} else {
			console.log(`Could not find imageData for ${item.value.slug}`);
		}
	}	

</script>

<svelte:head>
	<title>Luciano Feijão</title>
</svelte:head>

<div class="grid">
{#each work as { type, value }}
	<img alt="" data-sizes="auto" data-src="{value.src}" data-srcset="{value.srcset}" class="big lazyload"/>
{/each}
</div>

<style>
	
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 20px;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	img.big {
		grid-column-start: 1;
		grid-column-end: span 5;
	}

	img.big:nth-child(even) {
		grid-column-start: 6;
	}	
</style>