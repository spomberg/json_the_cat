const request = require('request');
const breedId = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedId}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0]['description']);
  } else console.log("Breed not found");
});