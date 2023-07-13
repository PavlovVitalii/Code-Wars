//Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle.
//The X will be represented by 1's and the rest will be 0's.E.g.

function x(n) {
  const arr = [];
  let arrLength;

  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0;
    }
  }

  arrLength = arr.length - 1;

  for (let index = 0; index < arr.length; index++) {
    arr[index][index] = 1;
    arr[index][arrLength] = 1;
    arrLength--;
  }

  return arr;
}


