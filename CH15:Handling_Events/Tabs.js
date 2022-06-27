/*In this exercise you must implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed interface showing the child elements of that node. It should insert a list of <button> elements at the top of the node, one for each child element, containing text retrieved from the data-tabname attribute of the child. All but one of the original children should be hidden (given a display style of none). The currently visible node can be selected by clicking the buttons.

When that works, extend it to style the button for the currently selected tab differently so that it is obvious which tab is selected.*/

<tab-panel>
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</tab-panel>
<script>
  function asTabs(node) {
    let tabs = [];
    for (const child of node.children){
      let button = document.createElement("button");
      button.innerHTML = child.getAttribute("data-tabname");
      let tab = {button, child};
      tabs.push(tab);
      button.addEventListener("click", () => select(tab));
    }
    
    let tabList = document.createElement("div");
    for (let {button} of tabs) 
      tabList.appendChild(button);
    node.insertBefore(tabList, node.firstChild);
    
    function select(selectedTab){
      for (let tab of tabs){
        let selected = tab == selectedTab;
        tab.child.style.display = selected ? "" : "none";
        tab.button.style.background = selected ? "beige" : "";
      }
    }
    
    select(tabs[0]);
  }
  asTabs(document.querySelector("tab-panel"));
</script>
