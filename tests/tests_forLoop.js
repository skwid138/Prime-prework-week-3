describe('basemode forLoop.js', function() {
  var kids = ['Billy', 'GOAT', 'Mountain', 'Nigora', 'LL Cool J']

  it( 'should log "Nice shoes!" for each index of the array', function() {
    var logSpy = sinon.spy(console, 'log');

    // call the function that needs to be tested
    shoesOnTheBus(kids);

    // assert that it was called the correct number of times
    expect(logSpy.callCount).to.equal(5);

    // assert that it was called with the correct value
    // using matchers to provide more fuzziness
    // http://sinonjs.org/releases/v2.1.0/matchers/
    // Any string that contains 'nice shoes' case insensitive and option . or !
    var niceShoesRegX = new RegExp('Nice Shoes(.|!)?', "i");
    expect(logSpy.calledWith(sinon.match(niceShoesRegX))).to.be.true;

    // restore the original function
    logSpy.restore();
  });
  it( 'should return the number of shoes on bus', function() {
    assert.equal( 10, shoesOnTheBus(kids) ); // kid.length = 5
    assert.equal( 0, shoesOnTheBus([]) );
  });
});
