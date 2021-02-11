const baseURL = 'https://ghibliapi.herokuapp.com/locations/';
let url;
const section = document.querySelector('section'); //these variables are what we put in our HTML on where information will go
const submitBtn = document.querySelector('.submitBtn');//sets const of submitBtn to reach out to the HTML that has that class name

submitBtn.addEventListener('click', fetchResults);
   
function fetchResults(event) {   //getting the data
    console.log(event);
    event.preventDefault();
    
    let number = getRandom(23);
fetch(`${baseURL}`)
    .then(function (result) { //grabbing result from fetch   
      return result.json();  //turnign i tto JSON
    })
    .then(function (json) { //taking jsonified data and sending it to displayResults
      console.log(json)
      displayResults(json[number]) //we're taking the promise that we got and sending it to a new function to display the results
    });
}
console.log(`${baseURL}/locations/`)

function displayResults(json) {  // displaying the data
    
    while (section.firstChild) { //this clears the page from whatever was there before--no stacking
        section.removeChild(section.firstChild);
    } 
    let locations = json; //where we start digging into the object (outer layer)
    console.log(json);
   

    let name = document.createElement('h1');
    let climate = document.createElement('h3');
    let terrain = document.createElement('h3');


    name.textContent = `Name: ${json.name}`;
    section.appendChild(name);
        
    climate.textContent = `Climate: ${json.climate}`;
    section.appendChild(climate);
        
    terrain.textContent = `Terrain: ${json.terrain}`;
    section.appendChild(terrain);

}

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
