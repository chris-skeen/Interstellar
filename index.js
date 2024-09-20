var url = "https://api.le-systeme-solaire.net/rest/bodies/"

function data_thing(data){
    var bodies = data.bodies
    console.log(Math.round(Math.random() * bodies.length-1 ));
    console.log(bodies[Math.round(Math.random() * bodies.length-1 )]);
}

fetch(url) // api for the get request
    .then(response => response.json())
    .then(data => data_thing(data));