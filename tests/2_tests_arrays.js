describe('basemode arrays.js', function() {
  var initialArray = ['Albert', 'Dev', 'Ryan', 'Antoinette', 'Prince'];
  initialArray.forEach(function(element, index) {
    it('correct person is in people array at the correct index', function() {
      assert.equal(people[index], element, element + ' should not be at index ', index);
    });
  });

  it('firstPerson should be set to first index in the array. CHECK', function() {
    assert.equal('Albert', firstPerson);
  });
  it('howManyPeople should be set to length of the array. CHECK', function() {
    assert.equal(4, howManyPeople);
  });
  it('lastPerson should be people[people.length-1] to select "Antoinette". CHECK ', function() {
    assert.equal('Antoinette', lastPerson);
  });
});
