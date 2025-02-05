// array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.push(7) //add element at the end
// console.log(myArr);

// myArr.pop() //remove last element
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //add element at the start
// myArr.shift() //remove element from the start
// console.log(myArr);

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); //3

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const mynew1 = myArr.slice(1, 3); //copy elements from index 1 to 3

console.log(mynew1);

console.log("B ", myArr);

const mynew2 = myArr.splice(1, 3); //remove 3 elements starting from index 1
console.log(mynew2);
console.log("C ", myArr);
a