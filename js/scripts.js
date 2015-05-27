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
    start = performance.now()
    var primes = primesBefore(number);
    end = performance.now()
    console.log(end - start)
    var numberList = numbersBefore(number).map (function(x) {
      if (primes.indexOf(x) >= 0) {
        return "<span class='prime " + x.toString() + "'>" + x.toString() + "</span>";
      } else {
        return x.toString();
      }
    });

    $("#result").html('Hover over a number to see if it is prime: ' + numberList.join(', '));

    $("span.prime").mouseover(function() {
      $(this).addClass("hovered-prime");
    });

    $("span.prime").mouseout(function() {
      $(this).removeClass("hovered-prime");
    });

    var primeIndex = 0;
    var id = setInterval(function() {
      if (primeIndex >= primes.length) { clearInterval(id); }
      $("span." + primes[primeIndex]).addClass("hovered-prime");
      $("span." + primes[primeIndex - 1]).removeClass("hovered-prime");
      primeIndex += 1;
    }, 500);

    event.preventDefault();
  });
});
