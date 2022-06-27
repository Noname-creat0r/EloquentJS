/*Currently, the only way to assign a binding a value is define. This construct acts as a way both to define new bindings and to give existing ones a new value.

This ambiguity causes a problem. When you try to give a nonlocal binding a new value, you will end up defining a local one with the same name instead. Some languages work like this by design, but I’ve always found it an awkward way to handle scope.

Add a special form set, similar to define, which gives a binding a new value, updating the binding in an outer scope if it doesn’t already exist in the inner scope. If the binding is not defined at all, throw a ReferenceError (another standard error type).*/


specialForms.set = (args, scope) => {
  if (args.length < 2)
    throw new SyntaxError("Set needs 2 arguments")
  let name = args[0].name, value = evaluate(args[1], scope);
  for (let outerScope = scope; outerScope; outerScope = Object.getPrototypeOf(outerScope)){
    if (Object.prototype.hasOwnProperty.call(outerScope, name))
      return outerScope[name] = value;
  }
  throw new ReferenceError(`There is no binding ${name}!`);   
  
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
