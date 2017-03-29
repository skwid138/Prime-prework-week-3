describe('basemode booleanConditions.js', function() {
  it( 'isCartonFull should return true if eggsInCarton == cartonCapacity', function() {
    // eggsInCarton = cartonCapacity
    assert.equal( true, isCartonFull( 19, 19 ) );
  });
  it( 'isCartonFull should return true if eggsInCarton > cartonCapacity', function() {
    // eggsInCarton > cartonCapacity
    assert.equal( true, isCartonFull( 78, 19 ) );
  });
  it( 'isCartonFull should return false if eggsInCarton < cartonCapacity', function() {
    // eggsInCarton < cartonCapacity
    assert.equal( false, isCartonFull( 9, 19 ) );
  });
});
