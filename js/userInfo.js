
const user = {
    name: 'John',
    age: 36
}

function userInfo({ name, age }) {
    return `User name: ${name}, age: ${age}`;
};

console.log(userInfo(user));