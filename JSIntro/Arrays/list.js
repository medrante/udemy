var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");


while (input !== "quit"){
	//handle input
	if (input === "list") {
		listTodos();
	} else if (input === "new"){
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	}

	//ask for new input
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " +todo);
	});
	console.log("**********");
}

function addTodo(){
	//as for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Todo has been added");
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete todo using splice()
	todos.splice(index,1);
	console.log("Todo has been deleted");
}




//to go through each item in the array
//arr.forEach(function(variable)){
	//some action;
	//variable holds the value for each element in the array;
//}

//example
// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var color = ["red", "orange", "yellow", "green"];

// number.forEach(funciton(Color){
// 	if(color % 3 === 0){
// 		console.log(color);
// 	}
// })

//Array.forEach - takes at least 1, but up to 3 arguments:
// 1 - each element on array that .forEach was called on
// 2 - index of element
// 3 - represents array that .forEach was called on
// [1,2,3].forEach(function(el, i, arr){
// 	console.log(el, i, arr);
// });

