var count = 0;

do {
  count++;
} while (false)

// uncomment the following line and replace ___ with the correct value
var valueOfCountAfterLoop = 1;
console.log(count);
// the while portion of the loop is false so it only runs once for the do portion.

// You don't need to change the do while loop above, but you are welcome
// to test your answer with console.log. Logging is your friend!

function compareMyAnswer (var1, var2) {
  if (var1 === var2) {
    return 'Correct! ' + true;
  } else {
    return 'Try Again! ' + false;
  }
}

console.log(compareMyAnswer(count, valueOfCountAfterLoop));
