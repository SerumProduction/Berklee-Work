function transpose(note, steps) {
  var scale = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  var i = (scale.indexOf(note) + steps) % scale.length;
  console.log(scale[ i < 0 ? i + scale.length : i ]);
};

transpose("E", 3); //prints "G"
transpose("E", -21); //prints "G"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseString(str) {
  var newStr = "";
  for (var i = 0; i <= str.length - 1; i++) {
    if (str[i].match(/^[a-z0-9]+$/i)){
      newStr = newStr + str[i];
    }
  }
  return newStr
};

console.log(reverseString('Mr. Owl ate my metal worm!')); //MrOwlatemymetalworm
console.log(reverseString('As&^%$DfG12345')); //AsDFG12345
