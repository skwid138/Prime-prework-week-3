function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  switch( today ){
    case 'saturday':
      // party time
      var weekend = true;
      break;
    case 'sunday':
      // sunday is technically the weekend
      weekend = true;
      break;
    default:
      // default is anything else...
      weekend = false;
      break;
  } // end switch
  return weekend;
}; // end checkDay
