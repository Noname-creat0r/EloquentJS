/*  Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

    Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method*/

// Loop-version
function every(array, test) {
  for (const entry of array)
      if (!test(entry))
        return false;
  return true;
}

// "Some"-version
let everyV2 = (array, test) => array.some(element => !test(element)) ? false : true;

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
