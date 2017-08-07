// How would you store your favorite foods in an array?
// If a restaurant's menu was also in an array,
// could you write a function that would check if
// the restaurant had some of your favorite foods?

const favoriteFoods = [ // list of foods input by user
];

const restaurantMenu = [
  'taco',
  'burrito',
  'chalupa',
  'chips',
  'guacamole',
  'asada',
  'empanadas',
  'tamales',
  'nachos',
  'tortas',
  'salsa',
  'queso',
  'beans',
  'salad'
];

const favoritesAtRestaurant = [
];

// creates an array of strings input by the user
function whatAreYourFavoriteFoods () {
  console.log('favorite foods function started');
  alert("The following will ask for five of your favorite foods.");
  for (let i = 1; i <= 5; i += 1) {
    console.log('fav foods loop intertion = ' + i);
    let food = prompt("Please enter one of your favorite foods.").toLowerCase();
    console.log('food = ' + food);
    favoriteFoods.push(food);
    console.log('fav foods array = ' + favoriteFoods);
  }
}

// tests the restaurant array aginst the user input array to find matches
// either use a 2nd for loop or use a function and call it to run the 2nd loop
function compareFood (rest, userFav) {
  for (let i = 0; i < rest.length; i += 1) {
    if (rest[i] === userFav[0]) {
      favoritesAtRestaurant.push(userFav[0]);
    } else if (rest[i] === userFav[1]) {
      favoritesAtRestaurant.push(userFav[1]);
    } else if (rest[i] === userFav[2]) {guest
      favoritesAtRestaurant.push(userFav[2]);
    } else if (rest[i] === userFav[3]) {
      favoritesAtRestaurant.push(userFav[3]);
    } else if (rest[i] === userFav[3]) {
      favoritesAtRestaurant.push(userFav[3]);
    } else if (rest[i] === userFav[4]) {
      favoritesAtRestaurant.push(userFav[4]);
    } else {
      return "The restaurant doesn't serve any of your favorite foods!";
    }
  }
}

// creates user fav list then runs it against restaurant menu checking for matches, then alerts the user if there are matches
function discussionWeekThree () {
  whatAreYourFavoriteFoods();
  compareFood(restaurantMenu, favoriteFoods);
  alert("The restaurant serves these favorites!\n\n" + favoritesAtRestaurant);
}
discussionWeekThree();
