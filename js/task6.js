
let total = 0;

while (true) {
  let input = prompt('Enter number');
  
  if (input === null) {
    alert(`Total is ${total}`);
    break;
  }
  
  let number = Number(input);
  
  if (isNaN(number)) {
    alert('Response isn`t a number!');
  } 
  else {
    total += number;
  }
}
