function shoesOnTheBus( kidsOnTheBus ){
  // this function accepts the number of kids on the bus
  // assume each kid on the bus is wearing 2 shoes
  // write a for loop that counts how many shoes are on the bus
  // this function should return the number of shoes on the bus
  var shoes = 0;
  for (var i = 0; i < kidsOnTheBus; i++) {
    shoes+=2;
  } // end for
  return shoes;
} // end shoesOnTheBus
