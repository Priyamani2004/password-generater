let rangevalue = document.getElementById("rangevalue");
let password = document.getElementById("password");
let word = document.getElementById("copied");
let box1 = document.getElementById("one");
let box2 = document.getElementById("two");
let box3 = document.getElementById("three");
let box4 = document.getElementById("four");

function rangevalues(value) {
	rangevalue.innerText = value;
}

let Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let Symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "/", "?", ">", "<"];


function first() {
	box1.style.backgroundColor = "";
	box2.style.backgroundColor = "";
	box3.style.backgroundColor = "";
	box4.style.backgroundColor = "";
	word.style.display = "none";

	let ans = [];
	let result = "";
	let firstcheck = document.getElementById("firstcheck").checked;
	let secondcheck = document.getElementById("secondcheck").checked;
	let thirdcheck = document.getElementById("thirdcheck").checked;
	let fourthcheck = document.getElementById("fourthcheck").checked;
	retVal = "";
	if (firstcheck == true) {
		ans.push(1)

	}
	if (secondcheck == true) {
		ans.push(2)
	}
	if (thirdcheck == true) {
		ans.push(3)
	}
	if (fourthcheck == true) {
		ans.push(4)
	}
	for (let i = 0; i < ans.length; i++) {
		console.log("a")
		if (ans[i] == 1) {
			retVal += Uppercase[Math.floor(Math.random() *Uppercase.length )];
			result += (Uppercase);
		}
		if (ans[i] == 2) {
			retVal += Lowercase[Math.floor(Math.random() *Lowercase.length )];
			result += (Lowercase);
		}
		if (ans[i] == 3) {
			retVal += Numbers[Math.floor(Math.random() *Numbers.length )];
			result += (Numbers)
		}
		if (ans[i] == 4) {
			retVal += Symbols[Math.floor(Math.random() *Symbols.length )];
			result += (Symbols)
		}
	}
	var length = rangevalue.innerText;
	for (var i = 0, n = result.length; i < length - ans.length; ++i) {
		let Value = result.charAt(Math.floor(Math.random() * n));
		if (Value != ",") {
			retVal += Value;
		} else {
			i -= 1;
		}
	}

	let strength = document.getElementById("para4");
	if (ans.length == 1) {
		box1.style.backgroundColor = "#F64A4A"
		box2.style.backgroundColor = "";
		box3.style.backgroundColor = "";
		box4.style.backgroundColor = "";
		strength.innerText = "TOO WEAK!";
	}
	if (ans.length == 2) {
		box1.style.backgroundColor = "#FB7C58"
		box2.style.backgroundColor = "#FB7C58"
		box3.style.backgroundColor = "";
		box4.style.backgroundColor = "";
		strength.innerText = "WEAK";
	}
	if (ans.length == 3) {
		box1.style.backgroundColor = "#F8CD65"
		box2.style.backgroundColor = "#F8CD65"
		box3.style.backgroundColor = "#F8CD65"
		box4.style.backgroundColor = "";
		strength.innerText = "MEDIUM";
	}
	if (ans.length == 4) {
		box1.style.backgroundColor = "#A4FFAF"
		box2.style.backgroundColor = "#A4FFAF"
		box3.style.backgroundColor = "#A4FFAF";
		box4.style.backgroundColor = "#A4FFAF";
		strength.innerText = "STRONG";
	}

	document.getElementById("password").innerHTML = retVal;

}

function copied() {
	word.style.display = "block";
	navigator.clipboard.writeText(password.innerText);
	hided();
}

function hided() {
	word.style.display = "none";
}
