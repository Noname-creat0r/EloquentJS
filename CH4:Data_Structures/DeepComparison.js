function deepEqual(a, b){
  if ((typeof a == "object" && a!= null) && (typeof b == "object" && b!= null)){
    const aKeys = Object.keys(a),
          bKeys = Object.keys(b);
    if (aKeys.length != bKeys.length) 
      return false;
    for (const key of aKeys)
      if (!bKeys.includes(key) || !deepEqual(a[key], b[key]))
        return false;

    return true;
  }
  else
    return a === b;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
