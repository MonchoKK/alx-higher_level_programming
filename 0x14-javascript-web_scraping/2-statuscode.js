#!/usr/bin/node
/* Displays the status code of a GET request
 * Takes args, first of which is the URL to request (GET) using the module 'request' */

const request = require('request');
if (process.argv.length > 2) {
  request.get(process.argv[2], function (error, response) {
    if (!error) {
      console.log('code:', response.statusCode);
    } else {
      console.error('Error:', error);
    }
  });
} else {
  console.log('Usage: ./script.js <URL>');
}
