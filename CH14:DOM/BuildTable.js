/*Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names.

Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data.

Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.

Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".*/

<!doctype html>

<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  let table = document.createElement("table");
  
  // Initializing table headers
  Object.getOwnPropertyNames(MOUNTAINS[0]).map(key => {
    let header = document.createElement("th");
    header.innerHTML = key;
    table.appendChild(header);
  });
  
  // Initializing table body
  for (const mountain of MOUNTAINS){
    let row = document.createElement("tr");
    for (const key of Object.keys(mountain)){
      let tableCell = document.createElement("td");
      tableCell.innerHTML = mountain[key];
      if (!isNaN(mountain[key]))
        tableCell.style.textAlign = "right";
      else
        tableCell.style.textAlign = "center";
      row.appendChild(tableCell);
    }
    table.appendChild(row);
  }
  
  // Adding table to DIV
  let tableDiv = document.getElementById("mountains");
  tableDiv.appendChild(table);
</script>
