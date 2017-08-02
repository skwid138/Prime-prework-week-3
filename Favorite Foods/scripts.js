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

const

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

function compareFood (rest, userFav) {
  for (let i = 0; i < rest.length; i += 1) {
    if (rest[i] === userFav[i]) {

    }
  }
}

whatAreYourFavoriteFoods();
