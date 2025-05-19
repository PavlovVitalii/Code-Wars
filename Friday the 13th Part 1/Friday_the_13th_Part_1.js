//It's Friday the 13th, and Jason is ready for his first killing spree!
//Create a function, killcount, that accepts two arguments: an array of
// array pairs (the conselor's name and intelligence - ["Chad", 2]) and
// an integer representing Jason's intellegence.

function killcount(counselors, jason) {
  let killCounselors = [];

  for (let i = 0; i < counselors.length; i++) {
    if (jason > counselors[i][1]) {
      killCounselors.push(counselors[i][0]);
    }
  }

  return killCounselors;
}
