// Find the first character that repeats in a String and return that character.

function firstDup(s) {
  const str = s.split("");
  for(let i = 0; i < str.length; i++){
    const newStr = s.slice(0, i) + s.slice(i + 1);
    if (newStr.indexOf(str[i]) >= 0) {
      return str[i];
    }
  }
  return undefined;
}


