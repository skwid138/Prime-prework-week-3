describe('basemode arrayIndexConsiderations.js', function() {
  it('theColorRed should select the 0 index of colors. CHECK', function() {
      assert.equal(theColorRed, 'red');
  });
  it('theColorYellow should select the 2nd index of colors. CHECK', function() {
      assert.equal(theColorYellow, 'yellow');
  });
  it('the forty third color', function() {
      assert.isUndefined(fortyThirdColor);
  });

  it('lastItem function should return the last item in an array that is passed to it', function() {
      var zeroThroughFour = [4];
      assert.equal(lastItem(zeroThroughFour), 4);

      var letters = ['p', 'r', 'i', 'm', 'e'];
      assert.equal(lastItem(letters), 'e');
  });
});
