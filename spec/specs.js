describe('numbersBefore', function() {
  it('returns an array of integers starting at 2 up to a given number', function() {
    expect(numbersBefore(10)).to.eql([2,3,4,5,6,7,8,9,10]);
  });
});

describe('deleteValue', function() {
  it('removes a value from an array', function() {
    expect(deleteValue([2,3,4,5,6,7,8,9,10], 5)).to.eql([2,3,4,6,7,8,9,10]);
  });
});

describe('primesBefore', function() {
  it('returns an array containing 2 for any number greater than or equal to 2', function() {
    expect(primesBefore(2)).to.eql([2]);
  });

  it('returns an array containing all prime numbers up to a given number', function() {
    expect(primesBefore(10)).to.eql([2,3,5,7]);
  });

  it('returns an array containing all prime numbers up to a given number', function() {
    expect(primesBefore(25)).to.eql([2,3,5,7,11,13,17,19,23]);
  });
});
