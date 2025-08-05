function avg(...arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = (sum+arr[i])
    }
    let avg = sum/arr.length;
    return avg;
}

console.log(avg(10,20))
console.log(avg(1,2,3,4,5))