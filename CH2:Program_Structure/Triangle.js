/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let triangle = "";
const size = 7, 
	symbol = '#';
for (let iterator = 0; iterator < size; iterator++)
  console.log(triangle += symbol);
