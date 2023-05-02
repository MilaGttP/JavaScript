# Домашня робота з теми "Spread / rest. Деструктуризація об'єктів та масивів"

#Завдання 1

Створіть функцію personInfo, яка приймає об'єкт в якості параметра та виконує деструктуризацію цього об'єкта, витягуючи з нього наступні поля: "name", "age", "email", "city". Потім використайте деструктуризовані значення для створення нового об'єкта з наступними полями: "fullName" (значення поля "name" додане до значення поля "age" через пробіл), "contact" (значення поля "email" додане до значення поля "city" через кому). Функція має повертати цей новий об'єкт.

Маємо наступний об'єкт:

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York',
};
```

Маєте отримати результат:

```javascript
contact: 'john.doe@example.com, New York';
fullName: 'John Doe, 30';
```

#Завдання 2

Напишіть функцію, яка приймає об'єкт, який містить інформацію про користувача -
ім'я, прізвище, електронну пошту та номер телефону. Функція повинна
використовувати деструктуризацію для отримання імені та прізвища користувача та
об'єкту, який містить електронну пошту та номер телефону. Функція повинна
повертати новий об'єкт, який містить імена та прізвище користувача, а також
масив, який містить електронну пошту та номер телефону користувача.

Крім того, використовуйте spread та rest оператори, щоб додати додаткові
елементи до масиву з електронною поштою та номером телефону.

```javascript
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  phone: '+1234567890',
  skype: 'johndoe',
  telegram: '@johndoe',
  twitter: '@johndoe',
};
```

#Завдання 3

Необхідно створити функцію, яка приймає будь-яку кількість аргументів (чисел) і
повертає максимальне значення серед них. Аргументи можуть бути передані як
окремими значеннями, так і в масиві.

```javascript
findMax(1, 4, 2, 8, 5); // поверне 8
findMax([1, 4, 2], 8, 5); // поверне 8
findMax(1, 4, [2, 8, 5]); // поверне 8
```

#Завдання 4

Уявімо, що ми маємо об'єкт з даними користувача:

```javascript
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York',
  country: 'USA',
};
```

Напишіть функцію getUserInfo, яка буде приймати об'єкт user та використовуючи
деструктуризацію, буде повертати рядок, що містить ім'я, вік та місто
користувача.

Також, функція повинна приймати додатковий об'єкт з параметрами, який може
містити параметр prefix, який буде доданий перед рядком з інформацією про
користувача. Якщо параметр prefix не переданий, то функція повинна повертати
рядок з інформацією про користувача без префіксу.


# Завдання 1

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

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
```

# Завдання 2

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

invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
```

# Завдання 3

Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

# Завдання 4

Ви отримали об'єкт даних з інформацією про продукти в інтернет-магазині:

```js
const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};
```

Напишіть функцію printProductInfo, яка приймає об'єкт product в якості параметра та друкує в консоль інформацію про цей продукт в наступному форматі:

```js
Назва: Ноутбук Lenovo IdeaPad 3
Категорія: Ноутбуки
Доступність: Так
Ціна: 15000 грн
```

Реалізуйте цю функцію, використовуючи деструктуризацію для отримання необхідних полів з об'єкту product.