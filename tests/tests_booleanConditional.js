describe('basemode booleanConditions.js', function() {
  it( 'isCartonFull should return true if eggsInCarton == cartonCapacity', function() {
    // eggsInCarton = cartonCapacity
    assert.equal(isCartonFull( 19, 19 ), true);
  });
  it( 'isCartonFull should return true if eggsInCarton > cartonCapacity', function() {
    // eggsInCarton > cartonCapacity
    assert.equal(isCartonFull( 78, 19 ), true);
  });
  it( 'isCartonFull should return false if eggsInCarton < cartonCapacity', function() {
    // eggsInCarton < cartonCapacity
    assert.equal(isCartonFull( 9, 19 ), false);
  });
});
