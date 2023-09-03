/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

// Option 1
function sandwichMaker() {
  let ingredient = ["tomato"];

  return function addIngredient(newIngredient) {
    ingredient.push(newIngredient);
    return `One sanwich with ${ingredient.join(" and ")}`;
  }
}


// Option 2
// const sandwichMaker = function() {
//   const ingredient = 'tomato';
//   let sandwichWithIngredients = `One sandwich with `+ ingredient;

//   return function(newIngredient){
//     sandwichWithIngredients = sandwichWithIngredients + " and " + newIngredient;
//     return sandwichWithIngredients;
//   }
// }

// Example
let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

//Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
console.log(sandwich2("pb")) // => "One sandwich with tomato and pb"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
