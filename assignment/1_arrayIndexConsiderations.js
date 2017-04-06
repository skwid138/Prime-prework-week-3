// what happens when we try to access an index outside of our list?
// remember! array indices start at 0

var colors = ['red', 'blue', 'yellow'];

// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
var theColorRed = colors[0];
var theColorYellow = colors[2];

// what happens if we access an index that has no element?
var fortyThirdColor = colors[42];

// write a function called lastItem that accepts an array and always returns the last item in the array
// for example lastItem(colors) === 'yellow'
function lastItem(array) {
    // your code goes here
    return( array[ array.length-1 ] );
}
