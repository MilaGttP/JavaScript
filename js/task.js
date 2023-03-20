
const salary = Number(prompt("Enter your salary"));
const premium = salary * 0.15;
const tax = (salary + premium) * 0.1;
const remainder = salary + premium - tax - 190;
alert(`Remainder is ${remainder}`);