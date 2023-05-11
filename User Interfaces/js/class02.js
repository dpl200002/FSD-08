console.log("class02 start");
let number = 0;
/*
// while loop
while ( ( number += 2 ) <= 10){
	console.log(number);
	//number += 2;
}
*/

/*
// will return 1-6 because of the location of the incrementing number
while ( ( number++	 ) <= 100){
	console.log(100);
//	++number;
}
*/


/* SIMILAR OUTPUT SINGLE LINE
 if similar output are shown on single line with grey counter and you want on multiple lines
 click cog on console and select (or unselect) "Group similar messages in console" *//*
while ( ( number++	 ) <= 100){
	console.log(100);
//	++number;
}*/

/*
// VARIABLE SCOPE

let yVar = "global"; // Declare a global variable 
let xVar = "global"

function checkscope( ) {
	let yVar = "local";	// let used to declare local variable
	xVar = "local"; // Without let, the global variable is used
	console.log("y: " + yVar + " x: " + xVar);
	yVar = "local2";
	xVar = "local2";
	console.log("y: " + yVar + " x: " + xVar);
}
*/



/**
 * Shows username
 */
function myNameIs(){
	console.log("My Name is: ");
	console.log("Stephanie");
	console.log("Moreau");
}

/**
 * Shows user their full name
 * @param {string} fullName - users full name
 */
function myName(fullName){
	console.log("My Name is: " + fullName);
}

/**
 * Shows the user their first and last name
 * @param {string} fName - the first name 
 * @param {string} lName - the last name
 */
function myFullName(fName, lName){
	console.log("My Full Name is: " + fName + " " + lName);

	myName(lName + ", " + fName);
}

// optional parameters
/**
 * Show users their names
 * @param {string} fName - Users first name
 * @param {string} [lName=null] - Users last name
 */
function userName(fName, lName = null){

	if (lName === null){
		console.log("You have no last name");
	}
	else  
	console.log("user: " + fName + " -" + lName + "-");
}

/**
 * Returns the users full name
 * @param {string} fName - users first name
 * @param {string} lName - users last name
 * @returns {(null|string)} the concatenated full name
 */
function returnUserName(fName, lName = null){
	console.log("Hello");
	if (lName === null)
		return null;
	else  
	 return fName + " -" + lName + "-";

}

let username = returnUserName("Steph", "Moreau");
