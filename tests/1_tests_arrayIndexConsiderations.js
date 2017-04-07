describe('basemode arrayIndexConsiderations.js', function() {
  it('theColorRed selects the 0 index of colors. CHECK', function() {
      assert.equal(theColorRed, 'red');
  });
  it('theColorYellow selects the 2nd index of colors. CHECK', function() {
      assert.equal(theColorYellow, 'yellow');
  });
  it('fortyThirdColor is undefined', function() {
      assert.isUndefined(fortyThirdColor);
  });

  describe('lastItem()', function() {
    it('returns the last item in an array that is passed to it', function() {
        var zeroThroughFour = [4];
        assert.equal(lastItem(zeroThroughFour), 4);

        var letters = ['p', 'r', 'i', 'm', 'e'];
        assert.equal(lastItem(letters), 'e');
    });
  });
});
