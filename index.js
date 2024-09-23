//  THIS IS WHERE WE FETCH ---------------------------------------------------------------------------------------------
let jsonData;

fetch('planets.json') 
    .then(response => response.json())
    .then(data => {jsonData = data; data_thing(data, checkForNull)});

// API KEY: 9fd1566478f2224ea0cf7b9a8218a57d0dd673951974424a476e149d049d19d0


//  CHECK IF IT EXISTS  -----------------------------------------------------------------------------------------------
function checkForNull(item){
    if (item != '' && item != null) {
        let itemName = item
        return itemName
    } 
    else{
        let itemName = 'Unknown'; 
        return itemName
    }

}

// WHERE VALUES ARE SET ----------------------------------------------------------------------------------------------
function data_thing(data, checkForNull){
    // Setting up index methods
    let bodies = data.bodies
    let randIndex = Math.round(Math.random() * bodies.length-1 )

    let name
    let moons;
    let gravity;
    let discoveredBy;
    let discoveryDate;
    let bodyType;
    // console.log(data.bodies[randIndex].name)
    name = checkForNull(data.bodies[randIndex].name);
    englishName = checkForNull(data.bodies[randIndex].englishName)
    moons = checkForNull(data.bodies[randIndex].moons);
    gravity = checkForNull(data.bodies[randIndex].gravity);
    discoveredBy = checkForNull(data.bodies[randIndex].discoveredBy);
    discoveryDate = checkForNull(data.bodies[randIndex].discoveryDate);
    bodyType = checkForNull(data.bodies[randIndex].bodyType);

    let arrayOfPlanetinfo = [
        name, englishName, moons, gravity, discoveredBy, discoveryDate, bodyType,
    ]
    return arrayOfPlanetinfo
}




// BUTTON LOGIC -------------------------------------------------------------------------------------------------------
var planetButton = document.getElementById('random-planet-btn');
planetButton.addEventListener("click", () => {
    if (jsonData) { // Check if jsonData is available
        let arrayReturnedFromfunc = data_thing(jsonData, checkForNull);
        // Main planet header change
        var planetName = document.getElementById('planet-header');
        planetName.innerHTML = arrayReturnedFromfunc[0];
        console.log(arrayReturnedFromfunc[0]);

        let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBXu7yjQ0FEsd3bq0XW6tGRjm2vxz-Z21A&cx=47464be6c0bb84052&searchType=image&q=${arrayReturnedFromfunc[0]}+planet`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Now you can access the data here
            const items = data.items; // Assuming items is the array you want
            console.log(items[0].image);
            document.getElementById("image").innerHTML = `<img class="planet-image" src="${items[0].image.thumbnailLink}" alt="Hopefully an image of the planet ${arrayReturnedFromfunc[0]}."/>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        // English planet name change
        var englishName = document.getElementById('english-name')
        englishName.innerHTML = arrayReturnedFromfunc[1];
        console.log(arrayReturnedFromfunc[1]);

        var moons = document.getElementById('moons');
        if (arrayReturnedFromfunc[2] == "Unknown") {
            moons.innerHTML = '0';
            console.log(arrayReturnedFromfunc[2]);
        } else {
        moons.innerHTML = arrayReturnedFromfunc[2].length;
        console.log(arrayReturnedFromfunc[2].length);
        }
        
        var gravity = document.getElementById('gravity');
        if (arrayReturnedFromfunc[3] == 'Unknown') {
            gravity.innerHTML = arrayReturnedFromfunc[3];
            console.log(arrayReturnedFromfunc[3]);
        } else {
        gravity.innerHTML = arrayReturnedFromfunc[3] + '(N)';
        console.log(arrayReturnedFromfunc[3] + '(N)');
        }

        var discoveredBy = document.getElementById('discovered-by');
        discoveredBy.innerHTML = arrayReturnedFromfunc[4];
        console.log(arrayReturnedFromfunc[4])
        
        var discoveryDate = document.getElementById('discovery-date')
        discoveryDate.innerHTML = arrayReturnedFromfunc[5];
        console.log(arrayReturnedFromfunc[5])

        var bodyType = document.getElementById('body-type');
        bodyType.innerHTML = arrayReturnedFromfunc[6];
        console.log(arrayReturnedFromfunc[6])

    } else {
        console.log("Data not loaded yet.");
    }
})
