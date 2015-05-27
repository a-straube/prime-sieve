var numbersBefore = function(n) {
  var numbers = [];
  var a = 2;
  while (a <= n) {
    numbers.push(a);
    a += 1;
  };
  return numbers;
};

var deleteValue = function(array, value) {
  var i = array.indexOf(value);
  if (i >= 0) {
    array.splice(i, 1);
  }
  return array;
};

var primesBefore = function(n) {
  var numbers = numbersBefore(n);
  var primes = numbers.slice();
  numbers.forEach (function(number) {
    // delete all multiples of number
    var multiple = 2;
    while (number*multiple <= n) {
      deleteValue(primes, number*multiple);
      multiple += 1;
    }
  });
  return primes;
};

$(document).ready(function() {
  $("form#numbercounter").submit(function(event) {
    var number = parseInt($("input#number").val());

    var numberList = numbersBefore(number).map (function(x) {return x.toString();})
    $("#result").text('Hover over a number to see if it is prime: ' + numberList.join(', '));
    event.preventDefault();
  });
});
