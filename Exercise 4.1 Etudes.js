//Write a function that takes an array of integers and returns the average value of all the elements.
function average(data){
  let result;
  result = data.reduce((total, one_number) => total + one_number, 0);
  let average = (result/data.length);
  console.log(average);
}
average([4, 8, 15, 16, 23, 42]); // "18"

//Write a function that will reverse the contents of an array. Do not use the built-in ".reverse()" function.
function reverseArray(data){
    let revArr = [];
    for(i = 0; i < data.length; i++)
    revArr.unshift(data[i]);
    console.log(revArr);
}
reverseArray([ 1, 2, 3, 4, 5]); // "[ 5, 4, 3, 2, 1 ]"

//Given an array of objects with "first_name" and "last_name" fields, write a callback for the ".sort" function to sort the names alphabetically by last name. If two last names are the same, then sort those by first name.
var names = [
  {fName: "Bob", lName: "Dylan"},
  {fName: "David", lName: "Bowie"},
  {fName: "Tina", lName: "Turner"},
  {fName: "Elvis", lName: "Presley"},
  {fName: "Ike", lName: "Turner"},
  {fName: "Bruce", lName: "Springsteen"}
];

function sortNames(data) {
  function compare(a,b){
    if (a.lName < b.lName) return -1;
    if (a.lName > b.lName) return 1;
    if ((a.lName = b.lName) && (a.fName > b.fName)) return 1;
    return 0;
    console.log(compare);
  }
  let sortedNames = names.sort(compare);
  //console.log(sortedNames);
  for (i = 0; i < data.length; i++){
  console.log(data[i].fName + " " + data[i].lName)};
}
sortNames(names);

//Write a function called "flatten" that takes an array of arrays, then returns a new array with just the values, in the same order. "Flatten([[1,2], [3,4]])" should result in the array "[1,2,3,4]".
let arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function flatten(data){
  var newArray = [].concat.apply([], data);
  console.log(newArray);
}
flatten(arrays);

//Optional Bonus 1: Don't use any of the built-in array functions.


//Optional Bonus 2: Make this work recursively, so it will flatten any amount of array nesting. "Flatten([[[1],2],[[[3]],[4]]])" should also result in "[1,2,3,4]". There's a special function that will be helpful here, "Array.isArray(my_var_here)" that will return true if the parameter is an array.


//Write a function that takes an object parameter and prints out the content of the object nicely. Each line of output, from console.log, should show each key and its associated value.
var deaths = [
  {Name: "Alan Wilson", Death: "September 3, 1970"},
  {Name: "Jimi Hendrix", Death: "September 18, 1970"},
  {Name: "Janis Joplin", Death: "October 4, 1970"},
  {Name: "Jim Morrison", Death: "July 3, 1971"},
  {Name: "Brian Cole", Death: "August 2, 1972"},
  {Name: "Rory Storm", Death: "28 September, 1972"}
];

function Names(data) {
  for (i = 0; i < data.length; i++){
  console.log("Name: " + data[i].Name);
  console.log("Died: " + data[i].Death)};
}
Names(deaths);


let weather = {temp: "90F", wind: "20MPH", humidity: "Oh my goodness!"}
console.log(weather['temp']);
displayWeather(weather);

funciton displayWeather(myWeather){
  for (let key in myWeather){
    console.log(key + " is set to " + myWeather[key]);
  };
};

//Bonus 1: Make this work for objects, arrays, and single values. You'll need the Array.isArray function we already mentioned. You can tell if something is an object with "Object.keys(maybe_an_object).length > 0."


//Bonus 2: Align the output nicely. Add spaces between the colon and the start of the value, so that the values all start at the same column.


//Bonus 3: Make this work recursively. If an object contains an object, indent all of the contained object's keys and values.
