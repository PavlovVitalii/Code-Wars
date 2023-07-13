//Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. 
//The X will be represented by 1's and the rest will be 0's.E.g.

function x(n) {
    const arr = new Array(n).fill(new Array(n).fill(0));
    let left = 0;
    let right = arr.length;
    let midle 
    for (let index = 0; index < arr.length; index++) {
        arr[index];
        
    }
    return arr;
 }

 console.log(x(1));