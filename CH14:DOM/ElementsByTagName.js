<!doctype html>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  //My first version
  /*function byTagName(node, tagName) {
    let tagArray = [];
    for (let child of node.childNodes) {
      if (child.nodeType == Node.ELEMENT_NODE){
        console.log(child.nodeName);
        if (child.nodeName.toLowerCase() == tagName.toLowerCase())
          tagArray.push(child);
        console.log(tagArray);
        tagArray.concat(byTagName(child, tagName));
      }
    }
    return tagArray;
  }*/
  
  // My second version
  function byTagName(node, tagName) {
   let tagArray = [];
    
   const checkInnerNode = node => {
     for (let child of node.childNodes)
       if (child.nodeType == Node.ELEMENT_NODE){
         if (child.nodeName.toLowerCase() == tagName.toLowerCase())
           tagArray.push(child);
         checkInnerNode(child);
       }
   }
   
   checkInnerNode(node);
   return tagArray;
  }
  

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2

</script>
