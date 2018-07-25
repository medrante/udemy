/* 
// initializing objects (use when you want to attach properties to items in a list)
//make an empty object, then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA"; 
*/

/* 
//all at once
var person = {
  name: "Travis",
  age: 21,
  city: "LA"
}; 
*/

/* 
//another way to initialize Object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA"; 
*/

/* 
// objects in arrays
var posts = [
  {
    title: "Cats are mediocre",
    author: " Colt",
    comments: ["Awesome post", "Terrible post"]
  },
  {
    title: "Cats are actually awesome",
    author: "Cat luvr",
    comments: ["<3", "I hate you"]
  }
]

// to access the title of the first object
console.log(posts[0]["title"]);

//to access "I hate you" comment:
console.log(posts[1]["comments"][1]);
*/

/* 
// small exercise
var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
}

console.log(someObject["friends"][0]["name"]);
 */

//movieDB practice
var movies = [
  {
    title: "Star Wars The Last Jedi",
    rating: 5,
    hasWatched: true
  },
  {
    title: "A Very Special Love",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Mamma Mia 2",
    rating: 4.7,
    hasWatched: false
  },
  {
    title: "My Sassy Girl",
    rating: 3,
    hasWatched: true
  }
];

/* 
movies.forEach(function(movie){
  var str = "You have ";
  if (movie["hasWatched"]){
    str += "watched ";
  } else{
    str += "not watched ";
  }
  str += "\"" + movie["title"] + "\" - ";
  str += movie["rating"] + " stars";
  console.log(str);
}); 
*/

function buildString(movie){
  var str = "You have ";
  if (movie["hasWatched"]){
    str += "watched ";
  } else{
    str += "not watched ";
  }
  str += "\"" + movie["title"] + "\" - ";
  str += movie["rating"] + " stars";
  return str;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});