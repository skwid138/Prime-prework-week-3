function fillCrate( maxCapacity ){
  // this function received an argument of "maxCapacity"
  // crateMax is the maximum widget capacity of the crate
  // crates start empty
  var widgets = 0;
  // write a while loop that puts more widgets in the crate until it is full
  var i = 0;
  while( i < maxCapacity ){
    widgets++;
    i++;
  } // end while
  // return the number of widgets added to the crate in the while loop
  return widgets;
} // end fillCrate
