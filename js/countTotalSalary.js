
const countTotalSalary = function (employees) {
    const salaries = Object.values(employees);
    const totalSalary = salaries.reduce((total, salary) => total + salary, 0);
    return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    })
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    })
); // 400