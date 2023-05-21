
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
    const totalPrice = allProducts.reduce((total, product) => {
        if (product.name === productName) {
            return total + product.price * product.quantity;
        }
        return total;
    }, 0);
    return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800