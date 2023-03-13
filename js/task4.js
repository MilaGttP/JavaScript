
let credits = 23580;
const pricePerDroid = 3000;

const quantity = prompt("Quantity of droids -> ");
if (quantity === null) console.log("Cancelled by user!");
else {
    const totalPrice = pricePerDroid * quantity;
    if (totalPrice > credits) console.log("Insufficient funds!");
    else {
        credits = credits - totalPrice;
        console.log(`You bought ${quantity} droids, you have ${credits} credits`);
    }
}