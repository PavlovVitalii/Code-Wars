// The aim of this Kata is to write a function which will 
// reverse the case of all consecutive duplicate letters in a string. 
// That is, any letters that occur one after the other and are identical.

// If the duplicate letters are lowercase then they must be 
// set to uppercase, and if they are uppercase then they need 
// to be changed to lowercase.

function reverseCase(string) {
  return string.replace(/(\w)(\1)+/g,(c)=>c[0]===c[0].toLowerCase()?c.toUpperCase():c.toLowerCase())
 }
 