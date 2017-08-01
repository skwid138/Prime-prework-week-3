// write an array named 'people' that holds the following names:
// 'Albert', 'Dev', 'Ryan', 'Antoinette'
// uncomment the following line and replace______ with the appropriate code
var people = [
  'Albert',
  'Dev',
  'Ryan',
  'Antoinette'
];

// set the variable below equal to the first name in the people array
// you created above. Use array indexing to do this.
// uncomment the following line and replace______ with the appropriate code
var firstPerson = people[0];
console.log('firstPerson = ' + firstPerson);

// set the variable below equal to the number of names in the people array
// you created above. Don't just count them, ask the array how long it is
// using a property you learned about in CodeAcademy.
// uncomment the following line and replace______ with the appropriate code
var howManyPeople = people.length;
console.log('howManyPeople = ' + howManyPeople);

// set the variable below equal to the last name in the array
// user both array indicies and an array property to do so
// uncomment the following line and replace ______ with the appropriate code
var lastPerson = people[people.length - 1];
console.log('lastPerson = ' + lastPerson);
console.log('The last person in the array is ' + people[3]);

// write a line of code that adds 'Prince' to the array
people.push('Prince');
console.log('Pushed Prince to the end of the array: ' + people);

people.pop();
console.log('Popped Prince from the array: ' + people);

people.unshift('Hunter');
console.log('Unshifted Hunter to the front of the array: ' + people);

people.shift();
console.log('Shifted Hunter from the front of the array: ' + people);
