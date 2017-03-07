describe('basemode arrays.js tests:', function() {
    it( 'people should be an array of all 5 names after adding Prince', function() {
      var completeArray = [ 'Albert', 'Dev', 'Ryan', 'Antoinette', 'Prince' ];
      assert.deepEqual( completeArray, people , ["array was created incorrectly or Prince wasn't added"]);
    });
    it( 'firstPerson should be set to first index in the array. CHECK', function() {
      assert.equal( 'Albert', firstPerson );
    });
    it( 'howManyPeople should be set to length of the array. CHECK', function() {
      assert.equal( 4, howManyPeople );
    });
    it( 'lastPerson should be people[people.length-1] to select "Antoinette". CHECK ', function() {
      assert.equal( 'Antoinette', lastPerson);
    });
    it( 'people should have Prince last in the array', function() {
      assert.equal( 'Prince' , people[ people.length-1 ], ['Prince was not pushed to the array'] );
    });
});
