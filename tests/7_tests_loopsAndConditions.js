describe('hardmode loopsAndConditions.js', function() {
  describe('onlyEvens()', function(){
    it('onlyEvens function should take an array argument and return only the even numbers in an array', function() {
      expect(onlyEvens([18, 22, 30])).to.be.eql([18, 22, 30]);
      expect(onlyEvens([1,2,3,4])).to.be.eql([2,4]);
      expect(onlyEvens([])).to.be.eql([]);
      expect(onlyEvens([1,3,5])).to.be.eql([]);
    });
  });
});
