
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    city: 'New York',
    country: 'USA',
};

function getUserInfo(user, { prefix = '' } = {}) {
    const { firstName, age, city } = user;
    return `${prefix} ${firstName}, ${age} years old, from ${city}`;
}

console.log(getUserInfo(user));
console.log(getUserInfo(user, { prefix: 'User info:' }));