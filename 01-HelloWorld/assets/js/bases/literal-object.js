let character = {
    name: "Tony Stark",
    codeName: "Ironman",
    isAlive: false,
    age: 40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    suits: [
        "Mark I", 
        "Mark V", 
        "Hulkbuster"
    ],
    address:{
        zip: "10880, 90265",
        location: "Malibu, California"
    },
    'last-Movie': "Infinity War"
}
console.log(character);
console.log("Name:", character['name']); //Name of the character
console.log("Age:", character['age']); //Age of the character
console.log("Coords:", character['coords']); //Coords of the character
console.log("Latitude:", character['coords']['lat']); //Latitude of the character
console.log("No. of suits:", character['suits'].length); //Number of suits
console.log("Last suit:", character['suits'][character['suits'].length - 1]); //Last suit
console.log("Last Movie:", character['last-Movie']); //Last movie