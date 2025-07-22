// let s='Hello World';
// s[0]='M';
// console.log(s);//string is mutable, so this won't change the string1321
// let color = 'Apple,Banana,Mango';
// console.log(color.slice(-4)); // ['Apple', 'Banana', 'Mango']
// let x = "6";
// console.log(x.padStart(3, '*'));
// console.log(x.padEnd(5, '0'));
// let s1 = "Hello world";
// s1[0] = "M";
// console.log(s1);

let fruits = "Apple,Banana,Mango";
console.log(fruits.slice(-4));   //prints "SUBSTRING"   (-ve: starts from last)

let x="6";
console.log(x.padStart(3,"*"));
console.log(x.padEnd(5,"#"));

//indexOf():   return index of 1st occurance, otherwise return -1
let s2 = "Hello I am here, locate me and find my location.Hello";
console.log(s2.indexOf("locate"));

//lastIndexOf(): return index of last occurance, otherwise return -1
console.log(s2.lastIndexOf("Hello"));

//includes():  return true if string is present, else return false
console.log(s2.includes("Hello"));