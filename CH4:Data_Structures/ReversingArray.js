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

