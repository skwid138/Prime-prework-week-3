describe('basemode booleanConditions.js', function() {
  describe('isCartonFull()', function() {
    it('returns true if eggsInCarton == cartonCapacity', function() {
      // eggsInCarton = cartonCapacity
      assert.equal(isCartonFull( 19, 19 ), true);
    });
    it('returns true if eggsInCarton > cartonCapacity', function() {
      // eggsInCarton > cartonCapacity
      assert.equal(isCartonFull( 78, 19 ), true);
    });
    it('returns false if eggsInCarton < cartonCapacity', function() {
      // eggsInCarton < cartonCapacity
      assert.equal(isCartonFull( 9, 19 ), false);
    });
  });
});
