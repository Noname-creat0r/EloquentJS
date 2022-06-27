/*In this exercise, I want you to implement a mouse trail. Use absolutely positioned <div> elements with a fixed size and background color (refer to the code in the “Mouse Clicks” section for an example). Create a bunch of such elements and, when the mouse moves, display them in the wake of the mouse pointer.*/

<!doctype html>

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  const amount = 25;
  let trailElements = [];
  
  for (let i = 0; i < amount; i++){
    let element = document.body.appendChild(document.createElement("div"));
    element.className = "trail";
    trailElements.push(element);
  }
  
  let lastPos, rest = null;
  window.addEventListener("mousemove", event => {
    for (let element of trailElements){
      setTimeout(() => {
         element.style.top = event.clientY + "px";
      	 element.style.left = event.clientX + "px";
      }, Math.floor(Math.random() * 100));
    }
    
  });
  
</script>
