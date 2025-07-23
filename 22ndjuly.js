function display(sum){
    console.log(sum);
}
function calculate(a,b,fn){
    let sum=a+b;
    fn(sum);
}
calculate(4,5,display);

// //Object
// //Object is collection of pair (key,value)
// //object literal
// const person={};
// person.firstName="Raju";
// person.lastName="Mohan";
// person.age=52;
// person.salary=234455;
// console.log(person);
// console.log(person.firstName);//first method to access specific key's value
// //new key
// const person2={};
// person2.firstName="Mohan";
// person2.lastName="Raj";
// person2.age=40;
// person2.salary=234455;
// console.log(person2);
// console.log(person2['age']);//second method to access specific key's value

// const person={
//     firstName:"Mohan",
//     lastName:"Raj",
//     age:23,
//     salary:50000,
//     // fullName:function(){
//     //     console.log(this.firstName+' '+this.lastName)
//     // }
// }
// // person.fullName();

// const person2={
//     firstName:"Ravi",
//     lastName:"Kumar",
//     age:24,
//     salary:50000,
    
// }
// function fullName(state,city){
//         // console.log(this.firstName+' '+this.lastName)
//         console.log(`${this.firstName} ${this.lastName} ${city} ${state}`)
//     }
// // person2.fullName();
// // fullName.call(person);
// // fullName.call(person2);

// fullName.call(person,"Punjab","Mohali");
// fullName.call(person2,"Punjab","Mohali");


// const person1={
//     firstName:"Mohan",
//     lastName:"Raj",
//     age:23,
//     salary:50000,
// }
// const person2={
//     firstName:"Ravi",
//     lastName:"Kumar",

// }
// console.log(person1)
// Object.assign(person1,person2)
// console.log(person1);

const fruits=[
    {name:"Apple",q:500},
    {name:"Banana",q:200},
    {name:"Mango",q:150},
    {name:"Orange",q:300},
    {name:"Kiwi",q:190},
    {name:"Grapes",q:350},
]

function filterFun({q}){
    return q > 200 ? "OK":"LOW";
}

//groupBy()
let result=Object.groupBy(fruits,filterFun);
console.log(result);