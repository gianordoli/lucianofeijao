const fs = require('fs');
const path = require('path');
const utils = require('./utils'); 

const init = doc => {

  const transformers = {};
  fs.readdirSync(path.join(__dirname, 'transformers')).forEach(file => {
    const type = file.replace(/\.js$/, '');
    transformers[type] = require(`./transformers/${file}`);
  });

  const metaData = {};
  metaData.images = JSON.parse(fs.readFileSync('./data/imagedata.json'));

  const transformedDoc = Object.keys(doc).reduce((acc, pageName) => {
    const page = doc[pageName].map(item => {
      
      item = utils.setTypeClassId(item);

      const { type } = item;
      if (Object.keys(transformers).indexOf(type) > -1) {
        const transformer = transformers[type];
        return transformer(item, metaData);
      } else {
        console.log(`No transformer found for type ${type}`);
        return item;
      }
    });
    
    acc[pageName] = page;

    return acc;
  }, {});

  return transformedDoc;
}

exports.init = init;