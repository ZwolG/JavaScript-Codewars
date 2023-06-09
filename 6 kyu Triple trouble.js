/*
Triple trouble

DESCRIPTION:
Write a function

triple_double(num1, num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
triple_double(451999277, 41177722899) == 1
# num1 has straight triple 999s and num2 has straight double 99s

triple_double(1222345, 12345) == 0
# num1 has straight triple 2s but num2 has only a single 2

triple_double(12345, 12345) == 0

triple_double(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
  num1 = num1.toString().split('');
  num2 = num2.toString().split('')

  triples = [];
  for(let i = 0; i < num1.length; i++){
    if (num1[i] === num1[i + 1] && num1[i] === num1[i + 2]){
      triples.push(num1[i]);
    } 
  }
  
  doubles = [];
  for(let i = 0; i < num2.length; i++){
    if (num2[i] === num2[i + 1]){
      doubles.push(num2[i]);
    } 
  }
  const intersection = triples.filter(el => doubles.includes(el));
  return intersection. length > 0 ? 1 : 0;
} 
