let fruits=["Banana", "Orange", "Apple", "Mango"];

//toString() & join()

console.log(fruits.toString());
console.log(fruits.join("*"));

//pop()
console.log(fruits.pop());
console.log(fruits);

//push()

console.log(fruits.push("Kiwi"));

//shift()
console.log(fruits.shift());

//unshift()

console.log(fruits.unshift("Lemon"));

//delete elements from array

delete fruits[1];

//merging two array--- concat()

let arr1=[10, 20];
let arr2=["A","B", "C"];

console.log(arr1.concat(arr2));

//slice()
fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.slice(1));

//sort()
fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

//reverse()
fruits=["Banana", "Orange", "Apple", "Mango"];
console.log("Original..."+fruits);
fruits.reverse();
console.log("After reverse=..."+fruits);