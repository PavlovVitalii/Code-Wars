// Write a method that accepts a list of objects of type Animal,
// and returns a new list. The new list should be a copy of the original list,
// sorted first by the animal's number of legs, and then by its name.

// If an empty list is passed in, it should return an empty list back.

function sortAnimal(animals) {
  const result = [...animals];
   animals.sort((a, b) => {
    if (a.numberOfLegs < b.numberOfLegs) return -1;
    if (a.numberOfLegs > b.numberOfLegs) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  });
  return result;
}
