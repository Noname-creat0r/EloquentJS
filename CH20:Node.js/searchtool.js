const path = require('path'), 
      fs = require('fs');

const expression = new RegExp(process.argv[2]),
      dir = process.argv[3] == undefined ? __dirname : process.argv[3];

// recursive version
function search(file){
  const stats = fs.statSync(file);
  if (stats.isDirectory()){
    for (const f of fs.readdirSync(file))
      search(file + '/' + f);
  } 
  else if (expression.test(fs.readFileSync(file, "utf-8")))
    console.log(file);  
}

search(dir);

// non - recursive version (callbacks) (my first version)
/*fs.readdir(dir, (err, files) => {
  if (err) 
    return `Unable to scan dir: ${dir}`;
    
  files.forEach(file => {
    fs.stat(String(dir + file), (err, stats) => {
	  if (err) {
	    console.error(err);
	    return;
 	  }
 	  
 	  if (expression.test(fs.readFile(file)) && stats.isFile())
        console.log(file);
    });
    
  })
});*/

