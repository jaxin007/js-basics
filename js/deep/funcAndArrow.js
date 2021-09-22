function commonFunction(...args) {
  console.log(this); // global object
  console.log(args); // all spread arguments
}

const arrowFunction = (arg) => {
  console.log(this); // empty object because arrow functions does not have their own this
  console.log(arg); // only first argument
}

commonFunction(1, 3, 4, 5, 6);

arrowFunction(1, 1, 1);
