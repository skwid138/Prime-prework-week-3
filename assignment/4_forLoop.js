function shoesOnTheBus( arrayOfKidsOnBus ){
  // This function accepts an array of names of kids on the bus.
  // Assume each kid on the bus is wearing 2 shoes.
  // Write a for loop to count how many shoes are on the bus AND console logs "Nice shoes!" for each student.
  // This function should return the number of shoes on the bus.
  var shoes = 0;
  for (var i = 0; i < arrayOfKidsOnBus.length; i++) {
    shoes+=2;
    console.log("Nice shoes!");
  } // end for
  return shoes;
} // end shoesOnTheBus
