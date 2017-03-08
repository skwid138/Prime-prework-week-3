describe('basemode booleanConditions.js', function() {
    it( 'isCartonFull should return true if eggsInCarton == cartonCapacity', function() {
      assert.equal( true, isCartonFull( 19, 19 ) );
      assert.equal( true, isCartonFull( 54, 54 ) );
    });
    it( 'isCartonFull should return false if eggsInCarton < cartonCapacity', function() {
      assert.equal( false, isCartonFull( 9, 19 ) );
      assert.equal( false, isCartonFull( 39, 43 ) );
    });
});
