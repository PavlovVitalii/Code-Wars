// Please write a function that sums a list, but ignores any duplicate items in the list.
// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
  let result = 0;
  numList.forEach((element, index) => {
    let arr = [...numList.slice(0, index),...numList.slice(index + 1, numList.length)];
    if (!arr.includes(element)) {
      result += element;
    }
  });
  return result;
}
