
const languages = ["1-Python", "2-C++", "3-C#", "4-PHP"];
const result = [];

for (let i = 0; i < languages.length; i++) {
  result.push(languages[i].split('-')[1]);
}

console.log(result);