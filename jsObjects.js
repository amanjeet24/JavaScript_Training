let person=
{
    firstname:"John",
    lastname:"Kenedy",
    age:50,
    weight:60
}

//access the object properties

// console.log(person["firstname"]);  //or
// console.log(person.age);

//add a new property to the existing object

person["height"]=5.5; //or person.height=5.5;

console.log(person.height);

//update existing property
person.weight=65;
console.log(person.weight);

//remove property from object

delete person.age;
console.log(person.age);

console.log("**********************")
//for in loop to read all properties name and values

for(let x in person)
{
    console.log(x);  //only property names
    console.log(person[x]); //values
    console.log(x+"  "+person[x]); //names with values
}