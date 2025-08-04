let arr = [1,2,3,4,5]
let n = arr.length;
for(let i=0;i<=Math.floor(n/2);i++){
    let temp = arr[n-i-1]
    arr[n-i-1] = arr[i]
    arr[i] = temp
}

console.log(arr)