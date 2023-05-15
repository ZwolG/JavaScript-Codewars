/*
The Vowel Code


DESCRIPTION:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function vows_to_num(c){
  return 'aeiou'.includes(c) ? 'aeiou'.indexOf(c) + 1 : c;
}

function encode(string) {
  return string.split('').map(item => vows_to_num(item)).join('');

}

function numsToChars(c){
  const obj = {1 : 'a', 2 : 'e', 3 : 'i', 4 : 'o', 5 : 'u'}
  return c in obj ? obj[c] : c;
}

function decode(string) {
  return string.split('').map(item => numsToChars(item)).join('');
}
