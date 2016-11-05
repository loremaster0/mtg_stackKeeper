// gobal variables
var theStack = []; //master array

// add-to-stack function
var addToStack = function () {
	//read input form
	var inputName, inputControl, inputNotes;
	inputName = $("#itemName").val();
	inputControl = $("#itemControl").val();
	inputNotes = $("#itemNotes").val();
	
	//check for errors
	if (inputName != "") {
		if (inputControl != "") {
			if (inputNotes != "") {
				console.log("Adding to Stack!");
				console.log(theStack);
				theStack.unshift([inputName, inputControl, inputNotes]);
				console.log(theStack);
				$("#itemName").val("");
				$("#itemControl").val("");
				$("#itemNotes").val("");
				return true;
			} else {
				//EEROR: no notes
				console.log("ERROR - No Notes");
				alert("No Notes!");
				$("#itemNotes").focus();
				return false;
			}
		} else {
			//ERROR: no controller
			console.log("ERROR - No Controller");
			alert("No Controller!");
			$("#itemControl").focus();
			return false;
		}
	} else {
		//ERROR: no name
		console.log("ERROR - No Name");
		alert("No Nmae!");
		$("#itemName").focus();
		return false;
	}
}

// resolve-top-layer-stack function

// full-clear-stack function
var fullClear = function () {
	console.log("Full clear stack!");
	console.log(theStack);
	theStack.splice(0, theStack.length);
	console.log(theStack);
	$("#itemName").val("");
	$("#itemControl").val("");
	$("#itemNotes").val("");
}

// stack-display function

// jquery-doc-ready function
$(document).ready(function() {
	$("#itemName").focus();
	$("#stackAdd").click(addToStack);
	$("#stackClear").click(fullClear);
});