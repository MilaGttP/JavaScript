
const response = prompt("Enter your mood");
let message = '';

switch (response) {
    case 'angry': message = '😠'; break;
    case 'happy': message = '😊'; break;
    case 'sad': message = '😢'; break;
    case null: alert("Cancelled by user!");
    default: message = 'Error!';
}

alert(message);