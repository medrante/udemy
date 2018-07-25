console.log("CONNECTED");
// printReverse([array]);
// print array in reverse order, don't revert the array itself
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([1,2,3,4,5]);

// 2) isUniform([array]);
// returns true if all elements in the array are identical
function isUniform(arr){
  var first = arr[0];
  var res = true;
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
      return false;
    }
  }
  return res;
}

// 3) sumArray([array]);
// returns sum of array
function sumArray(arr){
  var sum = 0;
  arr.forEach(function(element){
    sum += element;
  });
  return sum;
}

// 4) maxArray([array]);
// returns max element of array

function maxArray(arr){
  var max = arr[0];
  arr.forEach(function(element){
    if (element > max){
      max = element;
    }
  });
  return max;
}

// arr.forEach(someFuncion) example
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
  //color is just a placeholder for the element
  console.log(color);
});