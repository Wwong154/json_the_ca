'use_strict';

const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err, res, body) => {
  if (err) {
    throw new Error('Web access failed: ', err, res);
  }
  let data = JSON.parse(body);
  if (!data[0]) {
    throw new Error(`Breed: ${args[0]} Not Found`);
  }
  console.log(data[0].description);
});