'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
var planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"
var newPlanetlist = planetList.splice(5, 0, 'Saturn');
console.log(planetList);
function putSaturn(planets) {
    planets.splice(5, 0, "Saturn");
    return planets;
}
console.log(putSaturn(planetList));
