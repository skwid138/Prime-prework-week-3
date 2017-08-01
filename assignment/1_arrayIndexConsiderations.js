// remember! array indices start at 0

var colors = ['red', 'blue', 'yellow', 'green', 'orange', 'indigo', 'violet'];

// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
// uncomment the next two lines and replace ____ with the appropriate code
var theColorRed = colors[0];
var theColorYellow = colors[2];
// console.log(theColorRed, theColorYellow);

// what happens if we access an index that has no element?
// uncomment the following line and replace ____ with the appropriate code
var fortyThirdColor = colors[42];
console.log(fortyThirdColor);
// The index doesn't have a value assigned to it
// the result is undefined

function lastItem( lastItemArray ) {
  // this function accepts an array (lastItemArray) as an argument
  // have it return the last item in the array
  return lastItemArray[lastItemArray.length - 1];
}

// test your function lastItem by calling it below and logging the result
// for ex. console.log(lastItem(colors));

alert("There are " + colors.length + " in the array and the last one is " + lastItem(colors) + ".");

console.log(lastItem(colors));
