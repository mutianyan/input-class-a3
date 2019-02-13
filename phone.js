
$(document).ready(function() { // do this when the document is loaded
	$("#tab-1").show(); // show the element with ID "element"
	$("#tab-2").hide(); // hide the element with ID "otherElement"
	$("#tab-3").hide(); // hide the element with ID "otherElement"
	$("#tab-4").hide();

$("#button-1").click(function() { // when "button_id" is clicked
	$("#tab-1").show(); // show element
	$("#tab-2").hide();	// hide other element
	$("#tab-3").hide();	// hide other element
	$("#tab-4").hide();
});


	$("#button-2").click(function() { // when "button_id" is clicked
	$("#tab-2").show(); // show element
	$("#tab-1").hide();	// hide other element
	$("#tab-3").hide();	// hide other element
	$("#tab-4").hide();

});


	$("#button-3").click(function() { // when "button_id" is clicked
	$("#tab-3").show(); // show element
	$("#tab-1").hide();	// hide other element
	$("#tab-2").hide();	// hide other element
	$("#tab-4").hide();

});


	$("#button-4").click(function() { // when "button_id" is clicked
	$("#tab-4").show(); // show element
	$("#tab-1").hide();	// hide other element
	$("#tab-2").hide();	// hide other element
	$("#tab-3").hide();
	
});



});




function changeColor(evt) {
  var i, tabcontent, tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

function addInput(val){
	if(val === -1){
		document.getElementById("inputBox").value = "";
	}else if (val === -2){
		document.getElementById("inputBox").value = "calling";
	}else{

	document.getElementById("inputBox").value += val;
	}	
	// document.write(x);
}









