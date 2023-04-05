const myRootElement = document.getElementById("root");
// map()
const itemPrice = [10, 15, 30, 20, 7];
// const newPrice = itemPrice.map((price) => myRootElement.append(`£${price}`));
// console.log(newPrice);
// filter()
const filterdItem = itemPrice.filter((price) => price % 2 === 0);
console.log(filterdItem);

const cities = [
  "London",
  "Manchester",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "London",
];
const filterdCity = cities.filter((favouriteCity) =>
  favouriteCity.startsWith("Lo")
);
console.log(filterdCity);
const filterdPrice = filterdItem.map((price) =>
  myRootElement.append(`£${price}`)
);

//Sort()
const sortItem = itemPrice.sort((a, b) => a - b);
console.log(sortItem);

// concat()
const itemPrice2 = [10, 15, 30, 20, 7];
const itemPrice3 = [1, 14, 3, 0, 9];
const oneItem = [12233];
const concatinatedItem1 = itemPrice.concat(itemPrice2, itemPrice3);
const concatinatedItem2 = [...itemPrice, ...itemPrice3, ...itemPrice2];
console.log(concatinatedItem2);
const concatinatedItems = [...itemPrice2, ...oneItem, ...itemPrice3];
console.log(concatinatedItems);

// ? : ternary operator
const cities2 = ["London", "Lison", "Lile", "Leeds"];
const result = cities2.every((city) => city.startsWith("Lo"));
const result2 = cities2.some((city) => city.startsWith("Lo"));
const result3 = cities2.join("");
const result4 = itemPrice2.reduce((a, b) => a + b,100);
console.log(result4);

const arr2 = [1,2,3,4,5,6,7]
.fill(0, 0, 4)
console.log(arr2);