console.log("class 04 loaded.");
/* OBJECTS */

// create new object
let teacher = {
	firstName : "Steph",
	lastName:"Moreau",
	"hometown": "Montreal",
	"100Percent": "this is true",
	birthday: {month:05, day: 11},
	pets: ["cat", "dog"]
}

/* SOLAR SYSTEM */

planetEarth = {
	name: "Earth",
	numMoons: 1,
	diameter: 135000
}
planetMars = {
	name: "Mars",
	numMoons: 1,
	diameter: 120000,
	description : function(){
		console.log(this.name + " has " + this.numMoons + " moons");
	}
}


function Planet(argName,argNumMoons, argDiameter){

	this.name = argName;
	this.numMoons = argNumMoons;
	this.diameter = argDiameter;
	this.area;

	this.description = function(){
		console.log(this.name + " has " + this.numMoons + " moons")
	}

	this.calcArea = function(randomNum = 0) {
		let newArea = this.diameter * Math.PI + randomNum;
		this.area = newArea;
		return newArea;
	}

	this.calAreaDuplicate = this.calcArea(23);

	// another anonymous function (lambda function)
	this.avgMoons = () => {
		// calculation
		console.log("Average moon count");
	}

}
planetMercury = new Planet("Mercury", 3, 80000);


function loopObject(objTemp){
	for (let index in objTemp){
		console.log("The Key: '" + index + "' has the value " + objTemp[index])
	}
}