/*
So Many Permutations!

DESCRIPTION:
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.
*/

function permutations(string) {
  if(string.length < 2){
    return [string];
  }
  let result = [];

  for(let i = 0; i < string.length; i++){
    let char = string[i];

    if(string.indexOf(char) != i){
      continue;
    }

    let leftover = string.slice(0, i) + string.slice(i + 1, string.length);
    for (let perm of permutations(leftover)){
      result.push(char + perm);
    }
    
  }
	return result;
}
