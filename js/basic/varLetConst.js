const times = 4; // const is like let but cannot be changed

if (times > 3) {
  let letHello = 'let hello instead';

  var varHello = 'var hello instead';
}

console.log(letHello); // Error: letHello is not defined
console.log(varHello); // OK

// ------
// ------
// ------

console.log(varData); // Error: Cannot access 'letData' before initialization
console.log(letData); // OK, but with undefined value

var varData = 'qwe';
let letData = 'qwe';
