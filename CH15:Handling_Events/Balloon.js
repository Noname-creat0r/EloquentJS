/*Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 10 percent.

When that works, add a feature where, if you blow up the balloon past a certain size, it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed (so that you can’t inflate or deflate the explosion).*/

<!doctype html>

<p>🎈</p>

<script>
  // Initializing some balloon params 
  const balloon = document.querySelector("p"),
        initialSize = 1, 
        limitSize = 5,
        inflatingIndex = 1;
  balloon.style.fontSize = initialSize + "em";
  window.addEventListener("keydown", resize);
  
  // Main event function
  function resize(event){
    // Getting number from "fontSize" style of the balloon
    let currentSize = Number((/\d+/).exec(balloon.style.fontSize.toString())[0]);
    // making sure that there is no scrolling for key arrows 
    event.preventDefault(); 
    
    switch(event.code){
      case "ArrowUp":
        if (currentSize + 1 > limitSize){
      	  balloon.innerHTML = "💥";
          window.removeEventListener("keydown", resize);
          setTimeout(() =>  balloon.remove(balloon), 1200);
        }
        else 
          balloon.style.fontSize = (currentSize + inflatingIndex) + "em";
        break;
      case "ArrowDown":
        if (currentSize - 1  < initialSize)
          console.log("Hey, you should inflate this balloon!");
        else 
          balloon.style.fontSize = (currentSize - inflatingIndex) + "em";
        break;
    }
  }
  
</script>
