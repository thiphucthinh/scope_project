/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// Option 1
// const arrowMirrorArray = array => {
//   let newArr = [];
//   for (let el of array) {
//     newArr.push(el);
//   }
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArr.push(array[i]);
//   }
//   return newArr;
// }

//Option 2
const arrowMirrorArray = arr => [...arr, ...arr.slice().reverse()];
// Or const arrowMirrorArray = arr => [...arr.concat(...arr.slice().reverse())];

// Examples
console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
