function sum(numbers){
  let summary = 0;
  for (let number of numbers)
    summary += number
  return summary;
}

function range(begin, end, step = 1){
  let array = [];
  if (begin > end && step === 1)
    step = -1;
  if (step < 0)
    for (let element = begin; element >= end; element += step)
      array.push(element);
  else 
    for (let element = begin; element <= end; element += step)
      array.push(element);
  return array;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
