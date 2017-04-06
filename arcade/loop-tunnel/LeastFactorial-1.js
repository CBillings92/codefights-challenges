/*
  Create a function that finds the smallest
  number produced by a factorial that is greater
  than the given number
  ex: For n = 17, the output should be
    leastFactorial(n) = 24.

    17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).
*/

function leastFactorial(n) {
  var store = 1; // stare value of factorial
  var i = 1; // initialize interator
  // loop until factorial number is
  // greater than given number
  while (store < n) {
    store = store * i // factorial math
    i++ // iterate
  }
  return store;
}
