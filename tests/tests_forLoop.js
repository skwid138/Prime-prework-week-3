describe('basemode loop tests', function() {
var kids = ['Billy', 'GOAT', 'Mountain', 'Nigora', 'LL Cool J']

  it( 'should log "Nice shoes!" for each index of the array', function() {
    var spy = sinon.spy(console, 'log');

    // call the function that needs to be tested
    shoesOnTheBus(kids);

    // assert that it was called the correct number of times
    sinon.assert.callCount(spy, 5);
    // assert that it was called with the correct value
    sinon.assert.calledWith(spy, 'Nice shoes!');

    // restore the original function
    spy.restore();
  });
  it( 'should return the number of should of kids on bus', function() {
    assert.equal( 10, shoesOnTheBus(kids) );
    assert.equal( 0, shoesOnTheBus([]) );
  });
});
