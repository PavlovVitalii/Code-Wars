//The President's phone is broken
//He is not very happy.

//The only letters still working are uppercase E, F, I, R, U, Y.

//An angry tweet is sent to the department responsible for presidential phone maintenance.

//Kata Task
//Decipher the tweet by looking for words with known meanings.

//FIRE = "You are fired!"
//FURY = "I am furious."
//If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

//Notes
//The tweet reads left-to-right.
//Any letters not spelling words FIRE or FURY are just ignored
//If multiple of the same words are found in a row then plural rules apply -
//FIRE x 1 = "You are fired!"
//FIRE x 2 = "You and you are fired!"
//FIRE x 3 = "You and you and you are fired!"
//etc...
//FURY x 1 = "I am furious."
//FURY x 2 = "I am really furious."
//FURY x 3 = "I am really really furious."
//etc...
//Examples
//ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
//ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
//ex3. FYRYFIRUFIRUFURE = "Fake tweet."

// const fireAndFury = function (tweet) {
//   let fireCount = tweet.split("FIRE").length - 1;
//   let furyCount = tweet.split("FURY").length - 1;
//   const fireAndFury = tweet.split(/(^FIRE|^FURY)\w*/);
//   const indicesFire = [];
//   const indicesFury = [];
//   let posFire = tweet.indexOf("FIRE");
//   let posFury = tweet.indexOf("FURY");

//   let answer = [];

//   while (posFire !== -1) {
//     indicesFire.push(posFire);
//     posFire = tweet.indexOf("FIRE", posFire + 1);
//   }

//   while (posFury !== -1) {
//     indicesFury.push(posFury);
//     posFury = tweet.indexOf("FURY", posFury + 1);
//   }

//   for (let i = 0; i < ; i++) {
//     if (indicesFire[i] < indicesFury[i]) {
//       answer.push("You" + " and you ".repeat(fireCount - 1) + "are fired!");
//       fireCount = 0; // Reset fire count after processing
//     } else if (indicesFury[i] < indicesFire[i]) {
//       answer.push("I am " + "really ".repeat(furyCount - 1) + "furious.");
//       furyCount = 0; // Reset fury count after processing
//     }

//   }

//   // answer.push("You" + " and you ".repeat(fireCount - 1) + "are fired!");
//   // answer.push("I am " + "really ".repeat(furyCount - 1) + "furious.");

//   if (answer.length > 0) {
//     return answer.join(" ");
//   }

//   return "Fake tweet.";
// };

const fireAndFury = function (tweet) {
  const fireAndFury = tweet.match(/FIRE|FURY/g) || [];
  let fireCount = 0;
  let furyCount = 0;
  let result = [];

  if (fireAndFury.length === 0 || /[^FIREYUF]/.test(tweet)) {
    return "Fake tweet.";
  }

  for (let i = 0; i < fireAndFury.length; i++) {
    if (fireAndFury[i] === fireAndFury[i + 1] && i !== fireAndFury.length - 1) {
      fireAndFury[i] === "FIRE" ? fireCount++ : furyCount++;
      continue;
    }

    if (fireAndFury[i] === "FIRE") {
      result.push("You " + "and you ".repeat(fireCount) + "are fired!");
      fireCount = 0;
    } else if (fireAndFury[i] === "FURY") {
      result.push("I am " + "really ".repeat(furyCount) + "furious.");
      furyCount = 0;
    }
  }

  return result.join(" ");
};
console.log(fireAndFury("FURYYYFIREYYFIRE"));
console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"));
console.log(fireAndFury("FYRYFIRUFIRUFURE"));
console.log(fireAndFury("FURY"));
console.log(fireAndFury("FIRE"));
console.log(fireAndFury("AAFIREBBFURYCC"));
