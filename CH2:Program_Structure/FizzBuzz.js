for (let number = 1, output = ""; number < 101; number++) {
  if (number % 3 === 0) output += "Fizz";
  if (number % 5 === 0) output += "Buzz";
  console.log(output || number);
  output = "";
}
