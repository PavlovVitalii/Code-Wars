//Move the first letter of each word to the end of it,
//then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str.replace(/(\S)(\S+)/g, '$2$1ay');
}

