describe('basemode logicalOperators.js', function() {
  it('&& operators array includes 1 true value', function() {
    var trueValues = andTruthTable.filter(function(boolean) {
      return boolean;
    });
    expect(numberOfTrueElements).to.be.equal(trueValues.length);
  });
  it('|| operators array includes 1 false value', function() {
    var falseValues = orTruthTable.filter(function(boolean) {
      return !boolean;
    });
    expect(numberOfFalseElements).to.be.equal(falseValues.length);
  });
  it('takes a boolean argument and returns its opposite', function() {
    expect(opposite(true)).to.be.false;
    expect(opposite(false)).to.be.true;
  });
});
