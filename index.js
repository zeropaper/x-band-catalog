



function getJSON(url, callback) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(callback)
    .catch(function(err) {
      throw err;
    });
}

getJSON('/bands.json', function(bands) {
  console.info(bands);
});
