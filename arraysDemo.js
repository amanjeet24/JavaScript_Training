//let cars=["saab", "volvo","BMW"];
    //OR
let cars=new Array("saab", "volvo","BMW");

console.log(cars);

//accessing element
console.log(cars[2]);

//changing value in array

cars[0]="Opel";
console.log(cars);

//different types of data in same array
let myarray=[100,"Welcome", 10.15, true];
console.log(myarray);

//objects in Array
let person1={
    name:"john",
    age:30
};
let person2={
    name:"David",
    age:40
};

let myarray1=[person1,person2];
console.log(myarray1);
console.log(myarray1[0]);

let fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//Looping elements in Array

// for(let i=0; i>=fruits.length-1; i++)
// {
//   console.log(fruits[i]);
// }

//for of loop
for (ele of fruits)
{
    console.log(ele);
}

console.log(typeof fruits);