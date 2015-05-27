describe('numbersBefore', function() {
  it('returns an array of integers starting at 2 up to a given number', function() {
    expect(numbersBefore(10)).to.eql([2,3,4,5,6,7,8,9,10]);
  });
})
