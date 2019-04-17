const request = require('request');

let baseURL = `http://numbersapi.com/${num}/trivia`;

function getNumberFact(num) {
  request(baseURL, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body);
  });
}

getNumberFact(42);
