
//Part 1:
/*EDIT: Let's go with the assumption that each function's results are being passed
to the subsequent functions so that we don't have to worry about redundant script.
"Data3" was for ensuring that the new value being added to Data2 was not a duplicate.*/

function myset_add(data, new_value){
    let data2 = [];
    for(let i = 0;i < data.length; i++){
        if(data2.indexOf(data[i]) == -1){
            data2.push(data[i])
        }
        //console.log(data2);
    }
    data2.push(new_value);
    return data2;
}
console.log(myset_add([ 1, 2, 3, 2, 1, 4, 5], 15)); // "[ 1, 2, 3, 4, 5, 15 ]"

//////////////////////////////////////////////////////////////////////////////

function myset_remove(data, remove_value){
    let data2 = [];
    for(let i = 0;i < data.length; i++){
        if(data[i] !== remove_value){
            data2.push(data[i])
        }
        //console.log(data2);
    }
    return data2;
}
console.log(myset_remove([1, 2, 3, 4, 5, 15], 15)); //[ 1, 2, 3, 4, 5 ]

//////////////////////////////////////////////////////////////////////////////

function myset_has(data, test_value) {
  return data.indexOf(test_value) > -1;
}
console.log(myset_has([1, 2, 3, 4, 5], 2)); //true
console.log(myset_has([1, 2, 3, 4, 5], 6)); //false

//////////////////////////////////////////////////////////////////////////////

function myset_size(data){
    return data.length;
}
console.log(myset_size([1,2,3,4,5])); // "5"

//////////////////////////////////////////////////////////////////////////////

let data = [1, 2, 3, 4, 5];
data.forEach(function(data, callback_function){
  console.log(callback_function, data);
});

/*OR

var callback_function = [1,2,3,4,5]
  for (data in callback_function) {
    console.log(callback_function[data]);
}*/

/*Or

let array = [1, 2, 3, 4, 5];
for (let value of array){
  console.log(value);
}*/

//////////////////////////////////////////////////////////////////////////////

//Part 2:

let song1 = [
  {note: "C", starts: 0, lasts: 4},
  {note: "E", starts: 1, lasts: 3},
  {note: "G", starts: 2, lasts: 2},
  {note: "B", starts: 3, lasts: 1},
];

let song2 = [
  {note: "C", starts: 0, lasts: 2},
  {note: "C", starts: 2, lasts: 2},
  {note: "C", starts: 4, lasts: 4},
  {note: "C", starts: 9, lasts: 1},
  {note: "B", starts: 10, lasts: 1},
  {note: "A", starts: 11, lasts: 1},
  {note: "B", starts: 12, lasts: 1},
  {note: "C", starts: 13, lasts: 1},
  {note: "D", starts: 14, lasts: 2},
  {note: "E", starts: 16, lasts: 2},
  {note: "E", starts: 18, lasts: 2},
  {note: "E", starts: 20, lasts: 4},
  {note: "E", starts: 25, lasts: 1},
  {note: "D", starts: 26, lasts: 1},
  {note: "C", starts: 27, lasts: 1},
  {note: "D", starts: 28, lasts: 1},
  {note: "E", starts: 29, lasts: 1},
  {note: "F", starts: 30, lasts: 1},
  {note: "G", starts: 32, lasts: 4},
  {note: "C", starts: 36, lasts: 4},
  {note: "A", starts: 41, lasts: 1},
  {note: "G", starts: 42, lasts: 1},
  {note: "F", starts: 43, lasts: 1},
  {note: "E", starts: 44, lasts: 1},
  {note: "D", starts: 46, lasts: 1},
  {note: "C", starts: 48, lasts: 4},
  {note: "D", starts: 53, lasts: 1},
  {note: "E", starts: 54, lasts: 1},
  {note: "F", starts: 55, lasts: 1},
  {note: "G", starts: 56, lasts: 2},
  {note: "F", starts: 58, lasts: 1},
  {note: "E", starts: 59, lasts: 1},
  {note: "D", starts: 60, lasts: 2},
];

function play_song(song){
  for (i = 0; i < song.length; i++)
  console.log(song[i].note + " is played at " + song[i].starts + " second(s) and lasts for " + song[i].lasts + " second(s).");
}
console.log("Begin Song");
play_song(song1);
console.log("Song Complete");

console.log("Begin Song");
play_song(song2);
console.log("Song Complete");
