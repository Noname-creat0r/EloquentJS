/*We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

function isEven(number) {
  if (number === 0)
    return true;
  else if (number === 1)
    return false;
  else {
    if (number > 0)
      return isEven(number - 2); 
    else 
      return isEven(number + 2);
  } 
} 

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
