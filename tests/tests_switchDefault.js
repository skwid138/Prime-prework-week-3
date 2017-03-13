describe('basemode switchDefault.js', function() {
  it( 'switch statements should return true for weekend days. CHECK', function() {
    assert.equal( true, checkDay( 'saturday' ) );
    assert.equal( true, checkDay( 'sunday' ) );
  });
  it( 'switch statements should return false for weekdays. CHECK', function() {
    assert.equal( false, checkDay( 'wednesday' ) );
  });
});
