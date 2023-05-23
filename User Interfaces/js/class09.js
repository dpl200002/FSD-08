

let lName = document.getElementById("txtLastName").value;

//radio buttons
//let radios = document.getElementsByName('married');
//let radios = document.querySelectorAll("input[name=married]")
let radios = document.getElementsByClassName('radMarried');
let radioValue;


document.getElementById('btnSubmit').addEventListener('click', btnClick);
document.getElementById('frmUser').addEventListener('submit', formSubmit);

function btnClick(e){
	lName = document.getElementById('txtLastName').value;

	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			radioValue = radios[i].value;
			break; // since only ever 1 radio is checked – leave the loop​
		}
	}

}

function selectNewItem(){
	document.getElementById('chkNews').checked = ""; // uncheck

	document.getElementById('rMno').checked = "checked"; // check the No

}

function validForm(info){ // function name can be anything
	console.log("submit form " + info);
	if (document.getElementById('chkTerms').checked == ""){
		alert("You need to accpet the terms");
		return false;
	}

	else return true;
}

function formSubmit(e){ 

	// using event listener

	console.log("event listener form ");
	if (document.getElementById('chkTerms').checked == ""){
		e.preventDefault();
		alert("You need to accpet the terms!!!");
		
	}

	

}