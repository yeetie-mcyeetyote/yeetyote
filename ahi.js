var spicyAhi = {

fishType:"ahi",
sauce:"sriracha & mayo",
price:100.00,
rice:"white",
ounces:8

};

var ammount = prompt("how much would you like to buy?");

var totalOunces = ammount * spicyAhi.ounces;

window.alert("buying " + totalOunces);

var totalDollar = ammount * spicyAhi.price;

window.alert("your total price:" + totalDollar);