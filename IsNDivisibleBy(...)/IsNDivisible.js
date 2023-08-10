// Create a function that checks if the first argument n is 
// divisible by all other arguments (return true if no other arguments)

function isDivisible(n, ...arg){
    return arg.every(el => n % el === 0);
  }