//Description:
//It was a long, hard voyage with many battles, but finally you've found Captain 
// Blackbeard's treasure room. It's full of treasure chests! But they all have 
// combination locks.
//The locks:
//Each lock has two or more numbers anywhere from 1 to 100 000. 
// They are labeled with letters, but the letters do not change (they're just labels). 
// Examples:
//A (number reel) B (number reel)
//E (number reel) R (number reel) Y (number reel)
//The Clues:
//Because Blackbeard had such a poor memory, he's written clues on the bottom of each
//  chest. Example:

//Clue: "A2B4C6"

//You figure out that if you divide each number by the greatest common factor, 
// it gives you the correct code to the chest. Examples:

// Clue: "A2B4C6"

// Gretest common factor = 2
// 2 / 2 = 1
// 4 / 2 = 2
// 6 / 2 = 3

// Code: "A1B2C3"

// More examples:

// Clue: "T3Y3U9E6" Code: "T1Y1U3E2"
// Clue: "M3H7" Code: "M3H7"
// Clue: "Y14U7I7P21 Code: "Y2U1I1P3"

// Task:
// Write a function treasureCode(), that accepts a String parameter and returns the correct code as a String.

// Input: String. Two or more letter number combinations. The letter will be one uppercase character A-Z. The number can be from 1 to 100 000.

// Output: String.


function treasureCode(clue) {
  // Split the clue into parts
  const parts = clue.match(/([A-Z])(\d+)/g);
  
  // Extract letters and numbers
  const letters = parts.map(part => part[0]);
  const numbers = parts.map(part => parseInt(part.slice(1), 10));
  
  // Calculate the greatest common divisor (GCD)
  const gcd = numbers.reduce((a, b) => {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  });
  
  // Create the code by dividing each number by the GCD
  const codeParts = numbers.map(num => num / gcd);
  
  // Combine letters and their corresponding codes
  let code = '';
  for (let i = 0; i < letters.length; i++) {
    code += `${letters[i]}${codeParts[i]}`;
  }
  
  return code;     
}