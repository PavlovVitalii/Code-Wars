//In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

//Notes
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  const arrNumbers = numbers.split(" ").map((item) => Number(item));
  const minNumber = Math.min(...arrNumbers);
  const maxNumber = Math.max(...arrNumbers);
  return `${maxNumber} ${minNumber}`;
}
