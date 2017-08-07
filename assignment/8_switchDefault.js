function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  switch (today) {
    case 'saturday':
    case 'sunday':
      return 'If today is ' + today + '. The weekend is here! = ' + true;
    default:
      return 'If today is ' + today + '. The weekend is here! = ' + false;
  }
} // end checkDay

// test your function checkDay by calling it below and logging the result
console.log(checkDay('monday'));

// The below is way to collect user input and then run it through the function above.
// while (true) {
//   const askDay = prompt("Hello, please enter the name of a day and this will let you know if it's the weekend yet. If it's not, hang in there it's only a few days away!\n\nPlease enter the full weekday 'monday', 'tuesday' etc...\n\nIf you wish to quit the app simply enter 'quit'.").toLowerCase();
//   if (askDay === 'quit') {
//     break;
//   } else {
//     alert(checkDay(askDay));
//   }
// }
