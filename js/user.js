
const user = {
    name: 'John',
    balance: 1000,
};

function addMoney(amount) {
    this.balance += amount;
};

function getBalance() {
    return this.balance;
}

const users = [
    { name: 'Alice', balance: 500 },
    { name: 'Bob', balance: 200 },
    { name: 'Charlie', balance: 1000 },
];

users.forEach(function (user) {
    addMoney.call(user, 100);
    console.table(getBalance.call(user));
});

const biggerBalance = users.filter(function (user) {
    return user.balance > 700;
});

const onlyBalance = users.map(function (user) {
    return user.balance;
});