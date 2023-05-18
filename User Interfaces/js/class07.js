
let elemBody = document.getElementsByTagName("body")[0];
let idCopyright = document.getElementById("copyright");

// change body bg
elemBody.style.backgroundColor = "#dddddd";
//	body{	background-color: #dddddd; }
//	css selector in Camel Case (css: background-color js: backgroundColor 
elemBody.style.fontFamily = "monospace"

idCopyright.style.color = "red";

idCopyright.innerHTML += " <strong>Hello</strong>";
//idCopyright.innerText += " <strong>Hello</strong>";

/* CREATE DOM ELEMENTS */

// create the html element
let newImg = document.createElement("img");
// set attributes
newImg.src = "https://picsum.photos/id/987/300/50";
newImg.alt = "Random Photo";
newImg.id = "imgNewRandom"
// add to dom tree
document.getElementById("copyright").appendChild( newImg );

// create the html element
let newLink = document.createElement("a"); 

// set the attributes
newLink.setAttribute("href", "http://google.com");
newLink.setAttribute("target", "_blank");
newLink.style.cssText = "background-color:yellow; font-family:fantasy";
newLink.setAttribute("doesNotExist", "nothing to do");

// create the visible text
// newLink.innerText = "Click";
// better way
	let newLlinkText = document.createTextNode("Go Back Home")
	newLink.appendChild( newLlinkText );

// add it to the DOM tree
document.getElementById("nav").appendChild (newLink);



function dummyFunction(txtToShow = "Testing"){
	console.log(txtToShow);
}

function doImageSwap(){
	let d = new Date().getTime();
	document.getElementById("image1").src = "https://picsum.photos/120/120?1" + d;
	document.getElementById("image2").src = "https://picsum.photos/120/120?2" + d;
	document.getElementById("image3").src = "https://picsum.photos/120/120?3" + d;
	document.getElementById("image4").src = "https://picsum.photos/120/120?4" + d;
	document.getElementById("imgNewRandom").src = "https://picsum.photos/300/50?r" + d;
}

// event listeners
let formFirstName = document.getElementById("txtFirstName");
formFirstName.addEventListener("blur", firstNameDidBlur); // call the function firstNameDidBlur when the #txtFirstName blurs (loses focus, user clicks away)
formFirstName.addEventListener("keydown", firstNameKeyDown);

function firstNameDidBlur(e){
	console.log("blur");
	console.log(e);
	document.getElementById("txtEmail").focus();
}

function firstNameKeyDown(event){
	console.log( "keydown");
	console.log( event);
}


// prevent default
document.getElementById("btnSubmit").addEventListener("click", dontSubmitForm);

function dontSubmitForm(e){
	e.preventDefault(); // method of the event listener to stop the default action of the element that executed the function call

	// change the value of a form element
	document.getElementById("txtFirstName").value = "Hello";

	// disable a form element
	document.getElementById("txtEmail").disabled = true;
	
}