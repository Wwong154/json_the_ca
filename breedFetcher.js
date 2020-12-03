const request = require('request');

const fetchBreedDescription = function(breed, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) {
      cb(err);
    }
    let data = JSON.parse(body);
    if (!data[0] || data[0].name !== breed) {
      cb("Breed: " + breed + " is not found");
    } else {
      cb(null ,data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };