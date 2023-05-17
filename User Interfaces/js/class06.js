// timers

/* Timeout executes only once after delay */

// sayHello function will be called in 5 seconds
//let timerId = setTimeout(sayHello, 5000);
// timerId allows to cancel the timer

function sayHello(){
 	console.log("Hello!");
}

// log to console in 2 seconds
//setTimeout( () => { console.log("Bye"); }, 2000);


function cancelTimer(){
	clearTimeout(timerId);
}

function setupTimer(person){
	setTimeout(sayHelloPerson, 2000, person);
}

function sayHelloPerson(firstName){
	console.log("Hello " + firstName);
}

/* INTERVAL - keeps going until it is cancelled */

let intervalId; 
function startInterval(){
	intervalId = setInterval(sayHello, 1500);
}




// setInterval(()=>{ console.log("interval")}, 1000);
// setTimeout( ()=>{ console.log("timeout")}, 1000 );



/* DOM - Document Object Model  */

document.getElementsByTagName("p")
	// HTMLCollection(3) [p, p.txtBlue, p]
document.getElementsByTagName("h1")
	// HTMLCollection [h1.txtBlue]
document.getElementById("welcome").innerHTML = "Welcome everybody"
	// change the hmtm inside the element
document.getElementById("welcome");
	//	<h2 id=​"welcome">​…​</h2>​
document.getElementById("welcome").innerHTML = "Welcome <Strong>everybody</strong>"
	// 'Welcome <Strong>everybody</strong>'
document.getElementById("welcome").innerHTML = "Welcome <em>everybody</em>"
	//	'Welcome <em>everybody</em>'
document.getElementById("welcome");
	//	<h2 id=​"welcome">​…​</h2>​"Welcome "<em>​everybody​</em>​</h2>​
document.getElementById("welcome").innerText = "Welcome <em>everybody</em>"
	//	'Welcome <em>everybody</em>'; // LITERAL <em></em>

document.getElementsByClassName("txtBlue");
	//	HTMLCollection(2) [h1.txtBlue, p.txtBlue]
	document.getElementsByClassName("txtBlue")[0].innerHTML = "Howdy!";
	//	'Howdy!'
document.getElementsByClassName("txtBlue").innerHTML = "Howdy!";
	// 'Howdy!'
document.getElementsByClassName("txtBlue").innerHTML = "Howdy Y'all!";
	// "Howdy Y'all!"


function ninjaDogs(){
	let allParagraphs = document.getElementsByTagName("p");
	for (let p in allParagraphs){
		allParagraphs[p].innerHTML = "Ninja dog takeover";
	}
}

document.querySelector("h2 span")
	//	<span>​page​</span>​
document.querySelector("p")
	//	<p>​…​</p>​ // only the first P elemetn on on the page
document.querySelectorAll("p")
	//	NodeList(3) [p, p.txtBlue, p]


document.getElementById("googleLink").href = "http://yahoo.ca";
	// change href to 'http://yahoo.ca'
document.getElementById("googleLink");
	//	<a href=​"http:​/​/​yahoo.ca" id=​"googleLink">​Go to google​</a>​
document.getElementById("googleLink").innerText = "Go to Yahoo";
	//	set inner to 'Go to Yahoo'
document.getElementById("googleLink").target = "_blank";
	// add target attribute and set to '_blank'
document.getElementById("googleLink");
	//	<a href=​"http:​/​/​yahoo.ca" id=​"googleLink" target=​"_blank">​Go to Yahoo​</a>​
document.getElementById("googleLink").id = "yahooLink";
	// change id attribute 'yahooLink'
document.getElementById("googleLink");
	// id wa changed so it no longer exists in the DOM 
document.getElementById("yahooLink");
	// <a href=​"http:​/​/​yahoo.ca" id=​"yahooLink" target=​"_blank">​Go to Yahoo​</a>​

