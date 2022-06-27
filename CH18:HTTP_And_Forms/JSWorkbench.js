/*Build an interface that allows people to type and run pieces of JavaScript code.

Put a button next to a <textarea> field that, when pressed, uses the Function constructor we saw in Chapter 10 to wrap the text in a function and call it. Convert the return value of the function, or any error it raises, to a string and display it below the text field.*/

<!doctype html>
<script src="code/chapter/18_http.js"></script>

<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  const code = document.querySelector("#code"),
        output = document.querySelector("#output"),
        run = document.querySelector("#button");
  
  
  run.addEventListener("click", () => output.innerHTML = execute(code.value));
  
  function execute(code){
    try {
      let result = Function(code);
      return result();
    } catch(e){
      return e.message;
    }
  }
  
</script>
