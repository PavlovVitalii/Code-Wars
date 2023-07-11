// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// Zero alone is fine, don't worry about it. Poor guy anyway.

function noBoringZeros(n) {
  let str = n.toString().replace(/0+$/, "");
  if (str.length <= 1) {
    return n;
  }
  return parseInt(str);
}

console.log(noBoringZeros(0));
