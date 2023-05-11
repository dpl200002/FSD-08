console.log("loops.js loaded");

/*
1. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
2. For numbers divisible by 3, print "Fizz" instead of the number, 
3. and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
/*
for (let i = 1; i <= 100; i++) {
	if ( ( i % 3 ) == 0)
		console.log("Fizz");  // PART 2
	else if ( ( i % 5) == 0 )
		console.log("Buzz");	// PART 3
	else
		console.log(i); // PART 1

	if ((i % 3) != 0 && (i % 5) != 0) {
		console.log(i); // PART 1
		continue; // continue could help make it more efficient
	} 

	if ((i % 3) == 0)
		console.log("Fizz");  // PART 2

	if ((i % 5) == 0 && (i % 3) != 0)
		console.log("Buzz");	// PART 3
}
*/
/*
let x = 0;
while ( ++x <= 100){
	if ( (x % 3 ) == 0 ){
		console.log("Fizz");
	} else if ( ( x % 5 ) == 0 ){
		console.log("Buzz");
	} else{
		console.log( x );
	}
}*/

for (let i = 1; i <= 100; i++) {
	/*
	if (( i % 3 ) == 0 &&  ( i % 5) == 0)
		console.log("FizzBuzz");
	else if ( ( i % 3 ) == 0)
		console.log("Fizz");  // PART 2
	else if ( ( i % 5) == 0 )
		console.log("Buzz");	// PART 3
	else
		console.log(i); // PART 1
		*/

		let output = "";
		if ( (i % 3) == 0){
			output += "Fizz";
		}
		if ( (i % 5) == 0){
			output += "Buzz";
		}
	
		if (output == ""){
			output = i;
		}
		console.log(output);

	// console.log ( (output=="") ? i : output );
}