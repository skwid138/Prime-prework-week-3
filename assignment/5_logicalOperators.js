var andTruthTable = [true  && true,
                     true  && false,
                     false && true,
                     false && false];

// in the array 'andTruthtable', how many elements are true?
// uncomment the next line and replace ___ with the appropriate value
var numberOfTrueElements = 1;


var orTruthTable = [true  || true,
                    true  || false,
                    false || true,
                    false || false];

// in the array 'orTruthTable', how many elements are false?
// uncomment the next line and replace ___ with the appropriate value
var numberOfFalseElements = 3;


function opposite(booleanValue) {
  // complete this function so that it always returns the opposite of whatever value is passed in
  // for example `opposite(true) === false` and `opposite(false) === true`
  return !booleanValue;
}

// test your function opposite by calling it below and logging the result
console.log('Entered a true value into the function. The opposite is ' +  opposite(true));
console.log('Entered a false value into the function. The opposite is ' + opposite(false));


// this function will test the values of an array to see if they evalute to true or false, then it logs the result of each test with the index number (I did fill in the nswers to the bove questions prior to creating this function)

// function isItTrue(arr) {
//   var trues = 0;
//   for (var i = 0; i < arr.length; i += 1) {
//     if (arr[i] === true) {
//       trues += 1;
//       console.log('index: ' + i + ' is true.');
//     } else {
//       console.log('index: ' + i + ' is not true.');
//     }
//   }
//   return trues;
// }
//
// isItTrue(andTruthTable);
// isItTrue(orTruthTable);
