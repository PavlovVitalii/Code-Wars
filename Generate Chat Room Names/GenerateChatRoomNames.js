// You are writing a chat room app. Users have fed back that seeing everyone's
// full names on the screen creates too much noise, and have asked for it to be reduced.
// However, we still want to be able to uniquely identify everyone.
// The team have come up with a few rules that will hopefully help in solving this problem!

// If only one person in the chat room has a specific first name, only their first name will be written out.

// John Smith -> John

// If two or more people have a specific first name, but don't share a second name initial,
// their first name and second name initial will be written out.

// John Smith -> John S
// John Adams -> John A

// Finally, if two or more people have a specific first name and last name initial,
// their full name will be written out.

// John Smith -> John Smith
// John Simms -> John Simms

// To help tidy up the output, management have also asked that the chat room list should be alphebetised,
// by the users screen names and should all be in Title Case.

function generateChatRoomNames(users) {
  const firstNames = [];
  const lastNames = [];
  const result = [];

  users.forEach((element) => {
    const arrFromElement = element.split(" ");
    firstNames.push(arrFromElement[0]);
    lastNames.push(arrFromElement[1]);
  });

  firstNames.forEach((element, index) => {
    const arrWithoutElement = [
      ...firstNames.slice(0, index),
      ...firstNames.slice(index + 1, firstNames.length),
    ];

    if (arrWithoutElement.length > 0 && arrWithoutElement.includes(element)) {
    
      if (
        lastNames[index][0] ===
        lastNames[arrWithoutElement.indexOf(element) + 1][0]
      ) {
    
        
        result.push(
          `${element[0] + element.toLowerCase().slice(1)} ${lastNames[index]}`
        );
      
      } else {
        result.push(
          `${element[0] + element.toLowerCase().slice(1)} ${
            lastNames[index][0]
          }`
        );
      }
    } else {
      result.push(`${element[0] + element.toLowerCase().slice(1)}`);
    }
  });

  return result.sort();
}

//console.log(generateChatRoomNames(["Joe Bloggs"]));
//console.log(generateChatRoomNames(["Joe Bloggs", "John Smith"]));
// console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe"]));
console.log(
  generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"])
);
// console.log(
//   generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"])
// );
// console.log(
//   generateChatRoomNames([
//     "Joe Bloggs",
//     "John Smith",
//     "Jane Doe",
//     "Jane Bloggs",
//     "John Scott",
//   ])
// );
