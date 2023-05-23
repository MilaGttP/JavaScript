
const car = {
    brand: 'Audi',
    model: 'A4',
    year: 2022,
    speed: 200,

    showInfo() {
        console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year}`);
    },
};

const location = {
    city: 'Київ',
    distance: 300,
};

function showTime() {
    const time = location.distance / car.speed;
    console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${location.city} за ${time} годин`);
}

car.showInfo();
showTime();
