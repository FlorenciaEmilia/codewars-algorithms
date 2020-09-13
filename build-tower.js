/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

//My Solution:
function towerBuilder(nFloors) {
  let tower = [];
  let i = 1;
  while (tower.length < nFloors) {
    tower.push("*".repeat(i));
    i += 2;
  }
  let space = " ";
  for (let i = tower.length - 2; i >= 0; i--) {
    tower[i] = space + tower[i] + space;
    space += " ";
  }
  return tower;
}
