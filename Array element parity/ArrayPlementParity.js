// In this Kata, you will be given an array of integers whose elements
// have both a negative and a positive value, except for one integer that
// is either only negative or only positive. Your task will be to find that integer.

function solve(arr) {
  let arr2;
  for (let i = 0; i < arr.length; i++) {
    arr2 = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
    console.log(arr2.includes(arr[i]));
    if (!arr2.includes(-arr[i]) || arr2.includes(arr[i])) {
      return arr[i];
    }
  }
}

