let chessboard = "";
const width = 8,
 height = 8;

for (let h_iter = 0; h_iter < height; h_iter++){
  for (let w_iter = 0; w_iter < width; w_iter++)
    if (h_iter % 2 === 0) chessboard += " #";
    else chessboard += "# " 
  chessboard += '\n';
}

console.log(chessboard);
