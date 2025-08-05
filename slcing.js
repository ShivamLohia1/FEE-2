//slice(startIndex,endIndex)---it returns new array from startIndex to endIndex(excluded) 
//it does not change in original array
let arr=[34,56,78,90,12,22,54,76,10]
//contiguous-subarr
//non-contiguous-subsequence
// let subarr=arr.slice(1,6);
// console.log('arr: '+arr);
// console.log('subarr: '+subarr);
// let subarr=arr.slice(2,5);
//let subarr=arr.slice(5); //startIndex is given  5 uptill last element
//let subarr=arr.slice(-2);//negative index start from end
let subarr=arr.slice(-6,-1);
console.log(subarr);