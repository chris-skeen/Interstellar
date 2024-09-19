// hOCQwcczTwYiUmLHTzxKELJJa327n9cB8gv5hbl9
var url = "https://api.le-systeme-solaire.net/rest/bodies/"

function data_thing(data) {
    console.log(data);
    // data.bodies[0]
}

fetch(url) // api for the get request
    .then(response => response.json())
    .then(data => data_thing(data));
