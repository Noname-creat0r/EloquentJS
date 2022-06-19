function deepEqual(a, b){
  if ((typeof a == "object" && a!= null) && (typeof b == "object" && b!= null)){
    for (const key of Object.keys(a))
      if (a.key == b.key){
        console.log(`${a[key]}  ${b[key]}`);
        return false;
      }
    return true;
  }
  else
    return a === b;
}

let obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
