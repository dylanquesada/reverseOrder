"use strict";

// function stringToArray(string){
// 	var stringArray = [stringlength];
// 	for (var i = 0; i > string.length; i++){
// 		stringArray[i] = string.charAt(i);
// 	}
// 	return stringArray;
// }

// var x = "cat";
// alert(stringToArray(x));
// // function reverseArray(array){
// // 	var newArray = [array.length];
// // 	for (var i = 0; i < array.length; i++) {
// // 	array.length

function reverseString(string){
	var original = string;
	let reversed = [];
	for (var i = 0; i < original.length; i++) {
		reversed[i] = original.charAt(original.length - i - 1);
	}
	return reversed.toString();
}


function concatonateArrayToCommalessString(array){
	var outputString = "";
	for (var i = 0; i < array.length; i++) {
		outputString = outputString.concat(array[i])
	}
	return outputString;

}
var array = ["x", "y", "z", 1];
var x = array[1].concat(array[2]);

// function removeCommasWithoutRemovingOriginalCommas(string){
// 	var original = string;
// 	for (var i = 1; i < original.length; i+=2) {
// 		commaless i]
// 	}
// }
console.log(reverseString("popcorn"));
console.log(x);
console.log(concatonateArrayToCommalessString(array));