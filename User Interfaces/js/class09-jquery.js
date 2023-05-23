console.log("09 jQuery");

$(document).ready(function(){

	// Ensures all DOM elements are loaded = we can manipulate them

	$("h2").css("color", "green");

	//$(".homeLink, img").css("border", "2px solid red");

	// function called can be anywhere
	// $("#btnSubmit").click(function(){ console.log("clicked"); }); // anonymous
	// $("#btnSubmit").click( btnClickOccured); // outside jquery ready
	// $("#btnSubmit").click( btnClickOccuredAgain); // inside jquery ready

	$("#btnSubmit").on("click", function(){ console.log("clicked"); });
	$("#btnSubmit").on("click", btnClickOccured); // outside jquery ready
	$("#btnSubmit").on("click", btnClickOccuredAgain); // inside jquery ready

	function btnClickOccuredAgain(){
		console.log("more clicking");

	}
	
	$("p.notExist").on( "mouseenter", function(){
		// when i hover on - what do i do?
		//$(this).css("font-weight", "bold");
		$("em").toggle(800, btnClickOccured);
	} ).on( "mouseleave", function(){
		// when i unhover - do what?
		$(this).css("color", "honeydew");
		document.getElementById("frmUser").style.backgroundColor = "red";
	});


	$("label").each( function(){

		// $(this).append("--");
		// $(this).prepend("**");
		// $(this).css("color", "orange");
		
		// CHAIN
			$(this).append("-!-").prepend("**").css("color", "orange");
	});

	$("a").on("mouseenter", anchorHoverOn).on("mouseleave", anchorHoverOff).on("click", anchorClick);

	function anchorHoverOn(){
		console.log("hover on");
	}

	function anchorHoverOff(){
		console.log("hover off");
	}

	function anchorClick(){
		$(this).preventDefault;
		console.log("click anchor " + $(this).text() );
	}

	let newInput = $("<input>").attr("type", "number").attr("name", "uAge").attr("id", "newNum").val(23);
	// let newInput = $("<input type='number' name='uAge' id='newNum' value='24'>");

	$("#frmUser").prepend(newInput);
});

function btnClickOccured(){
	console.log("click click click");
}

