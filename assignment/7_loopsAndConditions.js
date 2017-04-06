function onlyEvens(array) {
  // complete this function so that given an array full of
  // numbers, it returns a new array containing only the even ones
  // for example `onlyEvens([1,2,3,4]) === [2,4]`

  return array.filter(function(number) {
    return number % 2 === 0;
  });

  // or more likely given what the student should know at this time
  // var result = [];
  // for(var i = 0; i < array.length; i++) {
  //   var number = array[i]
  //   if (number % 2 === 0) {
  //     result.push(number);
  //   }
  // }
  // return result;
}
