// double quotes and single quotes are interchangable 
let str;
str = "Hello World!";
str = 'I am Steph "The Teacher" Moreau';
str = "I am Steph \"The Teacher\" Moreau";

// Arrays
//let dogs = ["Pug", "Poodle", "Huskie", "Beagle"];

let dogs = ["Pug", "Poodle"];

// add item to start
dogs.unshift("Jack Russel");
// return new array length 

dogs.unshift("Labrador", "Huskie"); // returns 5
//['Labrador', 'Huskie', 'Jack Russel', 'Pug', 'Poodle']

// remove item from start
dogs.shift(); // return removed item "Labrador"
// ['Huskie', 'Jack Russel', 'Pug', 'Poodle']

// add item at end of array
dogs.push("Labradoodle");
// return new length 

dogs.push("Pincher", "Rottweiller"); // return new lenght
//  ['Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle', 'Pincher', 'Rottweiller']
dogs.length // 7

// remove last item from array
dogs.pop(); // return removed item 'Rottweiller'

dogs.pop();// returns 'Pincher'


let newArr = dogs.concat(dogs);
// ['Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle', 'Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle']

newArr = dogs.concat("wee");
//  ['Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle', 'wee']

newArr = dogs.concat("abc", 23);
// ['Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle', 'abc', 23]

newArr = dogs.concat(dogs, "beagle");
// ['Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle', 'Huskie', 'Jack Russel', 'Pug', 'Poodle', 'Labradoodle', 'beagle']


// convert array into string
dogs.join()
// Huskie,Jack Russel,Pug,Poodle,Labradoodle
dogs.join("-");
// Huskie-Jack Russel-Pug-Poodle-Labradoodle
dogs.join("");
// HuskieJack RusselPugPoodleLabradoodle

// add /remove to middle or array 
dogs[5] = "Labrador";
dogs.splice(2, 3, "Huskie");	
dogs.splice(1, 0, 23, []);


// LOOPS
let cats = ["tabby", "Siemese", "Black"];

let pets = [dogs, cats];

function loopForDogs(){
	for (let i = 0; i < dogs.length; i++){
		console.log("i: " + i + " = " + dogs[i]);
	}

	for (let x in dogs){
		console.log("x: " + x + " = " + dogs[x]);
	}
}


function loopCatsDogs2d(){
	for (let i = 0; i < pets.length; i++){
		console.log("PETS: " + i + " = " + pets[i]);
		for (let y = 0; y < pets[i].length; y++ ){
			console.log("PETS: " + i + "CHILD: " + y + " = " + pets[i][y]);
		}
	}

	for (let x in pets){
		console.log("PETS: " + x + " = " + pets[x]);
		for (let y in pets[x]){
			console.log("PETS: " + x + " CHILD: " + y + " = " + pets[x][y]);
		}
	}
}


function loop3d(){

	// 3-dimentional array - rare
	pets[2] = [["spike","sparky","rex"], ["midnight","jet","Fluffy"]];
	for (let x in pets){
		//console.log("PETS: " + x + " = " + pets[x]);
		for (let y in pets[x]){
			//console.log("PETS: " + x + " CHILD: " + y + " = " + pets[x][y]);
			if (typeof pets[x][y] != "string")
			for (let z in pets[x][y]){
				console.log("P:" + x + " C:" + y + " N = " + pets[x][y][z]);
			}
		}
	}
}
