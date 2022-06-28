/*Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.*/

function reverseArray(array) {
  let reversed_array = [];
  for (let i = array.length - 1; i >= 0; i--)
    reversed_array.push(array[i]);
  return reversed_array;
}

function reverseArrayInPlace(array) {
  // C-style version
  /*
  let tmp;
  for (let i = 0; i <= array.length / 2; i++){
    tmp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = tmp;
  }
  */
  
  // Strange version
  array.sort(a => 1);
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

