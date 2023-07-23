//Find the sum of all multiples of n below m

//   Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n, m) {
  let sum = 0;

  if (m <= 0) {
    return "INVALID";
  }

  for (let i = n; i < m; i++) {
    sum += i % n === 0 ? i : 0;
  }

  return sum;
}


