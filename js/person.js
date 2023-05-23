
const person = {
    name: 'John',
    age: 21,
    gender: 'male',
    introduce() {
        return `My name is ${this.name}, I'm ${this.age}, and I'm ${this.gender}`;
    },
    changeName(newName) {
        this.name = newName;
    }
};

console.log(person.introduce());
person.changeName.call(person, 'Tom');
console.log(person.introduce());