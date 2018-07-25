// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("How old are you?");

// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " years old");

// Conditionals Exercise
// var age= prompt("What is your age?");

// if (age < 0){
// 	console.log("You're not even a baby yet!");
	
// } else if(age === 21){
// 	alert("Happy 21st Birthday!");
// }

// if (age % 2 != 0){
// 	console.log("Your age is odd");
// }

// if (age % Math.sqrt(age) === 0 ) {
// 	console.log("Your age is a perfect square!");
// }

console.log("Number 1");
var number1 = -10;

while (number1 <= 19){
	console.log(number1);
	number1++;
}

console.log("Number 2");
var number2 = 10;
while (number2 <= 40){
	if(number2 % 2 == 0){
			console.log(number2);
		}
	number2++;
}

console.log("Number 3");
var number3 = 300;
while (number3 <= 333){
	if (number3 % 2 != 0){
			console.log(number3);
		}
	number3++;
}

console.log("Number 4");
var number4 = 5;
while (number4 <= 50){
	if(number4 % 5 == 0 && number4 % 3 == 0){
		console.log(number4);
	}
	number4++;
}