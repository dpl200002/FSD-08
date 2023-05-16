let randomNum = "2020e";

parseFloat(23);
parseFloat("34.3123123");
parseFloat(3141.444444);
parseFloat(true);	// NaN
parseFloat("3.12Hello"); //3.12
/*
if (!isNaN(parseFloat(randomNum)) && (parseFloat(randomNum) === randomNum) )
	console.log("float number")
else
	console.log("not a number")
*/

	/* DATE */
function showD(){
	//console.log(d);
}
Date.now(); // current unix timestamp
Date.parse("May 5 2020");	//	1588651200000
Date.parse("May 5 2020 3:30");	//	1588663800000
Date.parse("May 5 2020 17:30");	//	1588714200000

let d = new Date();
showD(d);

d= new Date("May 5 2020 3:30");
showD();

d = new Date(2024, 4, 11, 23, 27, 34, 998);
showD();

d = new Date(1588714200000);
showD(d);


console.log(d.getFullYear());


/* RECURSON */
// 5!
// 5*4*3*2*1

function factorial(num){
	if (num <= 1)
		return 1;
	else
		return num * factorial(num-1);
}


// FIBONACCI - 0 1 1 2 3 5 8 13 21