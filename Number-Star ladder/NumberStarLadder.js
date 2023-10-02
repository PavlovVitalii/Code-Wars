// Using n as a parameter in the function pattern, where n>0,
//complete the codes to get the pattern (take the help of examples):

//Note: There is no newline in the end (after the pattern ends)

//Examples
//pattern(3) should return "1\n1*2\n1**3", e.g. the following:

function pattern(n) {
  var output = "";

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      output = "1\n";
      continue;
    }
    output +=
      i === n - 1 ? `1${"*".repeat(i)}${i + 1}` : `1${"*".repeat(i)}${i + 1}\n`;
  }
  return output;
}

