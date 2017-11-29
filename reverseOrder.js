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

console.log(reverseString("popcorn"));