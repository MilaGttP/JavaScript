
const array = ["Python", "C++", "C#", "PHP"];
let toFind = "JavaScript";

let message = `${toFind} is found!`;

if (!array.includes(toFind)) {
    message = `${toFind} isn't found, adding...`;
    array.push(toFind);
}

console.log(message);
console.log(`Array: ${array}`)