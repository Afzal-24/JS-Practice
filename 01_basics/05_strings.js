const name = "afzal";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("afzal-ak-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   afzal    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://afzal.com";

console.log(url.replace("afzal", "url"));

console.log(url.includes("afzal"));

console.log(gameName.split("-"));
