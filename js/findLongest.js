
const findLongestWord = function (string) {
  string = string.split(' ');
  let longestWord = '';
  for(let i = 0; i < string.length; i++) {
    if (string[i].length > longestWord.length) {
        longestWord = string[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'