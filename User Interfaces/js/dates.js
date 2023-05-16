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