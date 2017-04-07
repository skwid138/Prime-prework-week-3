describe('hardmode switchDefault.js', function() {
  it( 'switch statement should return true for weekend days. CHECK', function() {
    assert.equal( checkDay( 'saturday' ), true );
    assert.equal( checkDay( 'sunday' ), true );
  });
  it( 'switch statement should return false for weekdays. CHECK', function() {
    assert.equal( false, checkDay( 'wednesday' ) );
    assert.equal( false, checkDay( 'tuesday' ) );
    assert.equal( false, checkDay( 'monday' ) );
    assert.equal( false, checkDay( 'thursday' ) );
    assert.equal( false, checkDay( 'friday' ) );
  });
});
