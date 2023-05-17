console.log("dates.js has loaded");
/* COMPLETE THE FOLLOWING FUNCTIONS 
daysInMonth(month, year)
Write a function to get the number of days in a month

isWeekend(date)
Write a function to test whether a date is a weekend.

lastDay(month, year)
Write a function to get the last day of a month

daysSince()
find the number of days between today and 1 Jan 2017

whatMyDate(seconds)
Write a functions to display what date it will be in X seconds
 
*/

/**
 * Some sample test to verify your functions 
 */
function testDates(){
	console.log( daysInMonth(11, 2018) ); //30
	console.log( daysInMonth(2, 2000) );  //29

	console.log( isWeekend("Nov 20 1992") );  //false
	console.log( isWeekend("2019-07-14") );   // true

	console.log( lastDay(11, 2018) );  // Friday
	console.log( lastDay(02, 2000) );  // Tuesday

	console.log( daysSince() ); // ~ 2326
	console.log( whatMyDate( 23686198 ) );
		// ~ Wed Feb 14 2024 16:36:08 GMT-0500 (Eastern Standard Time)
}

/**
 * Get the number of days in a month
 * @param  {number} month
 * @param  {number} year
 * @return {number}
 */
function daysInMonth(month, year){
	let d = new Date(year, month, 0); // setting day to 0 gives you the number of days in the previous month
	return d.getDate();
}

/**
* Test whether a date is a weekend
* @param {Date} testDate
* @return {boolean}
*/
function isWeekend( testDate ){
	let d = new Date( testDate );
	return ( d.getDay() == 0 || d.getDay() == 6 )
}

/**
* Get the last day of a month
* @param {number} month
* @param {number} year
* @return {string}
*/
function lastDay(month, year){
	let d = new Date(year, month, 0);
	let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return dayNames[ d.getDay() ];
}

/**
* The number of days between today and 1 Jan 2017
* @return {number}
*/
function daysSince(){
	let dateSince = new Date(2017, 0, 1);
	let dateNow = new Date(); // today
	let diffInMs = dateNow.getTime() - dateSince.getTime();
	return ( diffInMs / 1000 / 60 / 60 / 24 ); //  ms / s / m / d
}

/**
* Display what date it will be in X seconds
* @param {number} secondsToAdd
* @returns {Date}
*/
function whatMyDate( secondsToAdd ){
	let dateNow = new Date();
	let seconds = dateNow.getTime() + secondsToAdd * 1000 ; // ms
	let resultingDate = new Date(seconds);

	return resultingDate;
	// return new Date((new Date()).getTime() + secondsToAdd * 1000 ); // as a single line, we can do it, but complicated reading the code
}
