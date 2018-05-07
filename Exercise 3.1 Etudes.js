//Part 1:

function isPalendrome(str){
  let newStr = "",
      revStr = "";
  for (var i = 0; i < str.length; i++){
    if (str[i].match(/^[a-z0-9]+$/i)){
      newStr = newStr + str[i];
      revStr = str[i] + revStr;
    }
  }
  newStr = newStr.toUpperCase();
  revStr = revStr.toUpperCase();
  if (newStr == revStr){
    console.log("'" + str + "' is a Palendrome.");
  }
  else{
    console.log("'" + str + "' is NOT a Palendrome.")
  }
}

isPalendrome('Mr. Owl ate my metal worm');
isPalendrome('AbCdE12345');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Part 2:

function sum_range(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum = (sum + i); //Or sum += i;
  }
  console.log(sum);
}
sum_range([1, 5]);   //15
sum_range([11, 12]); //23

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Bonus: (Doesn't work yet)

function reverseString(str, key) {
    var newStr = "";
    for (var i = 0; i <= str.length - 1; i++) {
      if (str[i].match(/^[a-z]+$/i)){
        newStr = newStr + (str[i] + key);
      }
      else if (str[i].match(/^[0-9]+$/i)){
        newStr = newStr + (str[i] + key);
      }
      else {
        newStr = newStr + str[i];
      }
    }
    console.log(newStr);
}
reverseString('AbC123!*', '1');
*/
