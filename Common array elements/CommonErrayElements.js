// Given three arrays of integers, return the sum of elements that are common in all three arrays.

function common(a, b, c) {
  let sum = 0;
  a.forEach((element) => {
    if (b.includes(element) && c.includes(element)) {
      sum += element;
    }
  });
  return sum;
}
