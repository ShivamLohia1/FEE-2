// let fruits = [
//     { name: "Apple", price: 100, inStock: true },
//     { name: "Banana", price: 40, inStock: false },
//     { name: "Mango", price: 150, inStock: true },
//     { name: "Orange", price: 80, inStock: true },
//     { name: "Cherry", price: 200, inStock: false }
// ];

// let maxP = -Infinity;
// let mostFruit= null;

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].inStock && fruits[i].price > maxP) {
//         maxP = fruits[i].price;
//         mostFruit = fruits[i];
//     }
// }

// if (mostFruit) {
//     console.log("Most expensive available fruit:", mostFruit.name);
// } else {
//     console.log("No fruit available.");
// }

// #2

// let people = [
//     {name:"P1",age:19,govt:false},
//     {name:"P2",age:21,govt:true},
//     {name:"P3",age:17,govt:true},
//     {name:"P4",age:50,govt:true},
//     {name:"P5",age:25,govt:false}
// ]

// for(let i=0;i<people.length;i++){
//     if(people[i].age>=18&&people[i].govt){
//         console.log(people[i].name,"is eligible for vote and also is in govt sector.")
//     }
// }

// #3

// let arr = [1,2,3,4,5,6]
// let arr2 = [4,5,6,7,8]

// let arr3 = []
// for(let i = 0; i<arr.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr[i]==arr2[j]){
//             arr3.push(arr[i]);
//         }
//     }
// }

// console.log(arr3)

// //method 2:

// let arr4 = arr.filter((element)=>arr2.includes(element))
// console.log(arr4)

// #4

// let arr = [1,2,5,7,19,17]
// let max =arr[0]
// let index = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//         index = i
//     }
// }
// console.log(index);

// #5

// let arr = [1, 2, 3, 4, 1, 4, 3, 6, 7, 8, 1, 5];

// for (let i = 0; i < arr.length; i++) {
//     let frequency = 0;
//     let alreadyCounted = false;

    
//     for (let j = 0; j< i; j++) {
//         if (arr[i] == arr[j]) {
//             alreadyCounted = true;
//             break;
//         }
//     }

//     if (!alreadyCounted) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 frequency++;
//             }
//         }
//         console.log("Frequency of", arr[i], "=", frequency);
//     }
// }

// #6

// let arr = [1, 2, 3, 4, 1, 4, 3, 6, 7, 8, 1, 5];

// for (let i = 0; i < arr.length; i++) {
//     let frequency = 0;
//     let alreadyCounted = false;

    
//     for (let j = 0; j< i; j++) {
//         if (arr[i] == arr[j]) {
//             alreadyCounted = true;
//             break;
//         }
//     }

//     if (!alreadyCounted) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 frequency++;
//             }
//         }
//         console.log("Frequency of", arr[i], "=", frequency);
//     }
// }

// // method 2

// let freq = {}; //empty object
// for(let i = 0;i<arr.length;i++){
//     freq[arr[i]] = (freq[arr[i]]||0)+1;
// }
// console.log(freq);