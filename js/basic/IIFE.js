// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(() => {
  console.log('HELLO!')
})(); // will be executed immediately

(() => {
  console.log('HELLO');
}); // need to call first to execute this
