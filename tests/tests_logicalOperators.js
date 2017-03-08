describe('basemode logicalOperators.js', function() {
  it('&& operators array should include 1 true value', function() {
    var trueValues = andTruthTable.filter(function(boolean) {
      return boolean;
    });
    expect(numberOfTrueElements).to.be.equal(trueValues.length);
  });
  it('|| operators array should include 1 false value', function() {
    var falseValues = orTruthTable.filter(function(boolean) {
      return !boolean;
    });
    expect(numberOfFalseElements).to.be.equal(falseValues.length);
  });
  it('should take boolean argument and return its opposite', function() {
    expect(opposite(true)).to.be.false;
    expect(opposite(false)).to.be.true;
  });
});
