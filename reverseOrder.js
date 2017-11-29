"use strict";



function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}

function reverseString(string){
	var original = string;
	let reversed = [];
	for (var i = 0; i < original.length; i++) {
		reversed[i] = original.charAt(original.length - i - 1);
	}
	return reversed;
}


function concatonateArrayToCommalessString(array){
	var outputString = "";
	for (var i = 0; i < array.length; i++) {
		outputString = outputString.concat(array[i])
	}
	return outputString;

}

function runReverseOrder(string){
	var finalProduct = userInput();
	finalProduct = reverseString(finalProduct);
	finalProduct = concatonateArrayToCommalessString(finalProduct);
	alert(finalProduct);
	return finalProduct;
}


console.log(runReverseOrder());