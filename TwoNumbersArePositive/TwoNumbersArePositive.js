//Your job is to write a function, which takes three integers a, b, and c as arguments,
//and returns True if exactly two of of the three integers are positive numbers (greater than zero),
//and False - otherwise.

function twoArePositive(a, b, c) {
  return [...arguments].filter( el => el > 0).length == 2; 
}

