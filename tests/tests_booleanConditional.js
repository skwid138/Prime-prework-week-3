describe('basemode booleanConditions.js', function() {
    it( 'isCartonFull should return true if eggsInCarton == cartonCapacity', function() {
      assert.equal( true, isCartonFull( 18, 18 ) );
    });
    it( 'isCartonFull should return false if eggsInCarton < cartonCapacity', function() {
      assert.equal( false, isCartonFull( 9, 18 ) );
    });
});
