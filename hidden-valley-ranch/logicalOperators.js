var andTruthTable = [true  && true,
                     true  && false,
                     false && true,
                     false && false];

// in the array 'andTruthtable', how many elements are true?
var numberOfTrueElements = 1;



var orTruthTable = [true  || true,
                    true  || false,
                    false || true,
                    false || false];

// in the array 'orTruthTable', how many elements are false?
var numberOfFalseElements = 1;


function opposite(booleanValue) {
  // complete this function so that it always returns the opposite of whatever value is passed in
  // for example `opposite(true) === false` and `opposite(false) === true`
  return !booleanValue;
}
