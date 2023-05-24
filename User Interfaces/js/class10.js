
/**
 * 
 */
function doXHR(){
	// CREATE xmlhttprequest
	let xhr = new XMLHttpRequest();

	// OPEN
	xhr.open("GET", "title.txt");

	// SEND
	xhr.send();

	// LISTEN
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4){ // request DONE
			console.log(xhr);
			console.log("process stuff");
			if (xhr.status == 200){ // HTTP success
				document.getElementById("welcome").innerHTML = xhr.responseText;
			}
		}
		
	}
}



// Approx the result of $(targetId).load(url);
function doXHRLoad(targetId, srcUrl){
	// CREATE xmlhttprequest
	let xhr = new XMLHttpRequest();

	// OPEN
	xhr.open("GET", srcUrl);

	// SEND
	xhr.send();

	// LISTEN
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4){ // request DONE
			console.log(xhr);
			console.log("process stuff");
			if (xhr.status == 200){ // HTTP success
				document.getElementById(targetId).innerHTML = xhr.responseText;
			}
		}
		
	}
}