// Create a function that checks if the first argument n is 
// divisible by all other arguments (return true if no other arguments)

const isDivisible = (...args) =>
  args.slice(1).every(el => args[0] % el === 0);

