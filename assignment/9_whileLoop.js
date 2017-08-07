function fillCrate( maxCapacity ){
  // console.log('fillCrate started');
  // this function received an argument of "maxCapacity"
  // maxCapacity is the maximum widget capacity of the crate
  // crates start empty
  var widgets = 0;
  // write a while loop that puts widgets in the crate until it is full
  while (widgets < maxCapacity) {
    widgets += 1;
  }
  // return the number of widgets added to the crate in the while loop
  return 'Added ' + widgets + ' / ' + maxCapacity + ' widgets to your crate.';
  // return 'Added ' + widgets + '/' + crateSize + ' widgets to your crate.\n\nYour crate is full now!';
} // end fillCrate

// test your function fillCrate by calling it below and logging the result
console.log(fillCrate( 12 ));

// The below is way to collect user input with error checking to run through the function.
//
// var crateSize = prompt("What's the maximum number of widgets your crate can hold?\n\nPlease enter numbers only.\nex: 1 , 2 , 3 , 4 etc...\n\nIf you wish to exit the program please type 'quit'.").toLowerCase();
// while(crateSize !== 'quit') {
//   crateSize = parseInt(crateSize);
//   console.log('crateSize value at top of outer loop = ' + crateSize);
//   if (isNaN(crateSize)) {
//     console.log('NaN detected: prompting for number again');
//         crateSize = prompt("That's not a number!\n\nPlease enter a number.");
//   } else {
//     console.log('have a valid int, exiting prompt loop to run fillCrate function');
//     alert(fillCrate(crateSize));
//     break;
//   }
// }
