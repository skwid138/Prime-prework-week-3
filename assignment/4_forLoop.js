function shoesOnTheBus( ArrayOfKidsOnBus ){
  // This function accepts an array (ArrayOfKidsOnBus) of kids on the bus.
  // Assume each kid on the bus is wearing 2 shoes.
  var shoes = 0; // start with zero shoes

  // Write a for loop to count how many shoes are on the bus
  // AND console log "Nice shoes!" for each student.

  // The totaling of shoes should be done inside the loop.
  for (var i = 0; i < ArrayOfKidsOnBus.length; i += 1) {
    shoes += 2;
    console.log('Nice Shoes!');
  }

  // This function should return the number of shoes on the bus.
return shoes;

} // end shoesOnTheBus

var kidsList = [
  'Hunter',
  'Becky',
  'Banjo',
  'Lola'
];

// test your function shoesOnTheBus by calling it below and logging the result

console.log("There are " + shoesOnTheBus(kidsList) + " shoes on the bus.");
