// let arr = [4, 8, 7, 13, 12]

// let sum = arr.reduce(function (x, y) {
// 	return x + y;
// }, 0);

// console.log("Sum using Reduce method: " + sum);

function addNumbers() {
	let numbersInput = document.getElementById('numbersInput').value;
	let numbersArray = numbersInput.split(',').map(Number); 
	let sum = numbersArray.reduce(function(a, b) {
		return a + b;
	}, 0);
	document.getElementById('sumResult').value = sum;
}