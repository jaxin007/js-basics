// The JavaScript this keyword refers to the object it belongs to.
// It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

const globalVariable = 'some value';

(function printThis() {
  console.log(this);
})(); // global object
