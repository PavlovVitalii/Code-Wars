//Determine whether a non-negative integer number is colorful or not.
//263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different;
//  whereas 236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.
//So take all consecutive subsets of digits, take their products, and ensure
// all the products are different.

function colourful(number) {
  const strNum = number.toString();
  const products = new Set();

  for (let i = 0; i < strNum.length; i++) {
    let product = 1;

    for (let j = i; j < strNum.length; j++) {
      product *= parseInt(strNum[j], 10);

      if (products.has(product)) {
        return false;
      }

      products.add(product);
    }
  }

  return true;
}
