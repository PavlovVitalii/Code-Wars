// Given three arrays of integers, return the sum of elements that are common in all three arrays.

function common(a, b, c) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    const indexB = b.indexOf(a[i]);
    const indexC = c.indexOf(a[i]);

    if (b.indexOf(a[i]) > -1 && c.indexOf(a[i]) > -1) {
      sum += a[i];
      b.splice(b.indexOf(a[i]), 1);
      c.splice(b.indexOf(a[i]), 1);
    }
  }
  return sum;
}

