//Implement a function which takes a sequence of objects and a property name,
// and returns a sequence containing the named property of each object.
//If an object is missing the property, you should just leave it as
// undefined/None in the output array.

function pluck(objs, name) {
const resultArray = objs.map(el => el[name]);
return resultArray;
}
