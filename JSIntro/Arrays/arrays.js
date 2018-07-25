//Intro example
// var friends = ["Charlie", "Liz", "David", "Mattias"];
// console.log(friends[0]);
// friends[1] + " <3 " + friends[2];


// initializing arrays:
// var friends = []; //no friends
// var friends = new Array() //uncommon, almost like a function


//Arrays can hold any type of data
// var random_collection = [49, true, "Hermione", null];


//Arrays have a LENGTH property
// var nums = [45, 37, 89, 24];
// nums.length; //4


//Built-in METHODS for Arrays
//arrayName.push(value); 
// var colors = ["red", "orange", "yellow"];
// colors[3] = "green"; //adds green to array
// colors.push("blue"); //adds blue to end of array
// colors = ["red", "orange", "yellow", "green", "blue"];

// //arrayName.pop(); returns/removes the last item in array
// colors.pop(); //removes blue
// colors = ["red", "orange", "yellow", "green"];

//arrayName.unshift(value);
//add value to the beginning of the array

//arrayName.shift();
//removes the first element of array

//arrayName.indexOf(valueToFind);
//return the FIRST index (integer) of valueToFind
//if -1, element is NOT present

//arrayName.slice(startIndex, endIndex);
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(1,3);
// citrus = ["Orange", "Lemon"];
//NOT inclusive
//orginal array is NOT altered;

//arrayName.slice() - copies a whole new array