const axios = require('axios');

function getNumberFact(num) {
  let baseURL = `http://numbersapi.com/${num}/trivia`;

  axios
    .get(baseURL)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {
      console.log('reached the end of the end of the promise');
    });
}

getNumberFact(13);

//Jquery version

$.getJSON;
