module.exports = function transformImage(item, metaData) {
  const { value } = item;
  const { images } = metaData;
  let src, srcset;

  const imagesPath = 'images/';
  const imageData = images.find(i => {
    return i.slug === value.slug.substring(0, item.value.slug.indexOf('.'));
  });

  if (imageData) {
    const { slug, sizes, extension, hasRetina } = imageData;
    srcset = sizes.reduce((acc, curr, index, array) => {
      acc += `${imagesPath}${slug}-${curr}.${extension} ${curr}w`;
      if (hasRetina) acc += `, ${imagesPath}${slug}-${curr}_x2.${extension} ${curr * 2}w`;
      if (index < array.length - 1) acc += ',';
      return acc;
    }, '');
    src = `${imagesPath}${slug}-${sizes[Math.ceil(sizes.length / 2)]}.${extension}`;
  } else {
    src = `${imagesPath}${value.slug}`;
  }
  
  item.value = {
    ...value,
    src,
    srcset
  }

  return item;
};