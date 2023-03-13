
const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

let response = prompt("Input country");
response = response.toLowerCase();
switch (response) {
    case "china":
        console.log(`Shipping to China will cost ${china} credits`);
        break;
    case "chile":
        console.log(`Shipping to Chile will cost ${chile} credits`);
        break;
    case "australia":
        console.log(`Shipping to Australia will cost ${australia} credits`);
        break;
    case "india":
        console.log(`Shipping to India will cost ${india} credits`);
        break;
    case "jamaica":
        console.log(`Shipping to Jamaica will cost ${jamaica} credits`);
        break;
    default:
        alert("There isn`t shipping to your country");
}