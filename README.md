
# Домашня робота з теми "Об'єкти"

# Завдання 1

Напиши скрипт, який, для об'єкта `user`, послідовно:

- додає поле `mood` зі значенням `'happy'`
- замінює значення `hobby` на `'skydiving'`
- замінює значення `premium` на `false`
- виводить вміст об'єкта `user` в форматі `ключ:значення`, використовуючи
  `Object.keys()` і `for...of`

# Завдання 2

Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
Функція повертає число - кількість властивостей.

# Завдання 3

Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
форматі `"ім'я":"кількість задач"`.

# Завдання 4

Напиши функцію `countTotalSalary(employees)`, що приймає об'єкт зарплат. Функція
рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта,
переданого в функцію, має вигляд `"ім'я":"зарплата"`.

# Завдання 5

Напиши функцію `getAllPropValues(arr, prop)`, яка отримує масив об'єктів та ім'я
властивості. Повертає масив значень певної властивості `prop` з кожного об'єкта
в масиві.

# Завдання 6

Напиши функцію `calculateTotalPrice(allProdcuts, productName)`, яка отримує
масив об'єктів та ім'я продукту (значення властивості `name`). Повертає загальну
вартість продукту (ціна \* кількість).

# Завдання 7

Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт `account`
в якому необхідно реалізувати методи для роботи з балансом та історією
транзакцій.

# Завдання 8

Розстав відсутні `this` в методах об'єкта `account`.

```js
const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    discount = value;
  },
  showOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost;
    orders.push(order);
  },
};
```

# Завдання 9

Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

```js
const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};
```

# Завдання 10

Напиши функції, які за допомогою перебираючих методів масиву виконують наступні операції над масивом об'єктів користувачів

```js
let users =  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
```

# Підзавдання 1

Отримати масив імен всіх користувачів (поле `name`).

# Підзавдання 2

Отримати масив об'єктів користувачів за кольором очей (поле `eyeColor`).

# Підзавдання 3

Отримати масив імен користувачів за статтю (поле `gender`).

# Підзавдання 4

Отримати масив тільки неактивних користувачів (поле `isActive`).

# Підзавдання 5

Отримати користувача (не масив) по `email` (поле `email`, він унікальний).

# Підзавдання 6

Отримати масив користувачів, які потрапляють у вікову категорію від `min` до
`max` років (поле `age`).

# Підзавдання 7

Отримати загальну суму балансу (поле `balance`) всіх користувачів.

# Підзавдання 8

Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

# Підзавдання 9

Масив імен (поле `name`) людей, відсортованих в залежності від кількості їх
друзів (поле `friends`)

# Підзавдання 10

Отримати масив всіх умінь всіх користувачів (поле `skills`), при цьому не має
бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.