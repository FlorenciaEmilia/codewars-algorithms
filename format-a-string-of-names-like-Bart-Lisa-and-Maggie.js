/*
Format a string of names like 'Bart, Lisa & Maggie'.
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

//My solution:
function list(names) {
  return !names || names.length < 1
    ? ""
    : names.length > 1
    ? names
        .map((x) => x.name)
        .join(", ")
        .replace(/,(?=[^,]*$)/, " &")
    : names[0].name;
}
