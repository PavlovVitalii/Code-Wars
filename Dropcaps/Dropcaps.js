// DropCaps means that the first letter of the starting word of the paragraph should be
//in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String.
// Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

function dropCap(n) {
  const result = n.split(" ").map((el) => {
   return el.length > 2 ? el[0].toUpperCase() + el.slice(1).toLowerCase() : el;
  }).join(" ");
 
  return result;
}

