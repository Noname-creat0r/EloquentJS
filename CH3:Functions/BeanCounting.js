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
