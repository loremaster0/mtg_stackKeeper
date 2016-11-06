// gobal variables
var theStack = []; //master array

// add-to-stack function
var addToStack = function() {
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
				displayStack();
			} else {
				//EEROR: no notes
				console.log("ERROR - No Notes");
				alert("No Notes!");
				$("#itemNotes").focus();
			}
		} else {
			//ERROR: no controller
			console.log("ERROR - No Controller");
			alert("No Controller!");
			$("#itemControl").focus();
		}
	} else {
		//ERROR: no name
		console.log("ERROR - No Name");
		alert("No Name!");
		$("#itemName").focus();
	}
};

// resolve-top-layer-stack function
var resolveTopStack = function() {
	console.log("Resolved Stack Item!");
	console.log(theStack);
	theStack.shift();
	console.log(theStack);
	displayStack();
};

// full-clear-stack function
var fullClear = function() {
	console.log("Full clear stack!");
	console.log(theStack);
	theStack.splice(0, theStack.length);
	console.log(theStack);
	$("#itemName").val("");
	$("#itemControl").val("");
	$("#itemNotes").val("");
	displayStack();
};

// stack-display function
var displayStack = function() {
	if (theStack.length == 0) {
		// stack is clear
		$("#theStackList").html("-- Stack Clear --");
	} else {
		// stack has stuff in it
		var stackCode = ""; // variable holds the html code for the stack
		stackCode += "<p>\n";
		stackCode += "Spell\/Ability: " + theStack[0][0] + "<br>\n";
		stackCode += "Owner\/Controller: " + theStack[0][1] + "<br>\n";
		stackCode += "Note(s): " + theStack[0][2] + "<br>\n";
		stackCode += "<button id=\"resolveItem\">Stack Item Resolved<\/button>\n";
		stackCode += "<\/p>\n\n";
		if (theStack.length > 1) {
			for (var i = 1; i < theStack.length; i++) {
				stackCode += "<p>\n";
				stackCode += "Spell\/Ability: " + theStack[i][0] + "<br>\n";
				stackCode += "Owner\/Controller: " + theStack[i][1] + "<br>\n";
				stackCode += "Note(s): " + theStack[i][2] + "<br>\n";
				stackCode += "<\/p>\n\n";	
			}
		}
		$("#theStackList").html(stackCode);
		$("#resolveItem").click(resolveTopStack);
		$("#itemName").focus();
	}
};

// jquery-doc-ready function
$(document).ready(function() {
	console.log("Ready!");
	$("#itemName").focus();
	$("#stackAdd").click(addToStack);
	$("#stackClear").click(fullClear);
	$("#aboutApp").click(function() {
		alert("\"MTG - Stack Keeper\" coded by: Loremaster0");
	});
});