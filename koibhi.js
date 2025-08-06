//join()--->it join array based on given character
// let arr=[34,56,78,90,12,22,54,76,10]
//let str=arr.toString();
// let str=arr.join(',');
// console.log(str);


//flat()----->it is used to flaten an array
// let arr=[1,2,3,[2,3,4],[4,5,6]];
// let result=arr.flat();
// console.log(result);
// let str=result.join('_');
// console.log(str);
// let arr=[12,[34,[54,[67,90,[123]]]]];
//let res=(arr.flat(2)); number of time
// let res=(arr.flat(Infinity));
// console.log(res);

//split()--->it split string with given character and return an array
let str="Hello world do not make noise";
let words=str.split(' ');
console.log(words);



words.forEach((word)=>{
    let s=word.trim();
    if(s.length>0){
        console.log(`${s}:${s.length}`);
    }
})

let arr=[1,2,3,4,5];
arr.reverse();
console.log(arr);

// //sort()----it sort array by default ascending order
// let arr=[30,80,78,90,45,23];
// arr.sort();
// console.log(arr);