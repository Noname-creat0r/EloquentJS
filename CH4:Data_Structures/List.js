let arrayToList = array => {
  let list = {};
  for (const entry of array.reverse()) 
    if (array.reverse().indexOf(entry) == array.length - 1)
      list = {value: entry, rest: null};
    else
      list = { value: entry, rest: list};
  
  return list;
};

let listToArray = list => {
  let array = [];
  for (let node = list; node; node = node.rest)
    array.push(node.value);
  return array;
};

let prepend = (element, list) => new_list = { value: element, rest: list };

let nth = (list, index = 0) =>{
  for (let node = list, iterator = 0; node; node = node.rest, iterator++)
    if (iterator == index)
      return node.value;
}


console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30, 40]), 1));

