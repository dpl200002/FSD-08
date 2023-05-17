/*
Create a function that once activated prompt a user for:
person’s name
adjective
event

Make sure they supplied a valid string
Input was not empty and not cancelled

Once all 3 questions have been answered alert the user of their personal MadLib which should have the following format:

Please Excuse ___PERSON NAME___  who is too cool for ____ADJECTIVE____ class, they will be at the __EVENT__ instead. 
*/


/**
 * Prompt user and show them a madlib
 */
function madlibs2(){
	// prompt for name
	let person, adjective, event;
	do{
		person = prompt("Enter a person's name:");
	} while(person === null || person.trim() == "")
		// user pressed cancel OR empty string

	// prompt for adjective
	do{
		adjective = prompt("Enter an adjective:");
	} while(adjective === null || adjective.trim() == "")
		// user pressed cancel OR empty string

	//prompt for event
	do{
		event = prompt("Enter an event:");
	} while(event === null || event.trim() == "")
		// user pressed cancel OR empty string

	// alert madlib
	alert("Please Excuse " + person + " who is too cool for " + adjective + " class, they will be at the " + event + " instead.");
}

/**
 * Prompt user and show them a madlib using function
 */
function madlibs(){
		
	let person = promptUser("Enter a person's name:");	// prompt for name
	let adjective = promptUser("Enter an adjective:");	// prompt for adjective
	let event = promptUser("Enter an event:");	//prompt for event

	// alert madlib
	alert("Please Excuse " + person + " who is too cool for " + adjective + " class, they will be at the " + event + " instead.");
}

/**
 * Prompt user and show them a madlib using arrays
 */
function madLibs3(){

	let arrQuestion = ["Enter a person's name:", "Enter an adjective:", "Enter an event:"];
	let arrAnswers = [];
	
	for(let q in arrQuestion){
		arrAnswers[q] = promptUser( arrQuestion[q] );
	}

	// alert madlib
	alert("Please Excuse " + arrAnswers[0] + " who is too cool for " + arrAnswers[1] + " class, they will be at the " + arrAnswers[2] + " instead.");

}

/**
 * Prompt user and validate the input
 * @param {string} question 
 * @returns {string}
 */
function promptUser( question ){
	let ans;
	do{
		ans = prompt( question );
	} while(ans === null || ans.trim() == "")
		// user pressed cancel OR empty string

	return ans;
}