
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter number');
  if (input === null) break;
  
  input = Number(input);
  if (isNaN(input)) {
    alert('Not a number');
    continue;
  }

  numbers.push(input);
} while (true);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Total is ${total}`);
}