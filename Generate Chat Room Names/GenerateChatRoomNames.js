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
  let usersCopy = [...users];
  let result = [];
  const rexName = /^[a-zA-Z]+/;
  const rexLastName = /[a-zA-Z]+$/;

  usersCopy.forEach((element, index) => {
    const arrWithoutElement = [
      ...usersCopy.slice(0, index),
      ...usersCopy.slice(index + 1, usersCopy.length),
    ];

    const name = rexName.exec(element)[0];
    const repeatNames = arrWithoutElement.filter(
      (e) => name === rexName.exec(e)[0]
    );

    result = [...result, ...repeatNames];
  });

  if (result.length !== 0) {
    usersCopy = usersCopy.filter((e) => !result.includes(e));
    result.sort();
    result.forEach((element, index) => {
      for (let j = index + 1; j < result.length; j++) {
        if (rexName.exec(result[index])[0] === rexName.exec(result[j])[0]) {
          if (
            rexLastName.exec(result[index])[0][0] !==
            rexLastName.exec(result[j])[0][0]
          ) {
            result[index] = `${result[index].split(" ")[0]} ${
              rexLastName.exec(result[index])[0][0].toUpperCase()
            }`;
            result[j] = `${result[j].split(" ")[0]} ${
              rexLastName.exec(result[j])[0][0]
            }`;
          }
        }
      }
    });
  }

  usersCopy.forEach((e) => {
    result.push(
      `${rexName.exec(e)[0][0]}${rexName.exec(e)[0].slice(1).toLowerCase()}`
    );
  });
  usersCopy = [];
  return result.sort();
}
//console.log(generateChatRoomNames(["JOE"]));
//console.log(generateChatRoomNames(["Joe Bloggs"]));
//console.log(generateChatRoomNames(["Joe Bloggs", "John Smith"]));
// console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe"]));
// console.log(
//   generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"])
// );
// console.log(
//   generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"])
// );
console.log(
  generateChatRoomNames([
    "Joe Bloggs",
    "John Smith",
    "Jane Doe",
    "Jane Bloggs",
    "John Scott",
  ])
);
