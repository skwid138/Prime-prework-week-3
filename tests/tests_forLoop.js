describe('basemode loop tests', function() {
    it( 'for loop test 1', function() {
      // assert.equal( 18, shoesOnTheBus( 9 ) );
      var spy = sinon.spy(console, 'log');
      // call the function that needs to be tested
shoesOnTheBus(5);

// assert that it was called with the correct value
// assert.equal(spy.calledWith(25));
expect( console.log.calledOnce ).to.be.true;
expect( console.log.calledWith(25)).to.be.true;

// restore the original function
spy.restore();
    });
    it( 'for loop test 2', function() {
      assert.equal( 42, shoesOnTheBus( 21 ) );
    });
    it( 'while loop test 1', function() {
      assert.equal( 42, fillCrate( 42 ) );
    });
    it( 'while loop test 1', function() {
      assert.equal( 36, fillCrate( 36 ) );
    });
});
