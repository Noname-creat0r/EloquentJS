/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.*/


function countBs(string){
  let counter = 0;
  for (let iter = 0; iter < string.length; iter++)
    if (string[iter] == 'B')
      counter++;
  return counter;
}

function countChar(string, char){
  let counter = 0;
  for (let iter = 0; iter < string.length; iter++)
    if (string[iter] == char)
     counter++;
  return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", 'k'));
