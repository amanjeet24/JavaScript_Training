let s="Welcome";

//or   let s=new String();

//charAt()
console.log(s.charAt(2));

//concat()
console.log(s.concat("  to javascript programming").concat("  World"));

//replace()
s="Welcome to Javascript";
console.log(s.replace("Javascript", "java"));

//substring()
s="Welcome";
console.log(s.substring(0,3));

//toLowerCase() & toUpperCase()
s="WELcome";
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//split()
s="Welcome To JavaScript";
let arr=s.split(' ');
console.log(arr[0]);
console.log(arr[2]);

//trim()
s="  welcome  ";
console.log(s);
console.log(s.trim());

//Numbers
//let x=100;

//or let x=new Number(100);

let x=102;  //Integer value
let y=102.7  //decimal
let z=10e2; //exponencial value

console.log(x,y,z);

//isInteger()
x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x));
console.log(Number.isInteger(y));

//parseInt()  -convert a string to Number
s="12345";
console.log(typeof(s));
console.log(typeof(Number.parseInt(s)));

//parseFloat()
s="123.56";
console.log(typeof(Number.parseFloat(s)));

//toString()--number to string
let n=12345;
console.log(typeof(n));
console.log(typeof(Number.toString(n)));