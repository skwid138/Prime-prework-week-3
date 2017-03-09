describe('basemode whileLoop.js', function() {
    it( 'should return the same number that is passed in with a while loop. CHECK', function() {
      assert.equal( 17, fillCrate( 17 ) );
      assert.equal( 42, fillCrate( 42 ) );
      assert.equal( 36, fillCrate( 36 ) );
    });

});
