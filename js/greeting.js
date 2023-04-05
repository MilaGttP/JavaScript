
const greet = function(array, name) {
    if (!array.includes(name)) {
        let confirmMessage = confirm('Are u going to become ur client?');
        if (confirmMessage === null) {
            alert('We will wait for u');
        } else {
            array.push(name);
            alert('We are happy you with us');
        }
    } else {
        alert('We are happy u come back!');
    }
}

let clients = ['сергій', 'олег', 'віталій', 'анатолій'];
let name = prompt('Enter name');

greet(clients, name);