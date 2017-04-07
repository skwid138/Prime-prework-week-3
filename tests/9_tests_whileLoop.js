describe('hardmode whileLoop.js', function() {
  describe('fillCrate()', function() {
    it('returns the same number that is passed in with a while loop. CHECK', function() {
      assert.equal( fillCrate( 17 ), 17 );
      assert.equal( fillCrate( 42 ), 42 );
      assert.equal( fillCrate( 36 ), 36 );
    });
  });
});
