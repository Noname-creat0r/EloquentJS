/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

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
