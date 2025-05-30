//Write an algorithm that will identify valid IPv4 addresses in dot-decimal
//  format. IPs should be considered valid if they consist of four octets,
// with values between 0 and 255, inclusive.

function isValidIP(str) {
  const octets = str.split(".");
  if (octets.length !== 4) {
    return false;
  }
  for (let i = 0; i < octets.length; i++) {
    if (octets[i].length > 1 && /^[\s0]|\s$|[a-z]/.test(octets[i])) {
      return false;
    }

    const num = parseInt(octets[i], 10);

    if (isNaN(num) || num < 0 || num > 255) {
      return false;
    }
  }
  return true;
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("12.34.56"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("256.1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123,45,67,89"));
console.log(isValidIP("1e0.1e1.1e2.2e2"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("1.2.3.4 "));
console.log(isValidIP("12.34.56.-7"));
console.log(isValidIP("1.2.3.4\n"));
console.log(isValidIP("\n1.2.3.4"));
