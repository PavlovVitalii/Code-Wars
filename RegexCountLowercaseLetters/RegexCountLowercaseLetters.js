// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    const lowercaseLetters = str.match(/[a-z]+/g);
    return lowercaseLetters === null ? 0 : lowercaseLetters.join("").length;
}

