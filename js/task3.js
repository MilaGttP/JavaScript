
const ADMIN_PASSWORD = 'qwerty123';
let message;

const response = prompt("Password -> ");
if (response === null) message = "Cancelled by user!";
else if (response === ADMIN_PASSWORD) message = "Welcome!";
else message = "Access denied!";
alert(message);