// == converts the variable values to the same type before performing comparison. This is called type coercion.

// === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.

console.log(1 == '1'); // true
console.log(1 === '1') // false

console.log(null == undefined); // true
console.log(null === undefined); // false
