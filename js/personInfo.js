
const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    city: 'New York',
};

function personInfo(person) {
    const {
        name,
        age,
        email,
        city
    } = person;

    const newPerson = {
        fullName: `${name}, ${age}`,
        contact: `${email}, ${city}`
    };

    return newPerson;
}

console.log(personInfo(person));