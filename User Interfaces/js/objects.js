// Cash Register Example
let cartForParty = {
	banana: 1.25,
	handkerchief: .99,
	Tshirt: 25.01,
	apple: 10.60,
	nalgene: 10.34,
	proteinShake: 22.36
	};

function cashRegister(objTemp){
	let total = 0;
	for (let index in objTemp){
		total += objTemp[index];
	}

	return total;
}

let cartTotal = cashRegister(cartForParty);
// 60.55​



// FDS example
var FSD = {
	languages: ["JavaScript", "Java", "HTML"],
	isHard: false,
	difficulty: 2,
	teacher: "John",
};

//Write the command to add the language “PHP” to the end of the languages array. 
//FSD.languages[FSD.languages.length] = "PHP";
FSD.languages.push("PHP"); // better solution

// Change the difficulty to the value of 5. 
FSD.difficulty = 5;

// Using the delete keyword, write the command to remove the teacher key from the object. 
delete FSD.teacher;

// Write the command to add a new key called isFun and a value of true to the object.
FSD.isFun = true;

// Create the function listLanguages that will use a loop to iterate through the languages array and console.log each. 
// as a function
function listLanguges(){
	for (let x in FSD.languages){
		console.log(FSD.languages[x]);
	}
}
// as a method
FSD.listLanguages = function(){
	for (let i in this.languages){
		console.log(this.languages[i]);
	}
}

function fsdLoops(){
	// Using a loop, console.log all of the keys in the object. 
	for (let k in FSD){
		console.log(k);
	}

	// Using a loop, console.log all of the values in the object. 
	for (let v in FSD){
		console.log(FSD[v]);
	}
}


// Library Example
//Write a JavaScript function to display the reading status of the following books
// Already read 'The Road Ahead' by Bill Gates.​
// Already read 'Walter Isaacson' by Steve Jobs.​
// You still need to read 'The Hunger Games' by Suzanne Collins.

let library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: false
	},
	{
		author: 'Suzanne Collins',
		title: 'The Hunger Games',
		readingStatus: true
	}
];

function bookStatus(objTmp){
	for(let l in objTmp){ // loop each book object
//		console.log(objTmp[l]);
		let status = "";

		if (objTmp[l].readingStatus == true){ // true - book is read
			status += "Already Read";
		} else { // false - book not read
			status += "You still need to read";
		}

		status += " '" + objTmp[l].title + "' by " + objTmp[l].author + ".";
		console.log(status);
	}

}