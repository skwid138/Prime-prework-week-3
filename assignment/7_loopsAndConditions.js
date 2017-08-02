function onlyEvens(numberArray) {

  var evensArray = []; // local array to store the evens you find

  // complete this function so that given an array full of
  // numbers (numberArray), it returns a new array containing
  // only the even ones. for example `onlyEvens([1,2,3,4]) === [2,4]`
for (var i = 0; i < numberArray.length; i += 1) {
  if (numberArray[i] % 2 === 0) {
    evensArray.push(numberArray[i]);
  }
}

  return evensArray;
}

var nums = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  111,
  112
];

// test your function onlyEvens by calling it below and logging the result
console.log('Here are all the numbers ' + nums);
console.log('Here are the even numbers ' + onlyEvens(nums));
