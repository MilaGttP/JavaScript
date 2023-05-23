
const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    friends: [
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'Bob', lastName: 'Smith' },
        { firstName: 'Alice', lastName: 'Wonderland' },
    ],
};

const user2 = {
    name: 'Juan',
    surname: 'Hernandez',
    friends: [
        { name: 'Maria', surname: 'Garcia' },
        { name: 'Carlos', surname: 'Rodriguez' },
        { name: 'Ana', surname: 'Lopez' },
    ],
};

function getFriends() {
    return this.friends;
}

console.group(`${user1.firstName}'s friends:`)
console.table(getFriends.call(user1));

console.group(`${user2.name}'s friends:`)
console.table(getFriends.call(user2));