const fs = require('fs');
const path = require('path');
const downloadData = require('./download-data');
const parseArchieML = require('./parse-archieml');
const transformDoc = require('../transform');

const dataDir = path.join(__dirname, `../../data/`);
const docId = '1amhKi_wlVlVDf5zix9S1xCTwF2qP53HVhUildNTtsyc';

downloadData.init(docId, (data) => {
  const parsed = parseArchieML.init(data);
  
  // Original doc
  fs.writeFile(
    `${dataDir}doc.json`,
    JSON.stringify(parsed, null, 2),
    err => {
      if (err) return console.log(err);
      console.log(`Saved data to ${dataDir}doc.json`);
  });

  // Transformed doc
  const transformedDoc = transformDoc.init(parsed);
  fs.writeFile(
    `${dataDir}transformed-doc.json`,
    JSON.stringify(transformedDoc, null, 2),
    err => {
      if (err) return console.log(err);
      console.log(`Saved data to ${dataDir}transformed-doc.json`);
  });  
})