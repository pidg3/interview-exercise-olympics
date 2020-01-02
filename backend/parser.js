const csv = require('csv-parser');
const fs = require('fs');

const PATH = './fixtures/athlete_events_medals_only.csv';

const getCsvData = parser => {
  if (!parser) parser = i => i;
  let results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(PATH)
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => {
        resolve(results.filter(parser));
      });
  });
};

exports.getCsvData = getCsvData;
