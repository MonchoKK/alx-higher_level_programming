#!/usr/bin/node
/* Prints all the characters of a Star Wars movie
 * Takes args, first of which is the movie ID to request (GET)
 * Displays one character name per line & uses the Star Wars API
 */

const request = require('request');
const movieId = process.argv[2];

if (movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
  request(url, function (error, response, body) {
    if (error) {
      console.log(error);
      return;
    }

    const characters = JSON.parse(body).characters;
    characters.forEach(character => {
      request(character, function (error, response, body) {
        if (error) {
          console.log(error);
          return;
        }
        const name = JSON.parse(body).name;
        console.log(name);
      });
    });
  });
} else {
  console.log('Usage: ./script.js <Movie ID>');
}
