// Hoisting is JavaScript's default behavior of moving declarations to the top.

console.log(hoisting());  // return qwe
console.log(hoistingVariable); // OK but with undefined

function hoisting() {
  return 'qwe';
}

var hoistingVariable = 'qwe';
