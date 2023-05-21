
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;


console.table(user);

for (const item of Object.keys(user)) {
    console.log(item);
}